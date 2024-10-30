import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatPhoneNumber } from "@/lib/utils";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Referral } from "../types/referral.types";

interface ComponentProps {
  form: UseFormReturn<Referral, any, undefined>;
}

const PersonalDetailsFields = ({ form }: ComponentProps) => {
  return (
    <>
      <h3 className="text-lg font-medium">Personal Details</h3>
      <hr className="!mt-1 border-gray-300" />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <FormField
          control={form.control}
          name="givenname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Given Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter given name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surname</FormLabel>
              <FormControl>
                <Input placeholder="Enter surname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Enter email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter phone"
                value={field.value}
                onChange={(e) => {
                  const formattedPhone = formatPhoneNumber(e.target.value);
                  field.onChange(formattedPhone);
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="notes"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Notes</FormLabel>
            <FormControl>
              <Textarea placeholder="Enter notes (optional)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default PersonalDetailsFields;
