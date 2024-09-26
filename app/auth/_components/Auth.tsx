"use client";

import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Button } from "@/components/ui/button";

export function Auth() {
  const [isLoginForm, setIsLoginForm] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div className=" m-auto shadow bg-gray-900 rounded-xl p-4 flex flex-col justify-center items-center gap-3 w-1/3">
        {isLoginForm ? <Register /> : <Login />}

        <div>
          {isLoginForm ? (
            <div>
              <span className="text-xs">Have account? </span>
              <Button
                onClick={() => setIsLoginForm(false)}
                size={"sm"}
                variant={"link"}
                className="text-yellow-400"
              >
                Login
              </Button>
            </div>
          ) : (
            <div>
              <span className="text-xs">Don't have an account?</span>
              <Button
                onClick={() => setIsLoginForm(true)}
                size={"sm"}
                variant={"link"}
                className="text-yellow-400"
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
