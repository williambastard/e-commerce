interface Order {
	id: number;
	date: Date;
	status: string;
	items: OrderItem[];
	total: number;
}
