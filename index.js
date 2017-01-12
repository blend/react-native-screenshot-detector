
import { NativeEventEmitter, NativeModules } from 'react-native';
const { RNScreenshotDetector } = NativeModules;

export const SCREENSHOT_EVENT = 'ScreenshotTaken';

export function subscribe(cb) {
  const eventEmitter = new NativeEventEmitter(RNScreenshotDetector);
  eventEmitter.addListener(SCREENSHOT_EVENT, cb, {});
  return eventEmitter;
}

export function unsubscribe(eventEmitter) {
  eventEmitter.removeAllListeners(SCREENSHOT_EVENT);
}
