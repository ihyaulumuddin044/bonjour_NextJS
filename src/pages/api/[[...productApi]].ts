import { retriveData, retriveDataByID } from '@/lib/firebase/service';
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
  if (req.query.productApi![1]) {
    const data = await retriveDataByID('product', req.query.productApi![1]);
    res.status(200).json({ status: true, statusCode: 200, data: data });

  } else {
    // const apiKey = process.env.FIREBASE_API_KEY;
    const data = await retriveData('product');
    // console.log('Data retrieved:', data); 
    // console.log(apiKey); // Tambahkan log di sini
    res.status(200).json({ status: true, statusCode: 200, data: data });
  }
  
}

