"use client";

import { organizationService } from "@/services/organization.service";
import { IOrganizationResponse } from "@/types/organization.types";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

interface FetchOrganizationProps {
  slug: string; // Expecting the organization ID as a prop
}

export default function FetchOrganization({ slug }: FetchOrganizationProps) {
  const {
    data: organization,
    error,
    isLoading,
  } = useQuery<IOrganizationResponse, Error>({
    queryKey: ["organization", slug],
    queryFn: () => organizationService.getOrganizationBySlug(slug),
    onSuccess: () => {
      toast.success("Organization successfully fetched!");
    },
    onError: (error) => {
      toast.error(`Error fetching organization: ${error.message}`);
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{organization?.name}</h1>
    </div>
  );
}
