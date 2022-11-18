import { DataSource } from "typeorm";
import { SeedService } from "price-seeding";
import path from "path";

export class TableSeedService extends SeedService {
	runPatches(connection: DataSource): void {
		if (
			!this.runPatch(
				connection,
				1,
				path.dirname(
					"/apps/auth/src/assets/sql/tables/action/customer.1.sql"
				),
				true
			)
		)
			return;
		if (
			!this.runPatch(
				connection,
				2,
				path.dirname(
					"/apps/auth/src/assets/sql/tables/action/vendor.1.sql"
				),
				true
			)
		)
			return;

		if (
			!this.runPatch(
				connection,
				3,
				path.dirname(
					"/apps/auth/src/assets/sql/tables/sys/setting.1.sql"
				),
				true
			)
		)
			return;
	}

	getPatchLevel(): number {
		throw new Error("Method not implemented.");
	}
	setPatchLevel(value: number): void {
		throw new Error("Method not implemented.");
	}
}
