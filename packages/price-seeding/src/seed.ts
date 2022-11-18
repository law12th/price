import fs from "fs";
import { DataSource } from "typeorm";

export abstract class SeedService {
	abstract getPatchLevel(): number;
	abstract setPatchLevel(value: number): void;
	abstract runPatches(dataSource: DataSource): void;

	protected runPatch(
		dataSource: DataSource,
		patchLevel: number,
		sqlSource: string,
		isFile: boolean
	): boolean {
		if (this.getPatchLevel() < patchLevel) {
			const sqlText = isFile ? this.getSqlText(sqlSource) : sqlSource;

			this.executeSqlText(dataSource, sqlText);
			this.setPatchLevel(patchLevel);
		}

		return true;
	}

	private getSqlText(file: string) {
		const sqlText = fs.readFileSync(file, { encoding: "utf-8" });

		return sqlText;
	}

	private async executeSqlText(dataSource: DataSource, sqlText: string) {
		try {
			await dataSource.query(sqlText);
		} catch (err) {
			throw err;
		}
	}
}
