import { cleanup, init, device } from "detox";
import config from "../detox.config";

beforeAll(async () => {
  await init(config as Detox.DetoxConfig, { initGlobals: false });
  await device.launchApp();
});

afterAll(async () => {
  await cleanup();
});
