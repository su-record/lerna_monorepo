import { shallowMount } from "@vue/test-utils";
import CommonButton from "@/components/CommonButton.vue";

describe("CommonButton.vue", () => {
  it("renders props.msg when passed", () => {
    const label = "new test button label";
    const wrapper = shallowMount(CommonButton, {
      props: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});
