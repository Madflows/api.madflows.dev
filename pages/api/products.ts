// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    products: [
      {
        name: "Roasted Bread",
        amount: 30.00,
        quantity: 100
      },
      {
        name: "Playstation 5",
        amount: 730.00,
        quantity: 25,
        tag: 'Hot'
      },
      {
        name: "Macbook Pro M2",
        amount: 1830.00,
        quantity: 75
      },
      {
        name: "Xbox 360",
        amount: 590.00,
        quantity: 54
      },
    ],
  });
}
