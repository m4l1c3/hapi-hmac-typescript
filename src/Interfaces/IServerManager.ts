import * as Hapi from 'hapi';
import {ILoggingService} from "./ILoggingService";
import {IController} from "./IController";
import {LogTypes} from "../Enum/LogTypes";
import {IServerSettings} from "./ISeverSettings";

export interface IServerManager {
    settings: IServerSettings;
    server: Hapi.Server;
    loggingService: ILoggingService;

    Server(): Hapi.Server;
    RegisterPlugin(pluginConf: any): Promise<void>;
    RegisterController(controller: IController): void;
    StartServer(): void;
    Log(logType: LogTypes, logInput: string): void;
}