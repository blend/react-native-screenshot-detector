declare module "react-native-screenshot-detector" {
    import { NativeEventEmitter } from 'react-native';

    export function subscribe(cb: Function): NativeEventEmitter;
    export function unsubscribe(eventEmitter: NativeEventEmitter): void;
}
