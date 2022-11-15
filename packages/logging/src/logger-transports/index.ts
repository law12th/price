import {
	createConsoleTransport,
	createFileTransport,
} from "../transport-creators";
import { TransportTypes } from "../transport-types";
import { Transport } from "../transports";

const getLoggerTransports = (transportsConfig: Transport[]) => {
	return transportsConfig.map(({ type, options }) => {
		switch (type) {
			case TransportTypes.CONSOLE:
				return createConsoleTransport(options);
			case TransportTypes.FILE:
				return createFileTransport(options);
		}
	});
};

export default getLoggerTransports;
