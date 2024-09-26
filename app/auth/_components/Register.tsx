"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { authService } from "@/services/auth.service";
import { IAuthForm } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Register() {
  const { register, handleSubmit, reset } = useForm<IAuthForm>({
    mode: "onChange",
  });

  const [isLoginForm, setIsLoginForm] = useState(false);

  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IAuthForm) =>
      authService.main(isLoginForm ? "login" : "register", data),
    onSuccess() {
      toast.success("Successfully login!");
      reset();
      push("/cabinet");
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = (data: IAuthForm) => {
    mutate(data);
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Register
      </h4>

      <Separator />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="email">Password</Label>
          <Input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Enter Password"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="repeat">Repeat Password</Label>
          <Input
            {...register("password")}
            type="password"
            id="repeat"
            placeholder="Repeat Password"
          />
        </div>
      </div>

      <div className="flex items-center gap-5 justify-center ">
        <Button
          onClick={() => setIsLoginForm(false)}
          className="bg-black w-full"
        >
          Register
        </Button>
      </div>
    </form>
  );
}
