import InputForm from '../InputForm';
import MessageList from './MessageList';

interface ChatAreaProps {
  messages: { sender: 'user' | 'ai'; text: string }[];
  onSend: (text: string) => void;
}

export default function ChatArea({ messages, onSend }: ChatAreaProps) {
  return (
    <section className='flex flex-col lg:w-1/3 p-4 border-r border-white/10 relative max-h-screen overflow-hidden'>
      <div className='absolute bottom-[-100px] left-10 w-[400px] h-[200px] bg-purple-glow blur-3xl -z-20'></div>

      <div className='flex-1 overflow-y-auto mb-4 max-h-screen'>
        <MessageList messages={messages} />
      </div>
      <div className='sticky bottom-2 p-4'>
        <InputForm onSubmit={onSend} />
      </div>
    </section>
  );
}
