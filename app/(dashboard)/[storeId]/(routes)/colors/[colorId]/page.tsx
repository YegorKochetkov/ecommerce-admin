import React from "react";

import prismadb from "@/lib/prismadb";
import { Color } from "./components/color";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  const color = await prismadb.color.findUnique({
    where: { id: params.colorId },
  });

  return (
    // <div className="flex flex-1">
    //   <div className="flex-1 gap-y-4 p-8 pt-6">
    <Color initialData={color} />
    //   </div>
    // </div>
  );
};

export default ColorPage;
