import { defineConfig } from "tsup";
import tsconfigPaths from "tsconfig-paths";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  esbuildPlugins: [
    {
      name: "tsconfig-paths",
      setup(build) {
        const cleanup = tsconfigPaths.register({
          baseUrl: ".",
          paths: {
            "@/*": ["src/*"],
          },
        });

        build.onEnd(() => cleanup());
      },
    },
  ],
});
