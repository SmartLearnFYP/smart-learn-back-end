import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { ChatGPTdto, GPTResponseDTO } from './app.dto';

dotenv.config();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api/chat')
  async ChatWithGPT(@Body() chatGPTdto: ChatGPTdto) {
    return this.appService.ChatWithGPT(chatGPTdto);
  }

  @Post('/api/ai')
  async GetPrediction(@Body() gPTResponseDTO: GPTResponseDTO) {
    return this.appService.ConnectToOpenAI(gPTResponseDTO);
  }
}
