import typeListReducer from './typeListReducer';

export default ({typeList}, action) => ({
	typeList: typeListReducer(typeList, action),
});
