export const ADD_PRODUCT = 'ADD_PRODUCT';
export const addProduct = (product) => ({
	type: ADD_PRODUCT,
	product
});

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const removeProduct = (productId) => ({
	type: REMOVE_PRODUCT,
	productId
});