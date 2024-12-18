export type TProducts = {
    _id: string,
    title: string,
    image: string,
    brand: string,
    brandImg: string,
    quantity: number,
    price: number,
    rating: number,
    desc: string,
    isDeleted: boolean,
    inStock: boolean
}

export type TAddCart = {
    _id: string;
    productId: string;
    title: string;
    image: string;
    brand: string;
    brandImg: string;
    quantity: number;
    price: number;
    rating: number;
    desc: string;
    isDeleted: boolean;
    orderCount: number;
    totalPrice: number;
    inStock: boolean;
    isPurchased: boolean
}