
# react-native-screenshot-detector

## Getting started

`$ npm install react-native-screenshot-detector --save`

### Mostly automatic installation

`$ react-native link react-native-screenshot-detector`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-screenshot-detector` and add `RNScreenshotDetector.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNScreenshotDetector.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

## Usage
```javascript
import * as ScreenshotDetector from 'react-native-screenshot-detector';

// Subscribe callback to screenshots:
this.eventEmitter = ScreenshotDetector.subscribe(function() { ... });

// Unsubscribe later (a good place would be componentWillUnmount)
ScreenshotDetector.unsubscribe(this.eventEmitter);
```
  