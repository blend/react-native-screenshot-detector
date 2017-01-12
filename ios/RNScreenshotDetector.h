//
//  RNScreenshotDetector.h
//
//  Created by Graham Carling on 1/11/17.
//

#import "RCTEventEmitter.h"
#import "RCTBridgeModule.h"

@interface RNScreenshotDetector : RCTEventEmitter <RCTBridgeModule>

- (void)setupAndListen:(RCTBridge*)bridge;
- (void)screenshotDetected:(NSNotification*)notification;

@end
