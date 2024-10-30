"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReferralFormValues, referralSchema } from "@/lib/referralSchema";
import { useRouter, useSearchParams } from "next/navigation";
import PersonalDetailsFields from "./components/PersonalDetailsFields";
import AddressFields from "./components/AddressFields";
import { Delete, FilePenLine } from "lucide-react";
import { Referral } from "./types/referral.types";
import ReferralItem from "./components/ReferralItem";

export default function App() {
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("id");

  const formMethods = useForm<ReferralFormValues>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      givenname: "",
      surname: "",
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
      notes: "",
    },
  });

  useEffect(() => {
    async function fetchReferrals() {
      const res = await fetch("/api/referrals");
      const data = await res.json();
      setReferrals(data);
    }
    fetchReferrals();
  }, []);

  useEffect(() => {
    if (editId) {
      const referralToEdit = referrals.find(
        (referral) => referral.id === parseInt(editId)
      );
      if (referralToEdit) {
        formMethods.reset(referralToEdit);
      }
    }
  }, [editId, referrals, formMethods]);

  const handleSubmit = async (data: ReferralFormValues) => {
    if (editId) {
      const res = await fetch(`/api/referrals/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const updatedReferral = await res.json();
      setReferrals((prev) =>
        prev.map((referral) =>
          referral.id === updatedReferral.id ? updatedReferral : referral
        )
      );
    } else {
      const res = await fetch("/api/referrals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const newReferral = await res.json();
      setReferrals((prev) => [...prev, newReferral]);
    }

    formMethods.reset();
    router.push("/");
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/referrals/${id}`, { method: "DELETE" });
    setReferrals((prev) => prev.filter((referral) => referral.id !== id));
  };

  const startEdit = (id: number) => {
    router.push(`/?id=${id}`);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-2xl">
            {editId ? "Edit Referral" : "Add Referral"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormProvider {...formMethods}>
            <form
              onSubmit={formMethods.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <PersonalDetailsFields form={formMethods} />
              <AddressFields form={formMethods} />
              <Button type="submit" className="w-full">
                {editId ? "Update Referral" : "Add Referral"}
              </Button>
            </form>
          </FormProvider>
        </CardContent>
      </Card>

      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Referral List</CardTitle>
        </CardHeader>
        <CardContent>
          {referrals.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No referrals yet. Create one to get started!
            </p>
          ) : (
            <table className="table-fixed w-full">
              <thead>
                <tr className="text-left border-t border-b h-10">
                  <th className="w-28">Given Name</th>
                  <th className="w-28">Last Name</th>
                  <th className="w-64">Email</th>
                  <th>Phone Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {referrals.map((referral) => (
                  <ReferralItem
                    key={referral.id}
                    referral={referral}
                    handleDelete={handleDelete}
                    startEdit={startEdit}
                  />
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
