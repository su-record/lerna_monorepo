import SelectBox from "@/components/SelectBox.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";
import { TIME_SET } from "@/constants/const";

export default {
  title: "Select/SelectBox",
  component: SelectBox,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
} as Meta<typeof SelectBox>;

const Template: StoryFn<typeof SelectBox> = args => ({
  components: { SelectBox },
  setup() {
    const model = ref(30);

    return {
      model,
      args,
    };
  },
  template: `<select-box v-model:modelValue="model" v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  options: TIME_SET,
};

console.log("#### stories value ::", TIME_SET);
