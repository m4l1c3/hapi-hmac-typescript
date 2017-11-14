import * as Hapi from 'hapi';

export interface IController {
    MapRoutes(server: Hapi.Server);
}