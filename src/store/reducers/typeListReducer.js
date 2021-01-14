export default (state, action) => {
	switch (action.type) {
		case 'UPDATE_OPTIONS':
			return {
				...state,
				options: action.payload,
			};
		default:
			return state;
	}
};
