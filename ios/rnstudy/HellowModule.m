#import "HellowModule.h"

@implementation HellowModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getGreeting: (RCTResponseSenderBlock)callback)
{
    callback(@[@"Hi! I'm iOS"]);
}

@end
