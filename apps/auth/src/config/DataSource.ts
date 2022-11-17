import { DataSource } from "typeorm";
import { Customer } from "../entities/customer.entity";
import { LoggerFactory } from "logging";

const logger = LoggerFactory.getLogger();

const dataSource = new DataSource({
	type: "postgres",
	host: "",
	port: 5432,
	username: "",
	password: "",
	database: "",
	entities: [Customer],
});

dataSource
	.initialize()
	.then(() => {
		logger.info("database connection successfully established");
	})
	.catch((err) => {
		logger.error(`database connection failed: ${err}`);
	});

export default dataSource;
