import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesAction} from "../redux/actions/CategoryAction";
import {clearErrors, clearSuccessNotification, createUserEvent} from "../redux/actions/EventAction";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function CreateEventScreen() {

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");
	const [isVirtual, setVirtual] = useState("");
	const [category, setCategory] = useState("");
	const [address, setAddress] = useState("");

	const dispatch = useDispatch();
	const categories  = useSelector((state) => state.categoryList);
	const {loading,event,error}  = useSelector((state) => state.eventCreate);

	useEffect(() => {
		dispatch(getCategoriesAction())

		if(error){
			toast.error(error);
		}
		if(event){
			toast.success(event.message);
		}
		dispatch(clearErrors());
		dispatch(clearSuccessNotification());
		setTitle("");
		setDate("");
		setDescription("");
		setAddress("");
		setCategory("");
		setVirtual("");
	},[dispatch,error]);

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(isVirtual);
		dispatch(createUserEvent(title,description,date,isVirtual,category,address));
	};
	return (
		<div className="container">
			<ToastContainer />
			<div className="row mt-5 d-flex justify-content-center">
				<div className="col-md-8">
					<form onSubmit={submitHandler}>
						<div className="mb-3">
							<label htmlFor="title" className="form-label">Title</label>
							<input type="text" className="form-control" id="title"
										 value={title}
										 onChange={(e) => setTitle(e.target.value)}
										 aria-describedby="title" required/>
						</div>
						<div className="mb-3">
							<label htmlFor="address" className="form-label">Address</label>
							<input type="text" className="form-control" id="address"
										 value={address}
										 onChange={(e) => setAddress(e.target.value)}
										 aria-describedby="address" required/>
						</div>

						<div className="mb-3">
							<label htmlFor="category" className="form-label">Category</label>
							<select className="form-control" id="category" value={category}
											onChange={(e) => setCategory(e.target.value)} required>
								<option>Select category</option>
								{categories.categories && categories.categories.map((category) => (
									<option key={category._id} value={category._id}>{category.name}</option>
								))}
							</select>
						</div>

						<div className="mb-3">
							<label htmlFor="date" className="form-label">Date</label>
							<input type="date" className="form-control" id="date" value={date}
										 onChange={(e) => setDate(e.target.value)} required/>
						</div>

						<div className="mb-3">
							<label htmlFor="isVirtual" className="form-label">Virtual Event</label>
							<select className="form-control" id="isVirtual" value={isVirtual}
											onChange={(e) => setVirtual(e.target.value)} required>
								<option>Select event type</option>
								<option value="True">True</option>
								<option value="False">False</option>
							</select>
						</div>

						<div className="mb-3">
							<label htmlFor="description" className="form-label">Description</label>
							<textarea className="form-control" cols="8" value={description}
												onChange={(e) => setDescription(e.target.value)} required></textarea>
						</div>

						{loading ? (
							<div className="spinner-border text-primary" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						) : (
							<button type="submit" className="btn btn-primary">Submit</button>
						)}
					</form>
				</div>
			</div>
		</div>
	)
}

export default CreateEventScreen;
