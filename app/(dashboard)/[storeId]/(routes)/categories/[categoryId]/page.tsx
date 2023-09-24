import React from "react";

import prismadb from "@/lib/prismadb";
import { Category } from "./components/category";

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    // <div className="flex flex-1">
    //   <div className="flex-1 gap-y-4 p-8 pt-6">
    <Category billboards={billboards} initialData={category} />
    //   </div>
    // </div>
  );
};

export default CategoryPage;
