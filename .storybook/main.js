module.exports = {
  stories: [
    "../projects/common-ui/stories/**/*.stories.mdx",
    "../projects/common-ui/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/vue3",
};
