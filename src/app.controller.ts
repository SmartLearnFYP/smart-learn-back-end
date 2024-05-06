import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { GPTResponseDTO } from './app.dto';

dotenv.config();

// const openai = new OpenAI();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api/chat')
  async ChatWithGPT(@Body() gPTResponseDTO: GPTResponseDTO) {
    return this.appService.ConnectToOpenAI(gPTResponseDTO);
  }

  @Post('/api/prediction')
  async GetPrediction(@Body() gPTResponseDTO: GPTResponseDTO) {
    return this.appService.ConnectToOpenAI(gPTResponseDTO);
  }

  @Post('/api/roadmap')
  async GenerateRoadmap(@Body() gPTResponseDTO: GPTResponseDTO) {
    return this.appService.ConnectToOpenAI(gPTResponseDTO);
  }
}
