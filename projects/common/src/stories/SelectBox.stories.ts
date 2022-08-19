import SelectBox from '@/components/SelectBox.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { FIX_PROMOTION } from '@/constants/const/Admin';

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
  options: FIX_PROMOTION,
};

console.log('#### stories value ::', FIX_PROMOTION);
