import React, {useEffect, useState} from 'react';
import CheckboxList from '../Elements/CheckboxList';
import {dataArrMu} from 'Data/data-mu';
import {dataArrBaogai} from 'Data/data-baogai';
import {dataArrCao} from 'Data/data-cao';
import {dataArrRen} from 'Data/data-ren';
import {dataArrShui} from 'Data/data-shui';
import {dataArrTu} from 'Data/data-tu';
import {dataArrZou} from 'Data/data-zou';
import {useStateValue} from 'Store/stateHelper';
import {useFormInput} from 'Utils/commonHooks';
import styles from './Home.module.scss';

const Home = () => {
	const nameChinese = useFormInput('张三');
	const namePinyin = useFormInput('Zhangsan');
	const [
		{
			typeList: {options},
		},
	] = useStateValue();
	const dataList = [
		{type: '木字旁', data: dataArrMu},
		{type: '宝盖', data: dataArrBaogai},
		{type: '草字头', data: dataArrCao},
		{type: '单人旁', data: dataArrRen},
		{type: '三点水', data: dataArrShui},
		{type: '土字旁', data: dataArrTu},
		{type: '走之旁', data: dataArrZou},
	];

	const typeOptions = dataList.map((item) => item.type);
	const [dataRenderList, setDataRenderList] = useState([]);

	useEffect(() => {
		setDataRenderList(dataList.filter(({type}) => options.includes(type)));
	}, [options]);

	return (
		<div className={styles.pageHome}>
			<div className={styles.content}>
				<div className={styles.optionBlock}>
					<div className={styles.chosenName}>
						<div className={styles.chineseNameField}>
							<label>中文:</label>
							<input {...nameChinese} />
						</div>
						<div className={styles.pinyinField}>
							<label>拼音:</label>
							<input {...namePinyin} />
						</div>
					</div>
					<div className={styles.matches}>
						<CheckboxList plainOptions={typeOptions} />
					</div>
				</div>
				<div className={styles.nameList}>
					{dataRenderList.map(({type, data}) => {
						return (
							<div className={styles.nameListBlock} key={type}>
								<h2>{type}</h2>
								<div className={styles.list}>
									{data.map((item) => (
										<span className={styles.nameBlock}>
											{nameChinese.value}
											{item['汉字']} {namePinyin.value}
											{item['拼音']}
										</span>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
