// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      //Get prisma to fetch posts
      const data = await prisma.post.findMany()
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
