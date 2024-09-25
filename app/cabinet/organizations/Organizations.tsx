"use client";
import { Spinner } from "@/components/ui/spinner";
import { useProfile } from "@/hooks/useProfile";

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
        <div>Please add Organization</div>
      )}
    </div>
  );
}
