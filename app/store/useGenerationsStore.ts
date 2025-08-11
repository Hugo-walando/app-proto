import { create } from 'zustand';
import { Message, Generation } from '../types/index';

interface GenerationStore {
  generations: Generation[];
  activeGenerationId: string | null;
  addMessage: (message: Message) => void;
  createGeneration: (title: string) => void;
  selectGeneration: (id: string) => void;
}

export const useGenerationStore = create<GenerationStore>((set, get) => ({
  generations: [],
  activeGenerationId: null,

  createGeneration: (title) => {
    const newGen: Generation = {
      id: crypto.randomUUID(),
      title,
      messages: [],
    };
    set((state) => ({
      generations: [...state.generations, newGen],
      activeGenerationId: newGen.id,
    }));
  },

  addMessage: (message) => {
    const { generations, activeGenerationId } = get();
    if (!activeGenerationId) return;

    set({
      generations: generations.map((gen) =>
        gen.id === activeGenerationId
          ? { ...gen, messages: [...gen.messages, message] }
          : gen,
      ),
    });
  },

  selectGeneration: (id) => set({ activeGenerationId: id }),
}));
