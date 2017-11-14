import {ILoggingService} from "../Interfaces/ILoggingService";
import {LogTypes} from "../Enum/LogTypes";

export class LoggingService implements  ILoggingService {
    constructor() {

    }

    Log(type: LogTypes, log: string) {
        switch (type) {
            case LogTypes.Error:
                console.log('ERROR: ' + log);
                break;
            case LogTypes.Debug:
                console.log('DEBUG: ' + log);
                break;
            case LogTypes.Info:
            default:
                console.log('INFO: ' + log);
        }
    }
}