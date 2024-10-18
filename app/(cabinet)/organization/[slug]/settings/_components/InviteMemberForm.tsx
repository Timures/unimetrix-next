"use client";

import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IMemberForm } from "@/types/member.types";
import { memberService } from "@/services/member.service";
import { useProfile } from "@/hooks/useProfile";
import { useEffect, useState } from "react";
import { SelectMemberRoles } from "../../_components/SelectMemberRoles";

interface InviteMemberFormProps {
  onSuccess: () => void; // Add this prop
}

export default function InviteMemberForm({ onSuccess }: InviteMemberFormProps) {
  const { register, handleSubmit, reset } = useForm<IMemberForm>({
    mode: "onChange",
  });

  const { data } = useProfile();
  const [organizationSlug, setOrganizationSlug] = useState<
    string | undefined
  >();
  const [organizationId, setOrganizationId] = useState<string | undefined>();
  const [role, setRole] = useState<string | undefined>();
  const pathname = usePathname();

  // Извлечение ID организации из пути
  useEffect(() => {
    const parts = pathname.split("/");
    const organizationIndex = parts.indexOf("organization");

    // Проверяем, есть ли индекс "organization" и есть ли следующий элемент
    if (organizationIndex !== -1 && parts.length > organizationIndex + 1) {
      const slug = parts[organizationIndex + 1]; // Получаем slug организации
      setOrganizationSlug(slug); // Устанавливаем slug в состояние
      setOrganizationId(
        data?.organizations.find((el) => el.slug === organizationSlug)?.id
      );
    }
  }, [pathname, data?.organizations, organizationSlug]);

  const { mutate, isPending } = useMutation({
    mutationKey: ["organization"],
    mutationFn: (data: IMemberForm) => memberService.inviteMember(data),
    onSuccess() {
      toast.success("Member successfully invited!");
      reset();
      // fetch
      // push("/dashboard");
      onSuccess();
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error: any) {
      toast.error(
        error?.response?.data?.message || "Server error. Invite not send."
      );
    },
  });

  const onSubmit: SubmitHandler<IMemberForm> = (data: IMemberForm) => {
    if (organizationId !== undefined && role !== undefined) {
      data.organizationId = organizationId;
      data.role = role;
      mutate(data);
    }
  };

  return (
    <form className="grid items-start gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <Label htmlFor="name">User email</Label>
        <Input id="mail" {...register("email")} defaultValue="member@test.ru" />
      </div>
      <SelectMemberRoles onValueChange={setRole} />
      <Button type="submit" disabled={isPending}>
        {" "}
        {/* Делаем кнопку disabled при загрузке */}
        {isPending ? "Sending..." : "Send invite"} {/* Изменяем текст кнопки */}
      </Button>
    </form>
  );
}
