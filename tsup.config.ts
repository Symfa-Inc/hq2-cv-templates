import { defineConfig } from "tsup";
import fs from 'fs-extra';

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  onSuccess: async () => {
    await fs.copy('fonts', 'dist/fonts');
  },
});
