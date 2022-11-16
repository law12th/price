import { HttpStatusCodes } from "price-constants";
import { CustomError } from "./custom-error";

export class UnauthorizedError extends CustomError {
	statusCode = HttpStatusCodes.STATUS401UNAUTHORIZED;

	constructor(public message: string) {
		super(message);

		Object.setPrototypeOf(this, UnauthorizedError.prototype);
	}

	serializeErrors() {
		return [{ message: this.message }];
	}
}
