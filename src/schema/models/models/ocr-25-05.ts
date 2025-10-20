import { StaticModel } from '../schema';
export default {
  name: 'OCR',
  description: `Our OCR service powering our Document AI stack that enables our users to extract interleaved text and images`,
  shortDescription: `Our OCR service powering our Document AI stack.`,
  slug: 'ocr-25-05',
  releaseDate: 'May 22, 2025',
  version: '25.05',
  type: 'Frontier',
  compliance: '',
  status: 'Active',
  avatar: { icon: 'ocr', backgroundColor: 'gray' },
  weights: [],
  ratings: { 
    speed: { stars: 4.0, label: 'Fast' },
    performance: { stars: 3.0, label: 'Smart' }, input: { stars: 4.0, label: 'Fast' }, output: { stars: 2.0, label: 'Moderate' } },
  pricing: {
    type: 'custom',
    input: [
      { type: 'flat', price: 1.0, denominator: '/1000 Pages' },
      { type: 'flat', price: 3.0, denominator: '/1000 Annotated Pages' }
    ],
    output: [
      
    ]
  },
  identifiers: { apiNames: ['mistral-ocr-2505', 'mistral-ocr-latest'] },
  capabilities: {
    input: ['image', 'document'],
    output: ['text', 'image'],
    features: ['bbox-extraction', 'ocr', 'annotations-structured-ocr', 'batching'],
    finetuning: [],
  },
  metadata: {},
  playground: '',
  legacy: false,
} as const satisfies StaticModel;
