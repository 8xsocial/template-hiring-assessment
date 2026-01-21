import { Profile } from './database';

export * from './database';

// Auth types
export interface User {
  id: string;
  email: string;
  profile: Profile | null;
}

// Form types
export interface VideoGenerationForm {
  model: 'veo-3.1' | 'sora-2';
  aspectRatio: '16:9' | '9:16';
  prompt: string;
  removeWatermark: boolean;
}