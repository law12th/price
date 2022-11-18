import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ schema: "sys", name: "setting" })
export class Setting {
	@PrimaryColumn({ name: "key" })
	key: string = "";

	@Column({ name: "value" })
	value: string = "";
}
