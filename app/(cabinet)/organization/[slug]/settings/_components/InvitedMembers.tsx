"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useProfile } from "@/hooks/useProfile";
import { memberService } from "@/services/member.service";
import { IMember } from "@/types/member.types";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { InviteMember } from "./InviteMember";
import { Separator } from "@/components/ui/separator";

export const InvitedMembers = () => {
  const { data } = useProfile();
  const [organizationSlug, setOrganizationSlug] = useState<
    string | undefined
  >();
  const [organizationId, setOrganizationId] = useState<string | undefined>();
  const pathname = usePathname();

  // Извлечение ID организации из пути
  useEffect(() => {
    const parts = pathname.split("/");
    const organizationIndex = parts.indexOf("organization");

    // Проверяем, есть ли индекс "organization" и есть ли следующий элемент
    if (organizationIndex !== -1 && parts.length > organizationIndex + 1) {
      const slug = parts[organizationIndex + 1]; // Получаем slug организации
      setOrganizationSlug(slug); // Устанавливаем slug в состояние
      const orgId = data?.organizations.find(
        (el) => el.slug === organizationSlug
      )?.id; // Используем slug для получения ID
      // setOrganizationId(
      //   data?.organizations.find((el) => el.slug === organizationSlug)?.id
      // );
      setOrganizationId(orgId);
    }
  }, [pathname, data?.organizations, organizationSlug]);

  const {
    data: members = [],
    isLoading,
    isError,
    error,
    isSuccess,
    refetch,
  } = useQuery<IMember[]>({
    queryKey: ["invite", organizationId],
    queryFn: () => {
      if (!organizationId) {
        throw new Error("Organization ID is undefined");
      }
      return memberService.getMembers(organizationId);
    },
    enabled: !!organizationId,
  });

  useEffect(() => {
    if (isError) {
      toast.error(`Error fetching organization: ${error?.message}`);
    }
    if (isSuccess) {
      toast.success("Invited Members successfully fetched!");
    }
  }, [isError, isSuccess, error]);

  const formattedDate = (date: Date) => {
    const formatted = new Date(date).toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
    return formatted;
  };

  if (isLoading) return <p>Loading...</p>;
  if (!Array.isArray(members)) {
    console.error("Members is not an array:", members);
    return <p>Ошибка получения данных</p>;
  }

  return (
    <div>
      <header className="flex justify-between items-center p-2 mb-3">
        <h2>Invited Members</h2>
        <InviteMember onSuccess={refetch} />
      </header>
      <Separator />
      <Table>
        <TableCaption>A list of your recent invites.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Created</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Expired</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member: IMember) => (
            <TableRow key={member.email}>
              <TableCell className="font-medium">
                {formattedDate(member.createdAt)}
              </TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>
                {" "}
                {Array.isArray(member.roles)
                  ? member.roles.join(", ")
                  : member.roles}
              </TableCell>
              <TableCell className="text-right">
                {formattedDate(member.expiresAt)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
