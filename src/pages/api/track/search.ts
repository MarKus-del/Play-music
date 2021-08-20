import { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { apiNext } from "../../../services/api";
import { Track } from "../../../services/types";

type RequestSearchDeezer = {
  data: Track[];
  next?: string | null;
  total: number;
  prev?: string | null;
};

export default async function handleSearch(
  req: NextApiRequest,
  res: NextApiResponse<RequestSearchDeezer>
) {
  const { name, index } = req.query;
  console.log("valor do index: " + (+index));
  
  const { data }: AxiosResponse<RequestSearchDeezer> = await apiNext.get(
    `https://api.deezer.com/search/track`,
    {
      params: {
        q: name,
        limit: 10,
        index: +index
      },
    }
  );

  console.log(data.data[0]);
  

  return res.json(data);
}
