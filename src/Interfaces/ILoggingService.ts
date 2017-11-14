import {LogTypes} from "../Enum/LogTypes";

export interface ILoggingService {
    Log(type: LogTypes, log: string);
}