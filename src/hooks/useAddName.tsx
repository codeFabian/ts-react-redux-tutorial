import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { add_name } from '../modules/names';

export default function useAddName() {
    const dispatch = useDispatch();
    return useCallback(text => dispatch(add_name(text)), [dispatch])
}