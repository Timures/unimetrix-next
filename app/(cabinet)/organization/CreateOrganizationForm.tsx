"use client";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { organizationService } from "@/services/organization.service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IOrganizationForm } from "@/types/organization.types";

interface CreateOrganizationFormProps {
  onSuccess: () => void; // Add this prop
}

export default function CreateOrganizationForm({
  onSuccess,
}: CreateOrganizationFormProps) {
  const { register, handleSubmit, reset, watch, setValue } =
    useForm<IOrganizationForm>({
      mode: "onChange",
    });

  const { push } = useRouter();

  // Slug generation function
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-"); // Replace multiple hyphens with a single one
  };

  // Watch for changes in the organization name
  const name = watch("name");

  // Update slug whenever name changes
  useEffect(() => {
    if (name) {
      const slug = generateSlug(name);
      setValue("slug", slug);
    }
  }, [name, setValue]);

  const { mutate } = useMutation({
    mutationKey: ["organization"],
    mutationFn: (data: IOrganizationForm) =>
      organizationService.createOrganization(data),
    onSuccess() {
      toast.success("Organization successfully created!");
      reset();
      // fetch
      push("/dashboard");
      onSuccess();
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Server error. Organization not created."
      );
    },
  });

  const onSubmit: SubmitHandler<IOrganizationForm> = (
    data: IOrganizationForm
  ) => {
    mutate(data);
  };

  return (
    <form className="grid items-start gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <Label htmlFor="name">Organization name</Label>
        <Input id="name" {...register("name")} defaultValue="My company" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="slug">Organization slug</Label>
        <Input id="slug" {...register("slug")} readOnly />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
