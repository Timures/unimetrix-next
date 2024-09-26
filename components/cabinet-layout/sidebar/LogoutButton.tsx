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
    onSuccess: () => router.push("/sign-in"),
  });
  return (
    <div className="w-10 h-10 ">
      <Button
        onClick={() => mutate()}
        size={"icon"}
        variant={"default"}
        title="Log Out"
      >
        <LogOut size={24} />
      </Button>
    </div>
  );
}
