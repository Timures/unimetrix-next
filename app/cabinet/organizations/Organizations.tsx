"use client";
import { Spinner } from "@/components/ui/spinner";
import { useProfile } from "@/hooks/useProfile";
import AddOrganization from "../organization/New";

export function Organizations() {
  const { data, isLoading } = useProfile();

  return isLoading ? (
    <Spinner size="small" className="text-gray-50" show={isLoading} />
  ) : (
    <div>
      {data?.organizations.length ? (
        data.organizations.map((organization) => (
          <div key={organization.id}>{organization.name}</div>
        ))
      ) : (
        <div className="w-1/3">
          <p className="mb-5">You need add organization</p>
        </div>
      )}
    </div>
  );
}
