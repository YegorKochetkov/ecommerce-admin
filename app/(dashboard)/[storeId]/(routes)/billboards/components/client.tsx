"use client";

import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { BillboardColumn, columns } from "./columns";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

const BillboardClient = ({ data }: { data: BillboardColumn[] }) => {
  const params = useParams();

  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center justify-between gap-y-3">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />

        <Button asChild className="min-w-fit">
          <Link href={`/${params.storeId}/billboards/new`}>
            <Plus className="mr-2 w-4" />
            Add New
          </Link>
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} />
    </React.Fragment>
  );
};

export default BillboardClient;
