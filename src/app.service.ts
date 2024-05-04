import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI();

@Injectable()
export class AppService {
  async getApi() {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Who won the world series in 2020?' },
      ],
      // model: 'gpt-3.5-turbo',
      model: 'gpt-4-turbo',
    });

    return completion.choices[0].message;
  }

  GenerateRoadmap = async () => {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Who won the world series in 2020?' },
      ],
      // model: 'gpt-3.5-turbo',
      model: 'gpt-4-turbo',
    });

    return completion.choices[0];
  };

  getHello() {
    return 'Hello World!';
  }
}
