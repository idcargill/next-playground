// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const DAD_JOKE_API = process.env.DAD_JOKE_API || "";
const DAD_JOKE_API_KEY = process.env.DAD_JOKE_API_KEY;

type RawJoke = {
  _id: string;
  setup: string;
  punchline: string;
  type: string;
  likes: number[];
  author: {
    name: string;
    id: null;
  }
  approved: boolean;
  date: number;
  NSFW: boolean;
  sharableLinkg: string;
}

interface RawJokeResponse {
  success: boolean;
  body: RawJoke[];
}

const config: AxiosRequestConfig = {
  headers: {
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
    'X-RapidAPI-Key': DAD_JOKE_API_KEY,
  }
}

const getDadJoke = async () => {
  const data: AxiosResponse = await axios.get(DAD_JOKE_API, config);
  return data.data.body[0];
}

export interface JokeResponse {
  setup: string;
  punchline: string;
}

const TestingResponse: JokeResponse = {
  setup: "This is a Test",
  punchline: "This is only a test",
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JokeResponse>
) {

  const headers = req.headers;
  if (headers['my-secret-auth'] === 'kitten') {
    res.status(200).json(TestingResponse)
    // JOKE FUNCTIONALITY
    // const joke: RawJoke = await getDadJoke();
    // const response: JokeResponse = {
    //   setup: joke.setup,
    //   punchline: joke.punchline,
    // }
  } else {
    // Unauthorized
    res.status(401).json({setup: 'You suck', punchline: "go away"});
  }
}
