import { ref } from 'vue';
import SelectBox from '../components/SelectBox.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import { TEMP_OPTIONS } from '../constants/const';

export default {
  title: 'Select/SelectBox',
  component: SelectBox,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
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
  options: TEMP_OPTIONS,
};

console.log('#### stories value ::', TEMP_OPTIONS);
