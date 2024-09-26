import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { organizationService } from "@/services/organization.service";
import { IOrganizationForm } from "@/types/organization.types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function AddOrganization() {
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
      push("/cabinet");
    },
  });

  const onSubmit: SubmitHandler<IOrganizationForm> = (
    data: IOrganizationForm
  ) => {
    mutate(data);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Add Organization
      </h4>

      <Separator />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Label htmlFor="name">Name</Label>
          <Input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Enter name"
          />
        </div>
      </div>

      <div className="flex items-center gap-5 justify-center ">
        <Button type="submit" className="bg-black w-full">
          Add Organization
        </Button>
      </div>
    </form>
  );
}
