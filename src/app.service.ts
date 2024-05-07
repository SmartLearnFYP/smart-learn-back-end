import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';
import { ChatGPTdto, GPTResponseDTO } from './app.dto';

dotenv.config();

const openai = new OpenAI();

@Injectable()
export class AppService {
  constructor() {}

  async ConnectToOpenAI(data: GPTResponseDTO) {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: data.content,
        },
      ],
      model: 'gpt-4-turbo',
    });

    return completion.choices[0].message;
  }

  async ChatWithGPT(data: ChatGPTdto) {
    const completion = await openai.chat.completions.create({
      messages: data.messages,
      model: 'gpt-4-turbo',
    });

    return completion.choices[0].message;
  }
}
