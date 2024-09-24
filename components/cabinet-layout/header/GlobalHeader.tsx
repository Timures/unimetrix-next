"use client";
import { Spinner } from "@/components/ui/spinner";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

export function GlobalLoader() {
  const isMutating = useIsMutating();
  const isFetching = useIsFetching();

  return isFetching || isMutating ? (
    <div className="fixed top-layout right-layout z-50">
      <Spinner size={"small"} show={true} className="text-gray-50" />
    </div>
  ) : null;
}
