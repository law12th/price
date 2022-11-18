import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./base.entity";

@Entity({ schema: "action", name: "customer" })
export class Customer extends Base {
	@PrimaryGeneratedColumn({ name: "id" })
	id: number = 0;

	@Column({ name: "given_name", type: "text" })
	givenName: string = "";

	@Column({ name: "family_name", type: "text" })
	familyName: string = "";

	@Column({ name: "username", type: "varchar" })
	username: string = "";

	@Column({ name: "email", type: "text" })
	email!: string;

	@Column({ name: "phone", type: "varchar" })
	phone!: string;

	@Column({ name: "date_of_birth", type: "date" })
	dateOfBirth!: Date;

	@Column({ name: "password", type: "text" })
	password: string = "";
}
