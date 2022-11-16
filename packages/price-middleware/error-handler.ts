import { NextFunction, Request, Response } from "express";
import { HttpStatusCodes } from "price-constants";
import { CustomError } from "price-errors/build/custom-error";

export const errorHandler = (
	err: Error,
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
	if (err instanceof CustomError) {
		return res
			.status(err.statusCode)
			.send({ errors: err.serializeErrors() });
	}

	res.status(HttpStatusCodes.STATUS400BAD_REQUEST).send({
		errors: [{ message: "something went wrong" }],
	});
};
