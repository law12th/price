import { TransportTypes } from "../transport-types";
import { Transport } from "../transports";

export const transportsConfig: Transport[] = [
	{
		type: TransportTypes.CONSOLE,
		options: {},
	},
	{
		type: TransportTypes.FILE,
		options: {
			filename: "all-%DATE%.log",
			dirname: "./.logs",
			level: "all",
			datePattern: "YYYY-MM-DD",
		},
	},
	{
		type: TransportTypes.FILE,
		options: {
			filename: "error-%DATE%.log",
			dirname: "./.logs",
			level: "error",
			datePattern: "YYYY-MM-DD",
		},
	},
];
