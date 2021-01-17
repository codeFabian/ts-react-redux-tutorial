import React, { FormEvent, useState } from 'react';
import useAddName from "../hooks/useAddName";

const NameInsert = () => {
    const [name, setName] = useState('');
    const addName = useAddName()
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        addName(name)
    }
    return (
        <div>
            <input
                placeholder="할일을 입력하세요"
                name={name}
                onChange={onChange}
            />
        </div>
    );
};

export default NameInsert;