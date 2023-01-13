import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useLastPath = (path : string) => {
    let empty = []
    for (let i = path.length - 1 ; i > 0; i--) {
        if (path[i] === "/") break
        empty.unshift(path[i])
    }

    return empty.join('')
}
