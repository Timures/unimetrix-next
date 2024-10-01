"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { TypeUserForm } from "@/types/auth.types";
import { useUpdateSettings } from "./useUpdateSettings";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useInitialData } from "./useInitialData";
import { Button } from "@/components/ui/button";

export function Settings() {
  const { register, handleSubmit, reset, watch } = useForm<TypeUserForm>({
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

  // Получаем роли из формы
  const roles = watch("roles") || [];

  return (
    <div className="flex min-h-screen">
      <div className=" m-auto shadow bg-gray-900 rounded-xl p-4 flex flex-col justify-center items-center gap-3 w-1/3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <Label htmlFor="name">Name</Label>
            <Input
              {...register("name")}
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>

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
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password")}
              type="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Roles</Label>
            {/* Перебираем массив ролей и выводим их */}
            {roles.map((role, index) => (
              <p key={index}>{role}</p> // Выводим каждую роль в отдельном элементе <p>
            ))}
          </div>

          <div className="mt-4">
            <Button type="submit" disabled={isPending}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
