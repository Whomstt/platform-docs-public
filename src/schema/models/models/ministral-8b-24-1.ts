import { StaticModel } from '../schema';
export default {
  name: 'Ministral 8B',
  description: `Powerful edge model with extremely high performance/price ratio. Learn more in our [blog post](https://mistral.ai/news/ministraux/)`,
  shortDescription: `Powerful edge model with extremely high performance/price ratio.`,
  slug: 'ministral-8b-24-1',
  releaseDate: 'October 9, 2024',
  version: '24.1',
  type: 'Frontier',
  compliance: '',
  status: 'Active',
  avatar: { icon: 'ministral', backgroundColor: 'red' },
  weights: [
    {
      name: 'Weights',
      license: 'MRL',
      licenseUrl: 'https://mistral.ai/static/licenses/MRL-0.1.md',
      url: 'https://huggingface.co/mistralai/Ministral-8B-Instruct-2410',
      parameters: '8',
      minGpuRam: {
        bf16: '42',
        fp8: '21',
        fp4: '11',
      },
      active: '8',
      contextSize: '128',
    }
  ],
  ratings: { 
    speed: { stars: 3.0, label: 'Moderate' },
    performance: { stars: 2.0, label: 'Moderate' }, input: { stars: 4.0, label: 'Fast' }, output: { stars: 2.0, label: 'Moderate' } },
  pricing: {
    type: 'custom',
    input: [
      { type: 'range', price: 0.1, denominator: '/M Tokens' }
    ],
    output: [
      { type: 'range', price: 0.1, denominator: '/M Tokens' }
    ]
  },
  identifiers: { apiNames: ['ministral-8b-2410', 'ministral-8b-latest'] },
  capabilities: {
    input: ['text'],
    output: ['text'],
    features: ['structured-outputs', 'function-calling', 'document-qna', 'prefix', 'chat-completions', 'batching'],
    finetuning: ['text'],
  },
  metadata: {},
  playground: 'https://console.mistral.ai/build/playground',
  legacy: false,
} as const satisfies StaticModel;
