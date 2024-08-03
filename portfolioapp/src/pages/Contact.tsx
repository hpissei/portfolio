// src/pages/Contact.js
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="container">
            <div className="row">
                <div className=" ">
                    <h2 className="offset-md-3 mb-3">Contact Me</h2>
                    <form className="" onSubmit={handleSubmit}>
                        <div className="offset-md-3  col-md-6 mb-3">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input type="text" name="inputName" className="form-control " id="inputName" value={formData.name} onChange={handleChange} placeholder="Name" required />
                        </div>
                        <div className="offset-md-3  col-md-6 mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="Email" required />
                        </div>
                        <div className="offset-md-3  col-md-6 mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <textarea name="message" className="form-control" value={formData.message} onChange={handleChange} placeholder="Message" required />
                        </div>
                        <div className="offset-md-3 mb-3">
                            <button type="submit" className="btn btn-sm btn-success">Send</button> <br /><br />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;