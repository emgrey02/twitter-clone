import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function CreateTweet() {
	const [form, setForm] = useState({
		username: '',
		content: '',
		timeStamp: '',
	});
	const navigate = useNavigate();

	// These methods will update the state properties.
	function updateForm(value) {
		return setForm((prev) => {
			return { ...prev, ...value };
		});
	}

	// This function will handle the submission.
	async function onSubmit(e) {
		e.preventDefault();

		// When a post request is sent to the create url, we'll add a new tweet to the database.
		const newTweet = { ...form };

		await fetch('http://localhost:5000/tweets/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newTweet),
		}).catch((error) => {
			window.alert(error);
			return;
		});

		setForm({ username: '', content: '', timeStamp: '' });
		navigate('/');
	}

	// This following section will display the form that takes the input from the user.
	return (
		<div>
			<h3>Create New Tweet</h3>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="content">Tweet</label>
					<input
						type="text"
						className="form-control"
						id="content"
						value={form.content}
						onChange={(e) => updateForm({ content: e.target.value })}
					/>
				</div>
				<div className="form-group">
					<input
						type="submit"
						value="Create Tweet"
						className="btn btn-primary"
					/>
				</div>
			</form>
		</div>
	);
}
