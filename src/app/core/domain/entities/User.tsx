interface UserInterface {
	id: number;
	firstnames: String;
	lastnames: String;
	email: String;
	birthdate: Date;
}

class User implements UserInterface {
	id: number;
	firstnames: String;
	lastnames: String;
	email: String;
	birthdate: Date;

	constructor(
		id: number,
		firstnames: String,
		lastnames: String,
		email: String,
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
