using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Com.Reactlibrary.RNScreenshotDetector
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNScreenshotDetectorModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNScreenshotDetectorModule"/>.
        /// </summary>
        internal RNScreenshotDetectorModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNScreenshotDetector";
            }
        }
    }
}
