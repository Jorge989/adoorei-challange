import { mount } from "@vue/test-utils";
import LoginView from "@/views/LoginView.vue";

describe("LoginView", () => {
  it("renders correctly", () => {
    const wrapper = mount(LoginView);
    expect(wrapper.exists()).toBe(true);
  });
});
