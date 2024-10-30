import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Referral } from "../types/referral.types";

interface ComponentProps {
  form: UseFormReturn<Referral, any, undefined>;
}

const AddressFields = ({ form }: ComponentProps) => {
  return (
    <>
      <h3 className="text-lg font-medium">Address</h3>
      <hr className="!mt-1 border-gray-300" />
      <FormField
        control={form.control}
        name="address.street"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Street</FormLabel>
            <FormControl>
              <Input placeholder="Enter street" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <FormField
          control={form.control}
          name="address.city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Enter city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address.state"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="Enter state" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <FormField
          control={form.control}
          name="address.postalCode"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Postal Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter postal code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address.country"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="Enter country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default AddressFields;
