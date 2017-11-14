import * as Hapi from 'hapi';
import {IController} from '../../Interfaces/IController';

export class CommandController implements IController {
    public MapRoutes(server: Hapi.Server) {
        server.route({
            method: 'GET',
            path: '/',
            handler: (request: Hapi.Request, reply: Hapi.ReplyNoContinue): void => {
                reply({test: 'value'});
            }
        });
    }
}