
# react-native-screenshot-detector

Note: this project is designed to work with the newer version of React Native library imports, i.e. React Native >= 0.40.0, and will only work on iOS as Android does not provide the underlying functionality needed to track screenshots.

## Getting started

React Native < 0.60.0

`$ npm install react-native-screenshot-detector`

`$ react-native link react-native-screenshot-detector`

React Native >= 0.60.0

`$ npm install react-native-screenshot-detector`

## Usage

Update the AppDelegate.m file to include the following:

# iOS
```objectivec
#import <RNScreenshotDetector/RNScreenshotDetector.h>

.........

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // ... setup code

  // Somewhere React Native will have placed something like
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL...]

  // Somewhere below this you can setup the screenshot detector to listen for events
  RNScreenshotDetector* screenshotDetector = [[RNScreenshotDetector alloc] init];
  [screenshotDetector setupAndListen:rootView.bridge];
}
```

# In JS
```javascript
import * as ScreenshotDetector from 'react-native-screenshot-detector';

// Subscribe callback to screenshots:
this.eventEmitter = ScreenshotDetector.subscribe(function() { ... });

// Unsubscribe later (a good place would be componentWillUnmount)
ScreenshotDetector.unsubscribe(this.eventEmitter);
```
  