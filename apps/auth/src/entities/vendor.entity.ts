import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./base.entity";

@Entity({ schema: "action", name: "vendor" })
export class Vendor extends Base {
	@PrimaryGeneratedColumn({ name: "id" })
	id: number = 0;

	@Column({ name: "vendor_name", type: "text" })
	vendorName: string = "";

	@Column({ name: "email", type: "text" })
	email!: string;

	@Column({ name: "phone", type: "varchar" })
	phone!: string;

	@Column({ name: "password", type: "text" })
	password: string = "";
}
