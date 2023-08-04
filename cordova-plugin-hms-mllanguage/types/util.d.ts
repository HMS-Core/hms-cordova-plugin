export declare function asyncExec(clazz: string, func: string, args?: any[]): Promise<any>;
declare global {
    interface Window {
        hmsEvents: {
            [key: string]: (data: any) => void;
        };
        runHMSEvent: (eventName: string, data: any) => void;
        subscribeHMSEvent: (eventName: string, callback: (data: any) => void) => void;
        [key: string]: any;
    }
}
