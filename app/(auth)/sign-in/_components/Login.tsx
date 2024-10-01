"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authService } from "@/services/auth.service";
import { IAuthForm } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Login() {
  const { register, handleSubmit, reset } = useForm<IAuthForm>({
    mode: "onChange",
  });

  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IAuthForm) => authService.main("login", data),
    onSuccess() {
      reset();
      push("/dashboard");
      toast.success("Successfully login!");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error: any) {
      // Display error message using toast
      toast.error(
        error?.response?.data?.message || "Login failed. Please try again."
      );
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = (data: IAuthForm) => {
    mutate(data);
  };
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign in to account</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
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
        <Button
          type="submit"
          className="w-full"
          onClick={handleSubmit(onSubmit)}
        >
          Sign In
        </Button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Button
            variant={"link"}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            asChild
          >
            <Link href={"/sign-up"}>Sign Up</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}
