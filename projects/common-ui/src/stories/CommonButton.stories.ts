import CommonButton from "../components/CommonButton.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "CommonButton",
  component: CommonButton,
  argTypes: {
    onClick: {},
  },
} as Meta<typeof CommonButton>;

const Template: StoryFn<typeof CommonButton> = (args) => ({
  components: { CommonButton },
  setup() {
    return {
      args,
    };
  },
  template: `<common-button v-bind="args" />`,
});

export const Overwrite = Template.bind({});
Overwrite.args = {
  label: "common ui components",
  overwrite: true,
  theme: "flex",
};
