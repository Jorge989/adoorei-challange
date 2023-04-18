import { shallowMount } from "@vue/test-utils";
import PlanView from "@/components/Plan/PlanView.vue";

describe("PlanView", () => {
  it("renders without props", () => {
    const wrapper = shallowMount(PlanView);
    expect(wrapper.exists()).toBe(true);
  });
});
