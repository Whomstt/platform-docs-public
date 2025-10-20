import { StaticModel } from '../schema';
export default {
  name: 'Mistral 7B',
  description: `A minor update to our first open model.`,
  shortDescription: `A minor update to our first open model.`,
  slug: 'mistral-7b-0-3',
  releaseDate: 'May 22, 2024',
  version: '0.3',
  type: 'Open',
  compliance: '',
  status: 'Retired',
  avatar: { icon: 'mistral-7b', backgroundColor: 'red' },
  weights: [
    {
      name: 'Instruct Weights',
      license: 'Apache 2.0',
      licenseUrl: 'https://www.apache.org/licenses/LICENSE-2.0.txt',
      url: 'https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3',
      parameters: '7',
      minGpuRam: {
        bf16: '20',
        fp8: '10',
        fp4: '5',
      },
      active: '7',
      contextSize: '32',
    },    {
      name: 'Base Weights',
      license: 'Apache 2.0',
      licenseUrl: 'https://www.apache.org/licenses/LICENSE-2.0.txt',
      url: 'https://huggingface.co/mistralai/Mistral-7B-v0.3',
      parameters: '7',
      minGpuRam: {
        bf16: '20',
        fp8: '10',
        fp4: '5',
      },
      active: '7',
      contextSize: '32',
    }
  ],
  ratings: { 
    speed: { stars: 0.0, label: 'Slow' },
    performance: { stars: 0.0, label: 'Basic' }, input: { stars: 4.0, label: 'Fast' }, output: { stars: 2.0, label: 'Moderate' } },
  pricing: {
    type: 'custom',
    input: [
      
    ],
    output: [
      
    ]
  },
  identifiers: { apiNames: ['open-mistral-7b'] },
  capabilities: {
    input: ['text'],
    output: ['text'],
    features: [],
    finetuning: [],
  },
  metadata: {deprecationDate: 'November 30, 2024', retirementDate: 'March 30, 2025', replacement: 'Ministral 8B'},
  playground: '',
  legacy: true,
} as const satisfies StaticModel;
