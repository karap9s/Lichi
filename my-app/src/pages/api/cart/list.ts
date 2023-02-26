import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let headers = {};

  if (req.body.sid) {
    headers = {
      Cookie: `${req.body.sid};`,
    };
  }

  const response = await axios.post(
    'https://api.lichi.com/cart/list',
    {
      lang: req.body.lang,
      shop: req.body.shop,
    },
    {
      headers,
    }
  );

  let sid = null;

  if (req.body.sid === null) {
    const cookies = response.headers['set-cookie'];
    const localSid = cookies
      ?.find((item) => item.includes('SID='))
      ?.split(';')
      .find((item) => item.includes('SID='));
    if (localSid) {
      sid = localSid;
    }
  }

  const data = response.data;

  res.status(200).json({ sid, data });
}
