import { Pool } from "pg";
import { DataSource } from "typeorm";
import { LoggerFactory } from "logging";
import fs from "fs";

const logger = LoggerFactory.getLogger();

export abstract class SeedService {
	abstract getPatchLevel(): number;
	abstract setPatchLevel(value: number): void;
	abstract runPatches(connection: DataSource): void;

	protected runPatch(
		connection: DataSource,
		patchLevel: number,
		sqlSource: string,
		isFile: boolean
	): boolean {
		if (this.getPatchLevel() < patchLevel) {
			try {
				const sql = isFile ? this.fromFile(sqlSource) : sqlSource;

				this.executeSqlStatement(connection, sql);
				this.setPatchLevel(patchLevel);
			} catch (err) {
				logger.error(err);
			}
		}
		return true;
	}

	private fromFile(file: string) {
		const query = fs.readFileSync(file, { encoding: "utf-8" });

		return query.toString();
	}

	private executeSqlStatement(connection: DataSource, sql: string) {
		connection.query(sql);
	}
}
