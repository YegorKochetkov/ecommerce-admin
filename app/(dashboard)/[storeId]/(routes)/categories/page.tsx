import React from "react";
import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import CategoryClient from "./components/client";
import { CategoryColumn } from "./components/columns";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formattedCategories: CategoryColumn[] = categories.map((category) => ({
    id: category.id,
    name: category.name,
    billboardLabel: category.billboard.label,
    createdAt: format(new Date(category.createdAt), "MMMM do, yyyy"),
  }));

  return (
    // <div className="flex flex-col">
    //   <div className="flex-1 space-y-4">
    <CategoryClient data={formattedCategories} />
    //   </div>
    // </div>
  );
};

export default CategoriesPage;
