import {useState} from 'react';

const useForm = (initialState = {}) => {
	const [formValues, setFormValues] = useState(initialState);

	const handleInputChange = ({target}) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	const resetForm = () => {
		setFormValues(initialState);
	};

	return [formValues, setFormValues, handleInputChange, resetForm];
};

export default useForm;
