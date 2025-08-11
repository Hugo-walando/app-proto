// types/chat.ts

export interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export interface Generation {
  id: string; // utile pour retrouver facilement la génération
  title: string;
  messages: Message[];
}
