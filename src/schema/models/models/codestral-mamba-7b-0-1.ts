import { StaticModel } from '../schema';
export default {
  name: 'Codestral Mamba 7B',
  description: `A coding dedicated model using a mamba 2 architecture for research purposes under an open license.`,
  shortDescription: `A coding dedicated model using a mamba 2 architecture for research purposes.`,
  slug: 'codestral-mamba-7b-0-1',
  releaseDate: 'July 16, 2024',
  version: '0.1',
  type: 'Open',
  compliance: '',
  status: 'Retired',
  avatar: { icon: 'codestral-mamba', backgroundColor: 'orange' },
  weights: [
    {
      name: 'Weights',
      license: 'Apache 2.0',
      licenseUrl: 'https://www.apache.org/licenses/LICENSE-2.0.txt',
      url: 'https://huggingface.co/mistralai/Mamba-Codestral-7B-v0.1',
      parameters: '7',
      minGpuRam: {
        bf16: '20',
        fp8: '10',
        fp4: '5',
      },
      active: '7',
      contextSize: '256',
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
  identifiers: { apiNames: ['open-codestral-mamba'] },
  capabilities: {
    input: ['text'],
    output: ['text'],
    features: [],
    finetuning: [],
  },
  metadata: {deprecationDate: 'June 6, 2025', retirementDate: 'June 6, 2025', replacement: 'Codestral'},
  playground: '',
  legacy: true,
} as const satisfies StaticModel;
