import { build } from 'esbuild';
import { execSync } from 'child_process';

// Generate TypeScript declarations first
console.log('Generating TypeScript declarations...');
try {
  execSync('npx tsc --emitDeclarationOnly', { stdio: 'inherit' });
  console.log('TypeScript declarations generated successfully!');
} catch (error) {
  console.error('Failed to generate TypeScript declarations:', error.message);
  process.exit(1);
}

// Build configuration shared between entry points
const buildConfig = {
  bundle: true,
  splitting: true, // Enable code splitting
  platform: 'neutral', // Neutral platform for cross-platform compatibility
  target: 'es2022',
  format: 'esm',
  external: [
    'console',
    'luxon'
  ],
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  metafile: true,
  minify: false, // Keep readable for debugging
  outdir: 'dist',
};

// Build main cross-platform version
console.log('Building cross-platform version...');
await build({
  ...buildConfig,
  entryPoints: [
    'src/index.ts',
    'src/item/index.ts',
    'src/key/index.ts',
    'src/query/index.ts',
    'src/operations/index.ts',
    'src/Coordinate.ts'
  ],
});

console.log('Build completed successfully!');
console.log(`- Cross-platform build: dist/`);
console.log(`- TypeScript declarations: dist/**/*.d.ts`);
