import React from "react";

import prismadb from "@/lib/prismadb";
import { Billboard } from "./components/billboard";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: { id: params.billboardId },
  });

  return (
    // <div className="flex flex-1">
    //   <div className="flex-1 gap-y-4 p-8 pt-6">
    <Billboard initialData={billboard} />
    //   </div>
    // </div>
  );
};

export default BillboardPage;
