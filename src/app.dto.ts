export class GPTResponseDTO {
  role: string;
  content: string;
}

export class ChatGPTDTO {
  messages: [
    {
      role: string;
      content: string;
    },
  ];
}
