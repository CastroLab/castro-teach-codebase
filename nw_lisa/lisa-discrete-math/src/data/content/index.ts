export interface ContentBlock {
  type: 'text' | 'math' | 'definition' | 'theorem' | 'example' | 'warning' | 'video';
  content?: string;
  title?: string;
  display?: boolean;
  videoId?: string;
  timestamp?: number;
}

export interface ContentPage {
  id: string;
  title: string;
  subtitle?: string;
  blocks: ContentBlock[];
}

// Import content pages — will be populated by agents
import { day1Content } from './day1';
import { day2Content } from './day2';
import { day3Content } from './day3';
import { day4Content } from './day4';

const allContent: ContentPage[] = [...day1Content, ...day2Content, ...day3Content, ...day4Content];

export function getContent(contentId: string): ContentPage | undefined {
  return allContent.find(c => c.id === contentId);
}
