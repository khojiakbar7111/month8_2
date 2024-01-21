/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState,useContext } from 'react';
import { getUser } from './utilis';
import { uid } from 'uid';

const AppContext = createContext();
const AppProvider = ({ children }) => {
	const id = uid();
	const [name, setName] = useState('');
	const [psw, setPsw] = useState('');
	const [sign, setSign] = useState(false);
	const [user, setUser] = useState(getUser('user'));

	const login = () => {
		const newUser = { id: id, name: name, psw: psw };
		setUser(newUser);
	};
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);
	return (
		<AppContext.Provider
			value={{ name, setName, psw, setPsw, sign, setSign, user, setUser, id, login }}
		>
			{children}
		</AppContext.Provider>
	);
};
export const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider };
