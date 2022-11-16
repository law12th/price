import { HttpStatusCodes } from "price-constants";
import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
	statusCode = HttpStatusCodes.STATUS404NOT_FOUND;

	constructor(public message: string) {
		super(message);

		Object.setPrototypeOf(this, NotFoundError.prototype);
	}

	serializeErrors() {
		return [{ message: this.message }];
	}
}
