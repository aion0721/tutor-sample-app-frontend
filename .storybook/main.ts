// .storybook/main.ts
import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "node:path";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)", "../src/**/*.mdx"],

  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
    // tsconfigPath を省略 → デフォルト tsconfig を使用
  },

  viteFinal: async (cfg) => {
    // "@/xxx" エイリアスが必要ならここだけ残す
    cfg.resolve = cfg.resolve ?? {};
    cfg.resolve.alias = {
      ...(cfg.resolve.alias ?? {}),
      "@": resolve(__dirname, "../src"),
    };
    return cfg;
  },
};

export default config;
