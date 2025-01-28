interface Order {
	id: number;
	date: Date;
	status: String;
	items: OrderItem[];
	total: number;
}
