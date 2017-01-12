
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

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNScreenshotDetectorPackage;` to the imports at the top of the file
  - Add `new RNScreenshotDetectorPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-screenshot-detector'
  	project(':react-native-screenshot-detector').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-screenshot-detector/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-screenshot-detector')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNScreenshotDetector.sln` in `node_modules/react-native-screenshot-detector/windows/RNScreenshotDetector.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Cl.Json.RNScreenshotDetector;` to the usings at the top of the file
  - Add `new RNScreenshotDetectorPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNScreenshotDetector from 'react-native-screenshot-detector';

// TODO: What do with the module?
RNScreenshotDetector;
```
  