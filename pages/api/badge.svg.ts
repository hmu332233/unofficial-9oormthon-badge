// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { createSvg } from 'utils/svg';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const svg = createSvg();

  res.setHeader('Content-Type', 'image/svg+xml');
  // res.setHeader('Cache-Control', 's-maxage=300, max-age=300');
  res.status(200).end(svg);
}
