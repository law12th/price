import { DataSource } from "typeorm";
import { SeedService } from "./seed-service";

export class TableSeedService extends SeedService {
	runPatches(connection: DataSource): void {
		if (!this.runPatch(connection, 1, "", true)) return;
	}

	getPatchLevel(): number {
		throw new Error("Method not implemented.");
	}
	setPatchLevel(value: number): void {
		throw new Error("Method not implemented.");
	}
}
