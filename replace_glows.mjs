import fs from 'fs';

const files = [
  'src/components/recallos/ui/GradientButton.tsx',
  'src/components/recallos/FinalCTA.tsx',
  'src/components/recallos/Architecture.tsx',
  'src/components/recallos/Benchmarks.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // GradientButton
  content = content.replace(/rgba\(0,210,255,0\.6\)/g, 'rgba(101,255,154,0.35)');
  content = content.replace(/rgba\(0,210,255,0\.8\)/g, 'rgba(101,255,154,0.45)');
  
  // FinalCTA
  content = content.replace(/rgba\(0,210,255,0\.35\)/g, 'rgba(124,255,138,0.18)');
  content = content.replace(/rgba\(11,37,81,0\.2\)/g, 'rgba(101,255,154,0.10)');
  
  // Benchmarks
  content = content.replace(/rgba\(0,210,255,0\.4\)/g, 'rgba(101,255,154,0.25)');
  
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file}`);
});
