import prisma from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { emailClient } from "@/app/utils/mailtrap";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ invoiceid: string }>;
  }
) {
  try {
    const session = await requireUser();

    const { invoiceid } = await params;
    console.log("the data is being resend  :>  ....")
    console.log(params)
    const invoiceData = await prisma.invoice.findUnique({
      where: {
        id: invoiceid,
        userId: session.user?.id,
      },
    });
    
    console.log("the invoiceData" , invoiceData )
    if (!invoiceData) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    const sender = {
      email: "hello@demomailtrap.com",
      name: "Trisha Sengupta",
    };
// 2a4dd45c-4e48-49ef-84bc-2ef3953d6bd7
//cd3d06ac-4e51-48fc-b2d3-e4924b00cd10
//console.log(params)
   await emailClient.send({
      from: sender,
      to: [{ email: "trishasengupta27@gmail.com" }],
      template_uuid: "71b84dfe-c994-42eb-a22f-ebded2687eeb",
      template_variables: {
        clientName: invoiceData.fromName,
        invoiceNumber: invoiceData.invoiceNumber,
        invoiceAmount: invoiceData.total + " " + invoiceData.currency,
        invoice_status: invoiceData.status,
        invoice_date: invoiceData.date.toISOString().split("T")[0],
        invoiceDueDate: invoiceData.dueDate + " days from issue",
        invoice_item_description: invoiceData.invoiceItemDescription,
        invoice_item_quantity: invoiceData.invoiceItemQuantity,
        invoiceLink: process.env.NODE_ENV !== "production"
        ? `http://localhost:3000/api/invoice/${invoiceData.id}`
        : `https://invoice-marshal.vercel.app/api/invoice/${invoiceData.id}`,
        invoice_item_rate: invoiceData.invoiceItemRate + " " + invoiceData.currency,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Failed to send Email reminder" },
      { status: 500 }
    );
  }
}