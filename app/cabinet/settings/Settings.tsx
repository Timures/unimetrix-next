"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { TypeUserForm } from "@/types/auth.types";
import { useUpdateSettings } from "./useUpdateSettings";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useInitialData } from "./useInitialData";
import { Button } from "@/components/ui/button";

export function Settings() {
  const { register, handleSubmit, reset } = useForm<TypeUserForm>({
    mode: "onChange",
  });

  useInitialData(reset);
  const { isPending, mutate } = useUpdateSettings();

  const onSubmit: SubmitHandler<TypeUserForm> = (data) => {
    const { password, ...rest } = data;

    mutate({
      ...rest,
      password: password || undefined,
    });
  };

  return (
    <div className="mt-5">
      <form className="w-2/4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div className="mb-3">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="name">Name</Label>
              <Input
                {...register("name")}
                type="text"
                id="name"
                placeholder="Enter Password"
              />
            </div>

            <div className="mb-3">
              <Label htmlFor="email">Password</Label>
              <Input
                {...register("password")}
                type="password"
                id="password"
                placeholder="Enter Password"
              />
            </div>

            <Button type="submit" disabled={isPending}>
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
