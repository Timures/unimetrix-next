"use client";
import { useProfile } from "@/hooks/useProfile";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export function SelectOrg() {
  const { data } = useProfile();
  const [organizationSlug, setOrganizationSlug] = useState<
    string | undefined
  >();
  const pathname = usePathname();
  const router = useRouter();

  // Извлечение ID организации из пути
  useEffect(() => {
    const parts = pathname.split("/");
    const organizationIndex = parts.indexOf("organization");

    // Проверяем, есть ли индекс "organization" и есть ли следующий элемент
    if (organizationIndex !== -1 && parts.length > organizationIndex + 1) {
      const id = parts[organizationIndex + 1]; // Получаем ID организации
      setOrganizationSlug(id); // Устанавливаем ID в состояние
    }
  }, [pathname]);
  const handleValueChange = (value: string) => {
    setOrganizationSlug(value); // Обновляем состояние
    router.push(`/organization/${value}`); // Navigate to the new URL
  };
  return (
    <Select value={organizationSlug} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Organizations" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data?.organizations.length ? (
            data.organizations.map((organization) => (
              <div key={organization.id}>
                <SelectItem value={organization.slug}>
                  {organization.name}
                </SelectItem>
              </div>
            ))
          ) : (
            <div className="w-1/3">
              <p className="mb-5">You need add organization</p>
            </div>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
