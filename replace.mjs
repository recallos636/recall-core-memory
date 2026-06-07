import fs from 'fs';

const files = [
  'src/components/recallos/Architecture.tsx',
  'src/components/recallos/Benchmarks.tsx',
  'src/components/recallos/Features.tsx',
  'src/components/recallos/MemoryTerminal.tsx',
  'src/components/recallos/Pricing.tsx',
  'src/components/recallos/Testimonials.tsx',
  'src/components/recallos/ui/GradientButton.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/#00d2ff/gi, '#7CFF8A');
  content = content.replace(/#A4F4FD/gi, '#4AFF71');
  content = content.replace(/#0B2551/gi, '#0F2A18');
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file}`);
});
