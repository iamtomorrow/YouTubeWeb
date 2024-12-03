
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string 
}

const handler = ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
    return res.status(200).json({ name: "karl Sagan"});
}

export default handler;
