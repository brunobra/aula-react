import {combineReducers} from 'redux';

import {
	ADD_PRODUCT,
	REMOVE_PRODUCT
} from './actions';

const initialState = {
	products: [
		{
			id: 1,
			name: 'Produto 1',
			price: 10
		},
		{
			id: 2,
			name: 'Produto 2',
			price: 20
		},
		{
			id: 3,
			name: 'Produto 3',
			price: 30
		}
	]
};

const product = (state = initialState, action) => {
	switch (action.type) {
	case ADD_PRODUCT:
		return {
			products: [...state.products, action.product]
		};

	case REMOVE_PRODUCT:
		return {
			products: state.products.filter((product) => product.id !== action.productId)
		};

	default:
		return state;
	}
}


export default combineReducers({
	product
});
