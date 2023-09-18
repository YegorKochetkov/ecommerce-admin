import React from "react";
import { redirect } from "next/navigation";
import { auth, UserButton } from "@clerk/nextjs";

import MainNav from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import prismadb from "@/lib/prismadb";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <header className="flex items-center justify-between gap-x-4 border-b px-4 py-2">
      <nav className="flex flex-wrap items-center justify-between gap-4">
        <StoreSwitcher items={stores} />
        <MainNav className="py-2" />
      </nav>
      <UserButton afterSignOutUrl="/" />
    </header>
  );
};

export default Navbar;
