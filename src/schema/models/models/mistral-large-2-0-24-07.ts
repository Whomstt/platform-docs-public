import { StaticModel } from '../schema';
export default {
  name: 'Mistral Large 2.0',
  description: `A powerfull model with open weights under a MRL license, competing agains SOTA much larger models.`,
  shortDescription: `A powerfull model with open weights under a MRL license.`,
  slug: 'mistral-large-2-0-24-07',
  releaseDate: 'July 24, 2024',
  version: '24.07',
  type: 'Frontier',
  compliance: '',
  status: 'Retired',
  avatar: { icon: 'mistral-large', backgroundColor: 'purple' },
  weights: [
    {
      name: 'Weights',
      license: 'MRL',
      licenseUrl: 'https://mistral.ai/static/licenses/MRL-0.1.md',
      url: 'https://huggingface.co/mistralai/Mistral-Large-Instruct-2407',
      parameters: '123',
      minGpuRam: {
        bf16: '297',
        fp8: '149',
        fp4: '75',
      },
      active: '123',
      contextSize: '128',
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
  identifiers: { apiNames: ['mistral-large-2407'] },
  capabilities: {
    input: ['text'],
    output: ['text'],
    features: [],
    finetuning: [],
  },
  metadata: {deprecationDate: 'November 30, 2024', retirementDate: 'March 30, 2025', replacement: 'Mistral Medium 3.1'},
  playground: '',
  legacy: true,
} as const satisfies StaticModel;
