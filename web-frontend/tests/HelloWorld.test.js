import HelloWorld from "@/components/HelloWorld.vue";
import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";

describe("component: HelloWorld.vue", () => {
  test("Component name should be HelloWorld", async () => {
    expect("HelloWorld").toBe(HelloWorld.__name)
  })
  test("Component can accept value as props and render as HTML", async () => {
    const expected = "Hi, there!";
    const wrapper = shallowMount(HelloWorld, { props: {
      msg: "Hi, there!"
    }});
    expect(wrapper.text()).toContain(expected);
  })
});
