import React, { useState } from "react";
import { Referral } from "../types/referral.types";
import { Button } from "@/components/ui/button";
import { Delete, FilePenLine, Maximize2, Minimize2 } from "lucide-react";

interface ComponentProps {
  referral: Referral;
  startEdit: (id: number) => void;
  handleDelete: (id: number) => Promise<void>;
}

const ReferralItem = ({
  referral,
  handleDelete,
  startEdit,
}: ComponentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <tr className="first:border-t-0 border-t last:border-b h-12">
        <td>{referral.givenname}</td>
        <td>{referral.surname}</td>
        <td>{referral.email}</td>
        <td>{referral.phone}</td>
        <td>
          <div className="flex gap-2 items-center h-full">
            <Button
              variant={"outline"}
              onClick={() => referral.id && startEdit(referral.id)}
              className="p-2"
            >
              <FilePenLine />
            </Button>
            <Button
              variant={"outline"}
              onClick={() => referral.id && handleDelete(referral.id)}
              className="border-red-500 p-2"
            >
              <Delete className="text-red-500 " />
            </Button>
            <Button
              variant={"outline"}
              onClick={() => setIsExpanded((prev) => !prev)}
              className="p-2"
            >
              {isExpanded ? <Minimize2 /> : <Maximize2 />}
            </Button>
          </div>
        </td>
      </tr>
      {isExpanded && (
        <tr>
          <td colSpan={5} className="p-4 bg-gray-50">
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isExpanded ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
              }`}
            >
              <strong>Address:</strong>
              <p>
                {referral.address.street}, {referral.address.city},{" "}
                {referral.address.state}
              </p>
              <p>
                {referral.address.postalCode}, {referral.address.country}
              </p>
              {referral.notes && (
                <>
                  <strong>Notes:</strong>
                  <p>{referral.notes}</p>
                </>
              )}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default ReferralItem;
