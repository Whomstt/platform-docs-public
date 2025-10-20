import { StaticModel } from '../schema';
export default {
  name: 'Mistral Moderation',
  description: `Our moderation service that enables our users to detect harmful text content`,
  shortDescription: `Our moderation service that enables our users to detect harmful text content.`,
  slug: 'mistral-moderation-24-11',
  releaseDate: 'November 6, 2024',
  version: '24.11',
  type: 'Frontier',
  compliance: '',
  status: 'Active',
  avatar: { icon: 'mistral-embed', backgroundColor: 'red' },
  weights: [],
  ratings: { 
    speed: { stars: 4.0, label: 'Fast' },
    performance: { stars: 3.0, label: 'Smart' }, input: { stars: 4.0, label: 'Fast' }, output: { stars: 2.0, label: 'Moderate' } },
  pricing: {
    type: 'custom',
    input: [
      { type: 'flat', price: 0.1, denominator: '/M Tokens' }
    ],
    output: [
      
    ]
  },
  identifiers: { apiNames: ['mistral-moderation-2411', 'mistral-moderation-latest'] },
  capabilities: {
    input: ['text'],
    output: [],
    features: ['moderations', 'batching'],
    finetuning: [],
  },
  metadata: {},
  playground: '',
  legacy: false,
} as const satisfies StaticModel;
