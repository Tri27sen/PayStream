<<<<<<< HEAD
import React from "react";

import { InvoiceList } from "@/app/components/InvoiceList";
import { buttonVariants } from "../../../components/ui/button";
=======
import { InvoiceList } from "@/app/components/InvoiceList";
import { buttonVariants } from "@/components/ui/button";
>>>>>>> change
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
<<<<<<< HEAD
} from "../../../components/ui/card";
import { Skeleton } from "../../../components/ui/skeleton";
=======
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
>>>>>>> change
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function InvoicesRoute() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">Invoices</CardTitle>
            <CardDescription>Manage your invoices right here</CardDescription>
          </div>
          <Link href="/dashboard/invoices/create" className={buttonVariants()}>
            <PlusIcon /> Create Invoice
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<Skeleton className="w-full h-[500px]" />}>
          <InvoiceList />
        </Suspense>
      </CardContent>
    </Card>
  );
}