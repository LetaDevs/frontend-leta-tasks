import React from 'react';
import ContentHeader from './ContentHeader';
import ListaTareas from './ListaTareas';

const Content = () => {
	return (
		<div className='content'>
			<ContentHeader />
			<div>
				<ListaTareas />
			</div>
		</div>
	);
};

export default Content;
