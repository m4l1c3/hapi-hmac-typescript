export interface ILogger {
    Info(logInput: string);
    Debug(logInput: string);
    Error(logInput: string);
}