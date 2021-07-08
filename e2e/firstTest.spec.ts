import { by, device, expect, element } from "detox";

describe("Test", () => {
  beforeAll(async () => {
    await device.launchApp({ permissions: { location: "always" } });
  });

  it("works", async () => {
    await expect(element(by.id("container"))).toBeVisible();
  });
});
