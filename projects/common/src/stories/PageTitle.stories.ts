import { Meta, StoryFn } from '@storybook/vue3';
import { EmitsOptions, Ref, ref } from 'vue';

// component import
import PageTitle from '@/components/PageTitle.vue';

// export stories
export default {
  title: 'PageTitle',
  component: PageTitle,
} as Meta<typeof PageTitle>;

const Template: StoryFn<typeof PageTitle> = args => ({
  components: { PageTitle },
  setup() {
    return { args };
  },
  template: `<PageTitle v-bind="args"><div style="width:197.33px; height: 197.33px;" class="bg-contain bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcmlSgULXtE4jj7DA3KTExqoSFn7LdIroXCZb4fVNX9cU9ayc7xtWWVb4oiQUgUvSxrc&usqp=CAU')]"></div></PageTitle>`,
});

export const Default = Template.bind({});
Default.args = {
  // props
  guidance: {
    ko: '이동 중입니다.',
    en: "I'm moving.",
  },
  secondGuidance: {
    ko: '지나갈 수 있도록 도와주세요.',
    en: 'Could you stop aside so that I can pass through.',
  },
  lowerBoxDisplay: true,
  upperBoxTheme: 'font-black text-center text-7xl mt-[60px] block tracking-[0.02em]',
  lowerBoxTheme: 'font-black text-center text-7xl mt-16 block tracking-[0.02em]',
  guidanceEnTheme: '48px',
};
