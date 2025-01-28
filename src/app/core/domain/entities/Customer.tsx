interface Customer extends User {
	phone: String;
	address: String;
	city: String;
	postalCode: String;
	country: String;
	newsletter: Boolean;
	loyaltyPoints: number;
	orders: Order[];
}
