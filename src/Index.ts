import {IServerManager} from "./Interfaces/IServerManager";
import {ServerManager} from "./Server/Server";

class CommandApi {
    ServerManager: IServerManager;

    constructor() {
        this.ServerManager = new ServerManager();
        this.ServerManager.StartServer();
    }
}

let api = new CommandApi();