import {IServerSettings} from "../Interfaces/ISeverSettings";

export class ServerSettings implements IServerSettings {
    isDevelopment: boolean;
    port: any;
    host: string;
    environment: string;

    constructor(isDevelopment: boolean, port: any, host: string, environment: string) {
        this.isDevelopment = isDevelopment;
        this.port = port;
        this.host = host;
        this.environment = environment;
    }
}