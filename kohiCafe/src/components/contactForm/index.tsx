import { useState } from "react";
import "./styles.scss"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    console.log("Form submitted:", formData);
    // Validate form data
    const errors: any = {};
    if (!formData.firstname) {
      errors.firstname = "First name is required";
    }
    if (!formData.lastname) {
      errors.lastname = "Last name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    // Reset form after submission
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="contactFormContainer">
      <div className="contactFormHeading">
        <h2>Write us something you'd like us to know</h2>
        <hr />
      </div>
      <form className="contactForm" onSubmit={handleSubmit}>
        <div className="formGroup" style={{flex: "0 0 calc(50% - 10px)"}}>
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            value={formData.firstname}
            onChange={handleChange}
          />
          {formErrors.firstname && (
            <span className="error">{formErrors.firstname}</span>
          )}
        </div>
        <div className="formGroup" style={{flex: "0 0 calc(50% - 10px)"}}>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            value={formData.lastname}
            onChange={handleChange}
          />
          {formErrors.lastname && (
            <span className="error">{formErrors.lastname}</span>
          )}
        </div>
        <div className="formGroup" style={{flex: "0 0 100%"}}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        <div className="formGroup" style={{flex: "0 0 100%"}}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {formErrors.message && (
            <span className="error">{formErrors.message}</span>
          )}
        </div>
        <button type="submit" style={{flex: "0 0 100%"}}>Send</button>
      </form>
    </div>
  );
}
