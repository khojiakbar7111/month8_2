import { useGlobalContext } from '../context';

export default function Login() {
	const { name, setName, psw, setPsw, login } = useGlobalContext();
	return (
		<div>
			<form className="login-box" onSubmit={login}>
				<div className='logo-box-first'>
					<img
						className="log-img-one"
						src="https://static.cambly.com/_next/static/media/primary.650b62ae.svg"
						alt=""
					/>

					<h2 className="log-h2">Welcome back!</h2>
					<div>
						<img
							className="log-logo"
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAqFBMVEVHcEz7+/v+/v709PX////7+/v09fX4+Pj////8/Pz7+/v////z+PP29vf09PX////+/v7///////////83qlfrQzPsTkFHiPUlpkszf/RAhfX6uwD8wBLW4vyQs/j96N3/+vPh8eR8wJiHrfjylpBhuXftX0rR6Nb608j0qKNwofBKsGWzy/rzn5n0o57uc2/94J78zFb3u7es1rC6z/rHuTCVsC08ooagt3gtAAAAE3RSTlMA08Eb4kVwOqb5kV7jkn8NfnFw9v5R3wAAAVtJREFUOI2dU9lywjAMTIAchgmljU3sJBRycRZoocf//1ltyZ4cpi/dl0jeHWllxY7TxVPgecGT8weCkMQAEgaP6EncwcSShPEAYZ+fDHlZ5BG/P9T1YW8rRnhyYRoXzEeGn0G6XrKlBmNrOJppAVZnmpNftt1gDeSfVbhhwNa3W83Y1hh9aR1eFX/G43N/kjEYyCR/sGcdG4vvWb692jzYnKrgI88znL96RVQrlU3NJWdSgM5FihBv5sKHggSR9gW5FKx1BSGUSHwawQI8ZHl2B8FK4ZgmAjwspMDDKb4obc2nsgIEnrnpzTeltDF8lSbpsb1r2OWdS8Vpp8KiVAWgA+4TesSNFFBOm+bE+U8iqraD47gqJidVQ4NjA1eve4ydS6PgvGw3AfAxL0oOKAvM/fafi4z/YrcrTBx1/9q5vcj54N2QPk3sx+V3JMS3aKgSuUTCjR49zf/jF+G2OgtU1MugAAAAAElFTkSuQmCC"
							alt=""
						/>
      <img className='apple-logo' src="https://img.icons8.com/?size=60&id=95294&format=png" alt="" />
						<img className='face-logo'
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEUAAAAQcP8IZf8IZ/8JZv8HZf8IZv8IZv8IaP8JZ/8HZv8IZv8FZf8YcP9FjP+TvP/g7P/////R4/9Vlf8QYP+Es/9kn/8IZv8nef8JZf8AYP/v9f/Q4v/B2P9GjP8HZv+yz//Q4/83g/8HZv/g6/+Dsv8HZf/n7//////////e6//ZLyHjAAAAK3RSTlMAEGCfz+//XyCQj98w/////////xD//6D/kBD/////7////8///5Cgz+/vONkvXQAAAPJJREFUeAF9kkUCwzAMBGVSGMrM3P//rxBaB+e6s0YREFJpw2y0cgS1cT3DQLmNWPjcwK/XA24RWIuEdg4j7OtHUX0NYedxko5+jCeZMc0En8FsVDDHSd1WDoFdIlogX46awopozWA+ythsd7s9ZxymJBkcs3wcMZC0YHDKhDNbKLowuGYC21zINIWUbQ7EwwJT7YogqgTTKaTY4tIp7HDIRadwwzVlKVyv11HG9cekFBxam8FbTInuQ4LCd3cL2Uzd+4UV/VkHfUIgMLRdQuBi7JsCxh5rQEAfrO9NYSWojruwBOOhDoR8PF+j0fuipNX+AmbCIviMIiwCAAAAAElFTkSuQmCC"
							alt=""
						/>
						<img className='sms-logo' src="https://img.icons8.com/?size=80&id=37992&format=png" alt="" />
					</div>
				</div>
				<p className="log-p1">Full name</p>
				<input
					className="log-name"
					type="text"
					placeholder="Enter your a name"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<br />
				<p className="log-p">password</p>
				<input
					className="log-psw"
					type="text"
					placeholder="Enter a password"
					required
					value={psw}
					onChange={(e) => setPsw(e.target.value)}
				/>
				<br />
				<button className="login-btn1">Log in</button>
			</form>
		</div>
	);
}
