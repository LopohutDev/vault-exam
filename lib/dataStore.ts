import fs from "fs/promises";
import path from "path";
import { Referral } from "@/app/types/referral.types";

const filePath = path.join(process.cwd(), "app", "referrals.json");

async function readData(): Promise<Referral[]> {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data) as Referral[];
  } catch (error) {
    console.error("Error reading data:", error);
    return [];
  }
}

async function writeData(data: Referral[]): Promise<void> {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing data:", error);
  }
}

export async function getAllReferrals() {
  return await readData();
}

export async function addReferral(
  data: Omit<Referral, "id">
): Promise<Referral> {
  const referrals = await readData();
  const newReferral: Referral = { id: Date.now(), ...data };
  referrals.push(newReferral);
  await writeData(referrals);
  return newReferral;
}

export async function updateReferral(
  id: number,
  data: Partial<Omit<Referral, "id">>
): Promise<Referral | null> {
  const referrals = await readData();
  const index = referrals.findIndex((referral) => referral.id === id);
  if (index === -1) return null;

  referrals[index] = { ...referrals[index], ...data };
  await writeData(referrals);
  return referrals[index];
}

export async function deleteReferral(id: number): Promise<Referral | null> {
  const referrals = await readData();
  const index = referrals.findIndex((referral) => referral.id === id);
  if (index === -1) return null;

  const [deletedReferral] = referrals.splice(index, 1);
  await writeData(referrals);
  return deletedReferral;
}
