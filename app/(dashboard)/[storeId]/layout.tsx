import { redirect } from "next/navigation";
import React from "react";

import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId: userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <React.Fragment>
      <div>this will be a navbar</div>
      {children}
    </React.Fragment>
  );
}
