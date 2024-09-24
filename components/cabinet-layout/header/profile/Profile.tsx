"use client";

import { Spinner } from "@/components/ui/spinner";
import { useProfile } from "@/hooks/useProfile";

export function Profile() {
  const { data, isLoading } = useProfile();

  return (
    <div className="mr-0">
      {isLoading ? (
        <Spinner size={"small"} show={isLoading} className="text-gray-50" />
      ) : (
        <div className="flex items-center gap-3">
          <div className="text-right mr-0">
            <p className="font-bold -mb-1">{data?.user.name}</p>
            <p className="text-sm opacity-40">{data?.user.email}</p>
          </div>

          <div className="w-10 h-10 flex justify-center items-center text-2xl text-white bg-white/20 rounded uppercase">
            {data?.user.name?.charAt(0) || "A"}
          </div>
        </div>
      )}
    </div>
  );
}
