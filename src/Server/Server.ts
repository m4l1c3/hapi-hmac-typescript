import * as Hapi from 'hapi';
import * as process from "process";
import {IController} from '../Interfaces/IController';
import {IServerManager} from "../Interfaces/IServerManager";
import {LoggingService} from "../Services/LoggingService";
import {ILoggingService} from "../Interfaces/ILoggingService";
import {LogTypes} from "../Enum/LogTypes";
import {IServerSettings} from "../Interfaces/ISeverSettings";
import {ServerSettings} from "../Classes/ServerSettings";
import {Server} from "hapi";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const NODE_ENV = (process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'development');

export class ServerManager implements IServerManager {
    settings: IServerSettings = new ServerSettings((NODE_ENV === 'development'), PORT, HOST, NODE_ENV);
    loggingService: ILoggingService;
    server: Hapi.Server;

    public Server(): Hapi.Server {
        return this.server;
    }

    constructor() {
        this.loggingService = new LoggingService();
        this.server = <Server>new Hapi.Server();
        this.server.connection({
            host: this.settings.host,
            port: this.settings.port,
        });
    }

    Log(logType: LogTypes, log: string): void {
        this.loggingService.Log(logType, log);
    }

    public async RegisterPlugin(pluginConfig: any): Promise<void> {
        await this.server.register(pluginConfig);
    }

    public RegisterController(controller: IController): void {
        controller.MapRoutes(this.server);
    }

    public StartServer(): void {
        this.server.start((error: Error) => {
            if (error) {
                throw error;
            }

            this.Log(LogTypes.Info, '\n\nServer running in ' + this.settings.environment +
                ' mode at: http://' + this.settings.host + ':' + this.settings.port + '\n');
        });
    }

}