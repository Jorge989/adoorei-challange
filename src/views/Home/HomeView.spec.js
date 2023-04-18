import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
  it("should render the correct video URL", () => {
    const wrapper = mount(HomeView);
    const iframe = wrapper.find("iframe");
    expect(iframe.attributes("src")).toBe(
      "https://www.youtube.com/embed/fpa2W3YNg0Q"
    );
  });
});
