import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';
import { GPTResponseDTO } from './app.dto';

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

  async ChatWithGPT(data: GPTResponseDTO) {
    let all_messages: Array<GPTResponseDTO> = [data];

    if (all_messages.length === 35) {
      all_messages = [];
    } else {
      // all_messages.push(data);
      console.log('data: ', data.content);
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

      all_messages.push(completion.choices[0].message);
    }
    return all_messages;
  }
}
