"use client";

import { organizationService } from "@/services/organization.service";
import { IOrganizationResponse } from "@/types/organization.types";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

interface FetchOrganizationProps {
  slug: string; // Expecting the organization ID as a prop
}

export default function FetchOrganization({ slug }: FetchOrganizationProps) {
  const {
    data: organization,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery<IOrganizationResponse | null, Error>({
    queryKey: ["organization", slug],
    queryFn: () => organizationService.getOrganizationBySlug(slug),
  });

  useEffect(() => {
    if (isError) {
      toast.error(`Ошибка при загрузке организации: ${error?.message}`);
    }
    if (isSuccess) {
      toast.success("Организация успешно загружена!");
    }
  }, [isError, isSuccess, error]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{organization?.name || "Organization not found"}</h1>
      {/* You can add more details about the organization here */}
      {organization && (
        <div>
          <p>Description: {organization.slug}</p>
          {/* Add other organization details as needed */}
        </div>
      )}
    </div>
  );
}
