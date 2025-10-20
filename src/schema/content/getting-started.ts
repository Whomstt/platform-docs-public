import {
  ChatIcon,
  GlassesIcon,
  ComputerIcon,
  SearchIcon,
  PageIcon,
  MusicIcon,
} from '@/components/icons/pixel';
import { ModelKey, ModelSlug } from '../models';

export const BUILDING_FEATURES = [
  {
    title: 'Text and Chat Completions',
    description: 'Generate smart responses from natural language prompts',
    icon: ChatIcon,
    iconClassName: undefined,
    href: '/capabilities/completion',
  },
  {
    title: 'Vision',
    description: 'Visual and textual intelligence, combined',
    icon: GlassesIcon,
    iconClassName: undefined,
    href: '/capabilities/vision',
  },
  {
    title: 'Agents',
    description: 'Use agents to optimize the chat workflow',
    icon: ComputerIcon,
    iconClassName: 'w-5 h-5',
    href: '/agents/introduction',
  },
  {
    title: 'Reasoning',
    description: 'Stronger answers through step-by-step thinking',
    icon: SearchIcon,
    iconClassName: 'w-5 h-5',
    href: '/capabilities/reasoning',
  },
  {
    title: 'Document AI',
    description: 'Fast, accurate, and scalable document automation',
    icon: PageIcon,
    iconClassName: 'w-5 h-5',
    href: '/capabilities/document_ai/basic_ocr',
  },
  {
    title: 'Audio',
    description: 'Speech-to-text and interactive audio capabilities',
    icon: MusicIcon,
    iconClassName: 'w-5 h-5',
    href: '/capabilities/audio_transcription',
  },
] as const;

export const HERO_AVATAR_CARDS: ModelSlug[] = [
  'codestral-25-08',
  'mistral-large-2-1-24-11',
  'pixtral-12b-24-09',
] as const;
