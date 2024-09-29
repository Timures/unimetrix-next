import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { organizationService } from "@/services/organization.service";
import { IOrganizationForm } from "@/types/organization.types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface CreateOrganizationFormProps {
  onSuccess: () => void; // Add this prop
}

export default function CreateOrganizationForm({
  onSuccess,
}: CreateOrganizationFormProps) {
  const { register, handleSubmit, reset } = useForm<IOrganizationForm>({
    mode: "onChange",
  });

  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["organization"],
    mutationFn: (data: IOrganizationForm) =>
      organizationService.createOrganization(data),
    onSuccess() {
      toast.success("Organization successfully created!");
      reset();
      push("/dashboard");
      onSuccess();
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
      <Button type="submit">Save changes</Button>
    </form>
  );
}
