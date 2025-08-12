'use client';

import MockupPage from '../components/result/MockupPage';
import Sidebar from '../components/layout/SideBar';
import ChatArea from '../components/result/ChatArea';
import { useGenerationStore } from '../store/useGenerationsStore';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function ResultPage() {
  const {
    generations,
    activeGenerationId,
    addMessage,
    createGeneration,
    selectGeneration,
  } = useGenerationStore();

  const currentMessages =
    generations.find((g) => g.id === activeGenerationId)?.messages || [];

  const handleSend = (text: string) => {
    if (!activeGenerationId) {
      createGeneration(text);
    }
    addMessage({ sender: 'user', text });
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex flex-col lg:flex-row relative'>
      {/* Bouton menu mobile */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className='lg:hidden p-2 absolute top-4 left-4 z-50 bg-white/10 rounded-lg'
      >
        <Menu className='text-white' />
      </button>

      {/* Sidebar overlay sur mobile */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 lg:hidden'
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar
        generations={generations}
        selectedId={activeGenerationId}
        onSelect={(id) => selectGeneration(id)}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <ChatArea messages={currentMessages} onSend={handleSend} />
      <MockupPage />
    </div>
  );
}
