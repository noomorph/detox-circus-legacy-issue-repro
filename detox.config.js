module.exports = {
  testRunner: "jest",
  runnerConfig: "e2e/config.json",
  behavior: {
    init: {
      exposeGlobals: true,
    },
  },
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone 12",
      },
    },
    emulator: {
      type: "android.emulator",
      device: {
        avdName: "Pixel_API_30",
      },
    },
  },
  apps: {
    "ios.release": {
      type: "ios.app",
      binaryPath:
        "ios/build/Build/Products/Release-iphonesimulator/TestDetox.app",
      build:
        "export RCT_NO_LAUNCH_PACKAGER=true && xcodebuild -workspace ios/TestDetox.xcworkspace -scheme TestDetox -configuration Release -sdk iphonesimulator -derivedDataPath ios/build -quiet",
    },
    "android.release": {
      type: "android.apk",
      binaryPath: "android/app/build/ouputs/aab/release/app-release.apk",
      build:
        "cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd -",
    },
  },
  configurations: {
    "ios.sim.release": {
      device: "simulator",
      app: "ios.release",
    },
    "android.emu.release": {
      device: "emulator",
      app: "android.release",
    },
  },
};
