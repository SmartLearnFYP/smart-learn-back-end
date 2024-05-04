import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';
import { GenerateRoadmapDTO } from './app.dto';

dotenv.config();

const openai = new OpenAI();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/role-prediction')
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

  @Post('/api/roadmap')
  async GenerateRoadmap(@Body() generateRoadmapDTO: GenerateRoadmapDTO) {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: generateRoadmapDTO.content,
        },
      ],
      model: 'gpt-4-turbo',
    });
    generateRoadmapDTO = completion.choices[0].message;
    return generateRoadmapDTO;
  }

  getHello() {
    return 'Hello World!';
  }
}
