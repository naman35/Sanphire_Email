import "./App.css";
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function App() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('Sanphire', 'template_0v9a6mm', form.current, 'QW6DsNWg7BGIWgdjO')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};

	return (<div className="App">
		<div className="container">
			<div className="row">
				<div className="col align-self-center">
					<h1 className="text-center"><b>SANPHIRE-EMAIL</b></h1>
					{/* <!-- contact form --> */}
					<form ref={form} onSubmit={sendEmail}>
						{/* <!-- name --> */}
						<div className="form-group">
							<label for="name">Name</label>
							<input
								type="name"
								name="name"
								className="form-control"
								id="name"
								placeholder="enter your name"
							/>
						</div>

						{/* <!-- email --> */}
						<div className="form-group">
							<label for="email">Email address</label>
							<input
								type="email"
								name="email"
								className="form-control"
								id="email"
								placeholder="enter your email"
							/>
						</div>

						{/* <!-- subject --> */}
						<div className="form-group">
							<label for="subject">Subject</label>
							<input
								type="text"
								name="subject"
								className="form-control"
								id="subject"
								placeholder="enter email subject"
							/>
						</div>

						<div className="form-group">
							<label for="email_body">Message</label>
							<textarea
								className="form-control"
								id="email_body"
								rows="5"
							></textarea>
						</div>

						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	);
}

export default App;