import { shallowMount } from "@vue/test-utils";
import Register from "@/views/Register.vue";

describe("Register.vue", () => {
  it("renders Register component", () => {
    const wrapper = shallowMount(Register);
    expect(wrapper.exists()).toBe(true);
  });
});
