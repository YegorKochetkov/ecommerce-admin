"use client";

import toast from "react-hot-toast";
import { Copy, Server } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ApiAlertProps = {
  title: string;
  description: string;
  variant: "public" | "admin";
};

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export const ApiAlert = ({ title, description, variant }: ApiAlertProps) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("API Route copied to clipboard");
  };

  return (
    <Alert className="min-w-min max-w-max">
      <Server className="w-4" />
      <AlertTitle className="flex items-center gap-x-2">
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between gap-x-1">
        <code className="relative mr-4 break-words rounded bg-muted px-2 py-1 font-mono text-sm font-semibold">
          {description}
        </code>
        <Button size="icon" variant="outline" onClick={onCopy}>
          <Copy className="w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
