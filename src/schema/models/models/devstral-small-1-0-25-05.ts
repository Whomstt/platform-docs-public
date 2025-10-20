import { StaticModel } from '../schema';
export default {
  name: 'Devstral Small 1.0',
  description: `A 24B text model, open source model that excels at using tools to explore codebases, editing multiple files and power software engineering agents.`,
  shortDescription: `A 24B text model, open source model that excels at SWE use cases.`,
  slug: 'devstral-small-1-0-25-05',
  releaseDate: 'May 21, 2025',
  version: '25.05',
  type: 'Open',
  compliance: '',
  status: 'Deprecated',
  avatar: { icon: 'devstral', backgroundColor: 'beige' },
  weights: [
    {
      name: 'Weights',
      license: 'Apache 2.0',
      licenseUrl: 'https://www.apache.org/licenses/LICENSE-2.0.txt',
      url: 'https://huggingface.co/mistralai/Devstral-Small-2505',
      parameters: '24',
      minGpuRam: {
        bf16: '78',
        fp8: '39',
        fp4: '20',
      },
      active: '24',
      contextSize: '128',
    }
  ],
  ratings: { 
    speed: { stars: 3.0, label: 'Moderate' },
    performance: { stars: 3.0, label: 'Smart' }, input: { stars: 4.0, label: 'Fast' }, output: { stars: 2.0, label: 'Moderate' } },
  pricing: {
    type: 'custom',
    input: [
      { type: 'range', price: 0.1, denominator: '/M Tokens' }
    ],
    output: [
      { type: 'range', price: 0.3, denominator: '/M Tokens' }
    ]
  },
  identifiers: { apiNames: ['devstral-small-2505'] },
  capabilities: {
    input: ['text'],
    output: ['text'],
    features: ['structured-outputs', 'function-calling', 'document-qna', 'prefix', 'chat-completions', 'batching'],
    finetuning: [],
  },
  metadata: {deprecationDate: 'October 31, 2025', retirementDate: 'November 30, 2025', replacement: 'Devstral Small 1.1'},
  playground: 'https://console.mistral.ai/build/playground',
  legacy: true,
} as const satisfies StaticModel;
