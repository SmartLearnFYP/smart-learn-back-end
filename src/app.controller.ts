import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';
import { GPTResponseDTO } from './app.dto';

dotenv.config();

const openai = new OpenAI();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api/prediction')
  async getApi(@Body() gPTResponseDTO: GPTResponseDTO) {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant. Your reply should be like so, 
          with major role and secondary role separated by a slash, 
          nothing more than that, no extra text, omit the text in brackets:
          Predicted Role: devops engineer(major role, closer to my skills)/
          system engineer(another role, close to my skills)/
          network(another role,close to my skills)`,
        },
        {
          role: 'user',
          content: gPTResponseDTO.content,
        },
      ],
      model: 'gpt-4-turbo',
    });
    gPTResponseDTO = completion.choices[0].message;
    return gPTResponseDTO;
  }

  @Post('/api/roadmap')
  async GenerateRoadmap(@Body() gPTResponseDTO: GPTResponseDTO) {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: gPTResponseDTO.content,
        },
      ],
      model: 'gpt-4-turbo',
    });
    gPTResponseDTO = completion.choices[0].message;
    return gPTResponseDTO;
  }

  getHello() {
    return 'Hello World!';
  }
}
