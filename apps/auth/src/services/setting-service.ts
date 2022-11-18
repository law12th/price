import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Setting } from "../entities";

@Injectable()
export class SettingService {
	constructor(
		@InjectRepository(Setting)
		private settingRepository: Repository<Setting>
	) {}

	getValue(key: string): string {
		const result = this.settingRepository.findOneBy({ key });

		let value = "";

		result
			.then((setting) => {
				if (setting) {
					value = setting.value;
				}
			})
			.catch((err) => {
				throw err;
			});

		return value;
	}
}
