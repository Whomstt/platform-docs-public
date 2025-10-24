import { StaticModel } from '../schema';
export default {
  name: 'Mistral Embed',
  description: `Our state-of-the-art semantic for extracting representation of code extracts`,
  shortDescription: `Our state-of-the-art semantic for extracting representation of code extracts`,
  slug: 'mistral-embed-23-12',
  releaseDate: 'December 11, 2023',
  version: '23.12',
  type: 'Frontier',
  compliance: '',
  status: 'Active',
  avatar: { icon: 'mistral-embed', backgroundColor: 'green' },
  weights: [],
  ratings: { 
    speed: { stars: 4.0, label: 'Fast' },
    performance: { stars: 2.0, label: 'Moderate' }, input: { stars: 4.0, label: 'Fast' }, output: { stars: 2.0, label: 'Moderate' } },
  pricing: {
    type: 'custom',
    input: [
      { type: 'flat', price: 0.1, denominator: '/M Tokens' }
    ],
    output: [
      
    ]
  },
  identifiers: { apiNames: ['mistral-embed'] },
  capabilities: {
    input: ['text'],
    output: [],
    features: ['embeddings', 'batching'],
    finetuning: [],
  },
  metadata: {},
  playground: '',
  legacy: false,
} as const satisfies StaticModel;
