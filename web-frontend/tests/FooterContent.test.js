import FooterContent from "@/components/FooterContent.vue";
import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";

describe("component: FooterComponent.vue", () => {
  test("Component name should be correct", async () => {
    expect("FooterContent").toBe(FooterContent.__name)
  })
  test("Component can accept value as props and render as HTML", async () => {
    const expected = "© Untitled. All rights reserved.Design: HTML5 UP";
    const wrapper = shallowMount(FooterContent)
    // // if compoenents has props
    // const wrapper = shallowMount(FooterContent, { props: {
    //   msg: "Hi, there!"
    // }});
    expect(wrapper.text()).toContain(expected);
  })
});
