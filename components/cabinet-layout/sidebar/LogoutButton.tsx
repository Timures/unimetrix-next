"use client";

import { Button } from "@/components/ui/button";
import { authService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess: () => router.push("/auth"),
  });
  return (
    <div className="absolute top-1 right-1">
      <Button
        onClick={() => mutate()}
        size={"icon"}
        variant={"ghost"}
        title="Log Out"
      >
        <LogOut size={20} />
      </Button>
    </div>
  );
}
