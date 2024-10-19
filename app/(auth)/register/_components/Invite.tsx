/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authService } from "@/services/auth.service";
import { IAuthForm, IRegisterInviteForm } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";

import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Invite() {
  const searchParams = useSearchParams();
  const inviteToken = searchParams.get("inviteToken"); // Получаем inviteToken из query

  const { register, handleSubmit, reset } = useForm<IRegisterInviteForm>({
    mode: "onChange",
  });

  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IRegisterInviteForm) => authService.registerInvite(data),
    onSuccess() {
      toast.success("Successfully login!");
      reset();
      push("/dashboard");
    },
    onError(error: any) {
      // Display error message using toast
      toast.error(
        error?.response?.data?.message ||
          "User invite failed. Please try again."
      );
    },
  });

  const onSubmit: SubmitHandler<IRegisterInviteForm> = (
    data: IRegisterInviteForm
  ) => {
    const dataWithInviteToken = { ...data, inviteToken };
    console.log("dataWithInviteToken", dataWithInviteToken, inviteToken);
    mutate(dataWithInviteToken);
  };
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">
          Create an account
        </CardTitle>
        <CardDescription>
          Enter your Name, Email and password below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Name</Label>
          <Input
            {...register("name")}
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="m@example.com"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input {...register("password")} id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full" onClick={handleSubmit(onSubmit)}>
          Create account
        </Button>

        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Have an account?{" "}
          <Button
            variant={"link"}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            asChild
          >
            <Link href={"/sign-in"}>Sign in</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}
