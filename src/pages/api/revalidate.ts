// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
 revalidate: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try {
    res.revalidate("/products/static")
    return res.json({revalidate: true})
    } catch (error) {
        res.status(500).send({ revalidate: false })
    }
//   res.status(200).json({ name: 'Jane Doe', age: 20, specise: 'human' })
}
