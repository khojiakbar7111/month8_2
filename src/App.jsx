/* eslint-disable no-mixed-spaces-and-tabs */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navabar from './components/Navabar';
import Tutors from './Pages/Tutors';
import Cources from './Pages/Cources';
import Group from './Pages/Group';
import Kids from './Pages/Kids';
import Resurse from './Pages/Resurse';
import Busnise from './Pages/Busnise';
import Home from './Pages/Home';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRouter';
import Header from './components/Header';

function App() {
	return (
		<>
			<Navabar />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/tutors"
					element={
						<ProtectedRoute>
							<Tutors />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/cources"
					element={
						<ProtectedRoute>
							<Cources />{' '}
						</ProtectedRoute>
					}
				/>
				<Route
					path="/group"
					element={
						<ProtectedRoute>
							<Group />{' '}
						</ProtectedRoute>
					}
				/>
				<Route
					path="/kids"
					element={
						<ProtectedRoute>
							<Kids />{' '}
						</ProtectedRoute>
					}
				/>
				<Route
					path="/resurse"
					element={
						<ProtectedRoute>
							{' '}
							<Resurse />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/busnise"
					element={
						<ProtectedRoute>
							<Busnise />
						</ProtectedRoute>
					}
				/>
			</Routes>
			<Header />
		</>
	);
}

export default App;
