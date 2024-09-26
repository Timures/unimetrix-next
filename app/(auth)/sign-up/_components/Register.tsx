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
      push("/cabinet");
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = (data: IAuthForm) => {
    mutate(data);
  };
  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign up to your account
      </h1>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
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
          <Button type="submit" className="w-full bg-black">
            Register
          </Button>
        </div>
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
      </form>
    </div>
  );
}
