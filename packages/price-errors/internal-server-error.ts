import { HttpStatusCodes } from "price-constants";
import { CustomError } from "./custom-error";

export class InternalSeverError extends CustomError {
	statusCode = HttpStatusCodes.STATUS500INTERNAL_SERVER_ERROR;

	constructor(public message: string) {
		super(message);

		Object.setPrototypeOf(this, InternalSeverError.prototype);
	}

	serializeErrors() {
		return [{ message: this.message }];
	}
}
