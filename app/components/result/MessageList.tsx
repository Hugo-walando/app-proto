import { Message } from '../../types/index';

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className='space-y-2 '>
      {messages.map((m, i) => (
        <div
          key={i}
          className={`p-3 rounded-xl border-2 border-white/10 max-w-xs ml-auto ${
            m.sender === 'user' ? 'bg-white-fade-bl' : 'bg-gray-700'
          }`}
        >
          <div className='truncate'>{m.text}</div>
          <div className='text-xs text-white/70 mt-1'>11H10</div>
        </div>
      ))}
    </div>
  );
}
