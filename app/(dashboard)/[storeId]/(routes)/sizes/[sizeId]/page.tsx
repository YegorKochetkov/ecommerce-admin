import React from "react";

import prismadb from "@/lib/prismadb";
import { Size } from "./components/size";

const SizePage = async ({ params }: { params: { sizeId: string } }) => {
  const size = await prismadb.size.findUnique({
    where: { id: params.sizeId },
  });

  return (
    // <div className="flex flex-1">
    //   <div className="flex-1 gap-y-4 p-8 pt-6">
    <Size initialData={size} />
    //   </div>
    // </div>
  );
};

export default SizePage;
