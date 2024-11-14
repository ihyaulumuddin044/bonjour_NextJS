import { retriveData } from '@/lib/firebase/service';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    status: boolean,
    statusCode: number,
    data: any,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const apiKey = process.env.FIREBASE_API_KEY;
    const data = await retriveData('product');
    console.log('Data retrieved:', data); 
    console.log(apiKey); // Tambahkan log di sini
    res.status(200).json({ status: true, statusCode: 200, data: data });
}
