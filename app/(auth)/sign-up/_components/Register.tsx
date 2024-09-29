"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authService } from "@/services/auth.service";
import { IAuthForm } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
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

export default function Register() {
  const { register, handleSubmit, reset, setValue } = useForm<IAuthForm>({
    mode: "onChange",
  });

  useEffect(() => {
    setValue("roles", ["OWNER"]);
  }, [setValue]);

  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IAuthForm) => authService.main("register", data),
    onSuccess() {
      toast.success("Successfully login!");
      reset();
      push("/dashboard");
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = (data: IAuthForm) => {
    mutate(data);
  };
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">Github</Button>
          <Button variant="outline">Google</Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-foreground dark:bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
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
            <Link href={"/sign-in"}>Sign In</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}
