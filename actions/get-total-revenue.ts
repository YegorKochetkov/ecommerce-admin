import { Prisma } from '@prisma/client';
import prismadb from "@/lib/prismadb";

type OrderWithItems = Prisma.OrderGetPayload<{
  include: {
    orderItems: {
      include: {
        product: true;
      };
    };
  };
}>;

export const getTotalRevenue = async (storeId: string) => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const totalRevenue = paidOrders.reduce((total: number, order: OrderWithItems) => {
    const orderTotal = order.orderItems.reduce(
      (orderSum, item) => orderSum + Number(item.product.price),
      0,
    );

    return total + orderTotal;
  }, 0);

  return totalRevenue;
};
