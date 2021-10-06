import { europe } from '../../../data/europe'
import { north_america } from '../../../data/north_america'
import { south_america } from '../../../data/south_america'
import { africa } from '../../../data/africa'
import { asia } from '../../../data/asia'
import { oceania } from '../../../data/oceania'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: {
    name: string,
    description: string,
    total_of_countries: number,
    total_of_languages: number,
    cities_over_hundred: number,
    img: string,
    cities: {
      name: string,
      country: string,
      img: string
    }[]
  }
} 

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | string>
) {
  const continent = req.query.id
  switch (continent) {
    case 'europe':
      res.status(200).json({ data: europe })
    case 'africa':
      res.status(200).json({ data: africa })
    case 'north_america':
      res.status(200).json({ data: north_america })
    case 'south_america':
      res.status(200).json({ data: south_america })
    case 'asia':
      res.status(200).json({ data: asia })
    case 'oceania':
      res.status(200).json({ data: oceania })
    default:
      res.status(500).send('continente não existente')
      break;
  }
  
}
