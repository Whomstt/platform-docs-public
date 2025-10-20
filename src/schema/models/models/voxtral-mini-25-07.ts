import { StaticModel } from '../schema';
export default {
  name: 'Voxtral Mini',
  description: `A mini version of our first audio input model.`,
  shortDescription: `A mini version of our first audio input model.`,
  slug: 'voxtral-mini-25-07',
  releaseDate: 'July 15, 2025',
  version: '25.07',
  type: 'Open',
  compliance: '',
  status: 'Active',
  avatar: { icon: 'voxtral', backgroundColor: 'pink' },
  weights: [
    {
      name: 'Weights',
      license: 'Apache 2.0',
      licenseUrl: 'https://www.apache.org/licenses/LICENSE-2.0.txt',
      url: 'https://huggingface.co/mistralai/Voxtral-Mini-3B-2507',
      parameters: '4',
      minGpuRam: {
        bf16: '14',
        fp8: '7',
        fp4: '4',
      },
      active: '4',
      contextSize: '32',
    }
  ],
  ratings: { 
    speed: { stars: 4.0, label: 'Fast' },
    performance: { stars: 2.0, label: 'Moderate' }, input: { stars: 4.0, label: 'Fast' }, output: { stars: 2.0, label: 'Moderate' } },
  pricing: {
    type: 'custom',
    input: [
      { type: 'range', price: 0.001, denominator: '/Min' },
      { type: 'flat', price: 0.04, denominator: '/M Tokens' }
    ],
    output: [
      { type: 'range', price: 0.04, denominator: '/M Tokens' }
    ]
  },
  identifiers: { apiNames: ['voxtral-mini-2507', 'voxtral-mini-latest'] },
  capabilities: {
    input: ['audio', 'text'],
    output: ['text'],
    features: ['structured-outputs', 'document-qna', 'prefix', 'chat-completions', 'batching'],
    finetuning: [],
  },
  metadata: {},
  playground: 'https://console.mistral.ai/build/playground',
  legacy: false,
} as const satisfies StaticModel;
