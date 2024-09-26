"use client";
import { Button } from "@/components/ui/button";
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
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
        </div>

        <div className="flex items-center gap-5 justify-center">
          <Button type="submit" className="bg-black w-full">
            Login
          </Button>
        </div>
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
      </form>
    </div>
  );
}
