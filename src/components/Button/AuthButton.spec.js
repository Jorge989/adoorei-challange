import { shallowMount } from "@vue/test-utils";
import AuthButton from "@/components/Button/AuthButton.vue";

describe("AuthButton", () => {
  it("renders the button with the correct text", () => {
    const text = "Sign In";
    const wrapper = shallowMount(AuthButton, {
      propsData: { text },
    });
    expect(wrapper.text()).toBe(text);
  });

  it('renders the button with the "loading" class if isLoading is true', () => {
    const wrapper = shallowMount(AuthButton, {
      propsData: { isLoading: true },
    });
    expect(wrapper.classes()).toContain("loading");
  });

  it('renders the button with the "left-align" class if the text is "escolher esse plano"', () => {
    const wrapper = shallowMount(AuthButton, {
      propsData: { text: "escolher esse plano" },
    });
    expect(wrapper.classes()).toContain("left-align");
  });

  it('renders the button with the "auth-button-register" class if isRegister is true', () => {
    const wrapper = shallowMount(AuthButton, {
      propsData: { isRegister: true },
    });
    expect(wrapper.classes()).toContain("auth-button-register");
  });
});
