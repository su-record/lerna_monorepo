import { Meta, StoryFn } from '@storybook/vue3';
import { EmitsOptions, Ref, ref } from 'vue';
import CheckBox from '@/components/CheckBox.vue';

export default {
  title: 'Input/CheckBox',
  component: CheckBox,
} as Meta<typeof CheckBox>;

const Template: StoryFn<typeof CheckBox> = (args, { updateArgs }) => ({
  components: { CheckBox },
  setup() {
    const model = ref('Y');
    return { model, args };
  },
  template: `<check-box v-model="model" v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  bgColor: '',
};
Default.parameters = {
  docs: {
    source: {
      code: `<check-box v-model="model" bg-color="#..."/>`,
    },
  },
};

export const Slide = Template.bind({});
Slide.args = {
  bgColor: '#3466c2',
  isSlide: true,
};
Slide.parameters = {
  docs: {
    source: {
      code: `<check-box v-model="model" bg-color="#FFFFFF" slide/>`,
    },
  },
};

export const Square = Template.bind({});
Square.args = {
  bgColor: '#53d350',
  isSquare: true,
};
Square.parameters = {
  docs: {
    source: {
      code: `<check-box v-model="model" bg-color="#FFO" square/>`,
    },
  },
};
