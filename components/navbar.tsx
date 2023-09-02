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
    <header className="border-b">
      <nav className="flex min-h-[4rem] flex-wrap items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="my-1 ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
