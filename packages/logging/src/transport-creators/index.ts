import DailyRotateFile, {
	DailyRotateFileTransportOptions,
} from "winston-daily-rotate-file";
import {
	Console,
	ConsoleTransportOptions,
} from "winston/lib/winston/transports";

export const createConsoleTransport = (options: ConsoleTransportOptions) => {
	return new Console(options);
};

export const createFileTransport = (
	options: DailyRotateFileTransportOptions
) => {
	return new DailyRotateFile(options);
};
