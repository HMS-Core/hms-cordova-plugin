import * as HmsPushOriginal from './HmsPush';
import * as HmsLocalNotificationOriginal from './HmsLocalNotification';
import * as HmsPushEventOriginal from './HmsPushEvent';
import * as HmsPushProfileOriginal from './HmsPushProfile';

declare global {
    const HmsPush: typeof HmsPushOriginal;
    const HmsLocalNotification: typeof HmsLocalNotificationOriginal;
    const HmsPushEvent: typeof HmsPushEventOriginal;
    const HmsPushProfile: typeof HmsPushProfileOriginal;
}
