import { shallowMount } from "@vue/test-utils";
import PlanView from "@/components/PlanView.vue";

describe("MyComponent", () => {
  it("renders the component", () => {
    const wrapper = shallowMount(MyComponent);
    expect(wrapper.exists()).toBe(true);
  });
});
