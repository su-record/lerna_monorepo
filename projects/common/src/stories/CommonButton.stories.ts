import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import CommonButton from '../components/CommonButton.vue';

export default {
  title: 'Clicked/button',
  component: CommonButton,
  argTypes: {
    label: {
      description: '버튼에 나타낼 이름',
    },
    theme: {
      description: '버튼의 글자색',
    },
  },
} as Meta<typeof CommonButton>;

const Template: StoryFn<typeof CommonButton> = args => ({
  components: { CommonButton },

  setup() {
    const bgColor = ref('bg-slate-500');

    const onToggle = (() => {
      const isClick = ref(false);

      return () => {
        isClick.value = !isClick.value;
        bgColor.value = isClick.value ? 'bg-slate-100' : 'bg-slate-500';

        return isClick.value;
      };
    })();

    const toggle = function () {
      if (onToggle()) console.log('#### click true!');
      else console.log('### click false!');
    };
    return {
      args,
      toggle,
      bgColor,
    };
  },

  template: `
    <CommonButton
      class="button"
      @click="toggle"
      v-bind="args"
      :bg-color="bgColor"
    >
      <img style="width:200px" src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt="info 1" />
    </CommonButton>`,
});

export const Default = Template.bind({});
Default.args = {
  label: 'button',
  theme: { color: 'blue' },
};
Default.parameters = {
  docs: {
    source: {
      code: `<CommonButton class="button" @click="toggle" v-bind="args" :bg-color="bgColor">
                <img style="width:200px" src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt="info 1" />
          </CommonButton>`,
    },
  },
};
