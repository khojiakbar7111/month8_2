import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

export default function Navabar() {
	const { sign, setSign, user } = useGlobalContext();
	return (
		<div className="navbar">
			<div className="nav_box">
				<Link to="/">
					<img
						className="nav_img"
						src="https://static.cambly.com/_next/static/media/secondary_light.9d2bb836.svg"
						alt=""
					/>{' '}
				</Link>
			</div>
			<ul className="nav-ul">
				<li>
					<Link to="/tutors" style={{ color: '#fff', textDecoration: 'none' }}>
						Tutors
					</Link>
				</li>
				<li>
					{' '}
					<Link to="/cources" style={{ color: '#fff', textDecoration: 'none' }}>
						Coruces
					</Link>
				</li>
				<li>
					{' '}
					<Link to="/group" style={{ color: '#fff', textDecoration: 'none' }}>
						Group Lessons
					</Link>
				</li>
				<li>
					<Link to="/kids" style={{ color: '#fff', textDecoration: 'none' }}>
						Kids
					</Link>
				</li>
				<li>
					{' '}
					<Link to="/resurse" style={{ color: '#fff', textDecoration: 'none' }}>
						Recources
					</Link>
				</li>
				<li>
					<Link to="/busnise" style={{ color: '#fff', textDecoration: 'none' }}>
						Business
					</Link>
				</li>
			</ul>
			<div className="nav_btn">
				<select className="types-selected" id="asdaf">
					<option value="1">English</option>
					<option value="2">اللغة العربية</option>
					<option value="3">Azərbaycan</option>
					<option value="4">Deutch</option>
					<option value="5">Italiano</option>
					<option value="6">русский язык</option>
					<option value="7">日本語</option>
				</select>
				<Link to="/login">
					<button onClick={() => setSign(!sign)} className="login-btn">
						{user ? user.name : ' Login'}
					</button>
				</Link>
				<button className="sign-btn">Sign up</button>
			</div>
		</div>
	);
}
