// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: boolean,
    statusCode: number,
    data: {

        id: number,
        name: string,
        harga: number,
        ukuran: string
    }[];
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const data =[{
        id: 1,
        name: "Hoodie",
        harga: 100000,
        ukuran: "XL",
    },
    {
        id: 2,
        name: "Hoodie baru",
        harga: 200000,
        ukuran: "XL, L",
    }
]
  res.status(200).json({ status: true, statusCode: 200, data })
}
