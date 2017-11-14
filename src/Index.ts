import {IServerManager} from "./Interfaces/IServerManager";
import {ServerManager} from "./Server/Server";
import {CommandController} from "./Server/Controllers/CommandController";
import {HmacValidation} from "./Plugins/HmacValidation";

class CommandApi {
    ServerManager: IServerManager;

    constructor() {
        this.ServerManager = new ServerManager();
    }
}

let api = new CommandApi();
api.ServerManager.RegisterPlugin(new HmacValidation());
api.ServerManager.RegisterController(new CommandController());
api.ServerManager.StartServer();