import {EventEmitter} from "events";

type Cb0 = () => void;
type Cb1 = (result: any) => void;
type Cb2 = (err: null | Error, result: any) => void;
interface InitParams {
    host: string;
    port: string | number;
    scheme?: string;                // 默认 ws

    reconnect?: boolean;            // 默认true
    maxReconnectAttempts?: number;  // 默认10
    
    encode?: (reqId: number, route: string, msg: object) => any;
    decode?: (data: any) => object;
    encrypt?: boolean;

    handshakeCallback?: Cb1;

    user?: any;

}

declare class PomeloClient extends EventEmitter {
    init(params: InitParams, cb: Cb0): void;

    disconnect(force?: boolean): void;

    request(route: string, msg: any, cb: Cb1): void;
    
    notify(route: string, msg: any): void;
}

export = PomeloClient;
