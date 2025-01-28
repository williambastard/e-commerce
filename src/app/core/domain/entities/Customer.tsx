import User from "./User";

interface Customer extends User {
	phone: string;
	address: string;
	city: string;
	postalCode: string;
	country: string;
	newsletter: Boolean;
	loyaltyPoints: number;
	orders: Order[];
}
