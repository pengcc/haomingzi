import React from 'react';
import {Checkbox, Button} from 'antd';
import allActions from 'Store/actions';
import {useStateValue} from 'Store/stateHelper';
import styles from './CheckboxList.module.scss';

const CheckboxGroup = Checkbox.Group;
const {
	typeListActions: {updateOptions},
} = allActions;
const CheckboxList = (props) => {
	const {plainOptions} = props;
	const [, dispatch] = useStateValue();
	const defaultCheckedList = [];
	const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
	const [indeterminate, setIndeterminate] = React.useState(true);
	const [checkAll, setCheckAll] = React.useState(false);

	const onChange = (list) => {
		setCheckedList(list);
		setIndeterminate(!!list.length && list.length < plainOptions.length);
		setCheckAll(list.length === plainOptions.length);
		dispatch(updateOptions(list));
	};

	const onCheckAllChange = (e) => {
		setCheckedList(e.target.checked ? plainOptions : []);
		setIndeterminate(false);
		setCheckAll(e.target.checked);
		dispatch(updateOptions(plainOptions));
	};

	function onHandleReset() {
		setCheckedList(defaultCheckedList);
		setCheckAll(false);
		dispatch(updateOptions([]));
	}

	return (
		<>
			<h3>选择搭配字</h3>
			<CheckboxGroup
				options={plainOptions}
				value={checkedList}
				onChange={onChange}
			/>
			<Checkbox
				indeterminate={indeterminate}
				onChange={onCheckAllChange}
				checked={checkAll}>
				Check all
			</Checkbox>
			<Button type="primary" onClick={onHandleReset}>
				Reset
			</Button>
		</>
	);
};

export default CheckboxList;
