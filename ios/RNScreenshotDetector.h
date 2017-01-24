//
//  RNScreenshotDetector.h
//
//  Created by Graham Carling on 1/11/17.
//

#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>

@interface RNScreenshotDetector : RCTEventEmitter <RCTBridgeModule>

- (void)setupAndListen:(RCTBridge*)bridge;
- (void)screenshotDetected:(NSNotification*)notification;

@end
