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

export function Auth() {
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
    <div className="flex min-h-screen">
      <form
        className="w-1/4 m-auto shadow rounded-xl p-layout flex flex-col justify-center items-center gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Auth
        </h4>

        <Separator />

        <div className="flex flex-col gap-3">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Password</Label>
            <Input
              {...register("password")}
              type="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>
        </div>

        <div className="flex items-center gap-5 justify-center">
          <Button onClick={() => setIsLoginForm(true)}>Login</Button>
          <Button onClick={() => setIsLoginForm(false)}>Register</Button>
        </div>
      </form>
    </div>
  );
}
