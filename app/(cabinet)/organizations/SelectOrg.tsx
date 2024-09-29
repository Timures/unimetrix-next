"use client";
import { useProfile } from "@/hooks/useProfile";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SelectOrg() {
  const { data } = useProfile();
  const [organization, setOrganization] = useState();
  const router = useRouter();
  const handleValueChange = (value) => {
    setOrganization(value); // Update state
    router.push(`/organization/${value}`); // Navigate to the new URL
  };
  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Organizations" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data?.organizations.length ? (
            data.organizations.map((organization) => (
              <div key={organization.id}>
                <SelectItem value={organization.id}>
                  {organization.name}
                </SelectItem>
              </div>
            ))
          ) : (
            <div className="w-1/3">
              <p className="mb-5">You need add organization</p>
            </div>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
