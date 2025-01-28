interface UserInterface {
	id: number;
	firstnames: string;
	lastnames: string;
	email: string;
	birthdate: Date;
}

class User implements UserInterface {
	id: number;
	firstnames: string;
	lastnames: string;
	email: string;
	birthdate: Date;

	constructor(
		id: number,
		firstnames: string,
		lastnames: string,
		email: string,
		birthdate: Date
	) {
		this.id = id;
		this.firstnames = firstnames;
		this.lastnames = lastnames;
		this.email = email;
		this.birthdate = birthdate;
		return this;
	}
}

export default User;
