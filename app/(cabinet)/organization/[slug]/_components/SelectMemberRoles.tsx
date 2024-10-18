"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Role } from "@/types/auth.types";

interface SelectMemberRolesProps {
  onValueChange: (value: string) => void; // Добавляем пропс для передачи значения
}

export function SelectMemberRoles({ onValueChange }: SelectMemberRolesProps) {
  const [memberRole, setMemberRole] = useState<string | undefined>(Role.MEMBER);

  const handleValueChange = (value: Role) => {
    setMemberRole(value);
    onValueChange(value);
  };

  useEffect(() => {
    if (memberRole !== undefined) {
      onValueChange(memberRole);
    } // Обновляем значение при изменении memberRole
  }, [memberRole, onValueChange]);
  return (
    <Select value={memberRole} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Roles" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={Role.MEMBER}>{Role.MEMBER}</SelectItem>
          <SelectItem value={Role.MANAGER}>{Role.MANAGER}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
