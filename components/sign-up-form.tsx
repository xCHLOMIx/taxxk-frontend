"use client";
import { GalleryVerticalEnd } from "lucide-react";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [passcode, setPasscode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    // Only allow single digit
    const digit = value.replace(/\D/g, "").slice(-1);

    const newPasscode = [...passcode];
    newPasscode[index] = digit;
    setPasscode(newPasscode);

    // Move to next input if digit was entered
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newPasscode = [...passcode];
      newPasscode[index] = "";
      setPasscode(newPasscode);

      // Move to previous input on backspace
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    const newPasscode = [...passcode];
    for (let i = 0; i < pastedData.length; i++) {
      newPasscode[i] = pastedData[i];
    }
    setPasscode(newPasscode);

    // Focus on the last filled input or the next empty one
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to Taxxk.</h1>
            <FieldDescription>
              Already have an account? <Link href="sign-in">Sign in</Link>
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input
              id="username"
              type="text"
              placeholder="e.g John"
              className="p-3 h-max focus:border-black/20"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="e.g m@example.com"
              className="p-3 h-max focus:border-black/20"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="passcode">Passcode</FieldLabel>
            <div className="grid grid-cols-6 gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <Input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  id={`passcode-${index}`}
                  type="text"
                  placeholder="•"
                  value={passcode[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="p-3 py-3.5 text-center h-max focus:border-black/20"
                  maxLength={1}
                  required
                />
              ))}
            </div>
          </Field>
          <Field>
            <Button type="submit" className="p-3 cursor-pointer h-max">
              Sign Up
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
