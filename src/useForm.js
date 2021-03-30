import { useState, useEffect } from 'react';

const useForm = () => {
    const [values, setValues] = useSate({
        username: '',
        email: '', 
        password: '',
        password2: ''
    });
    const [errors, setErrors] = usestate({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values, 
            [name]: value
        }); 
    };

    return { handleChange };
};

export default useForm;