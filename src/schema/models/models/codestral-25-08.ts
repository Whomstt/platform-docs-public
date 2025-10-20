import { StaticModel } from '../schema';
export default {
  name: 'Codestral',
  description: `Our cutting-edge language model for coding released end of July 2025, Codestral specializes in low-latency, high-frequency tasks such as fill-in-the-middle (FIM), code correction and test generation.`,
  shortDescription: `Our cutting-edge language model for coding released end of July 2025.`,
  slug: 'codestral-25-08',
  releaseDate: 'July 30, 2025',
  version: '25.08',
  type: 'Frontier',
  compliance: '',
  status: 'Active',
  avatar: { icon: 'codestral', backgroundColor: 'red' },
  weights: [],
  ratings: { 
    speed: { stars: 3.0, label: 'Moderate' },
    performance: { stars: 4.0, label: 'Very Smart' }, input: { stars: 4.0, label: 'Fast' }, output: { stars: 2.0, label: 'Moderate' } },
  pricing: {
    type: 'custom',
    input: [
      { type: 'range', price: 0.3, denominator: '/M Tokens' }
    ],
    output: [
      { type: 'range', price: 0.9, denominator: '/M Tokens' }
    ]
  },
  identifiers: { apiNames: ['codestral-2508', 'codestral-latest'] },
  capabilities: {
    input: ['text'],
    output: ['text'],
    features: ['structured-outputs', 'function-calling', 'predicted-outputs', 'document-qna', 'prefix', 'batching', 'chat-completions', 'fim'],
    finetuning: ['text'],
  },
  metadata: {},
  playground: 'https://console.mistral.ai/build/playground',
  legacy: false,
} as const satisfies StaticModel;
