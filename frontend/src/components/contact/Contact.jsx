import React, { useState } from "react";
import { FaRegAddressBook, FaRegEnvelope, FaRegMap, FaRegUser } from "react-icons/fa";
import shapeOne from "../../assets/shape-1.png";
import "./contact.css";
import axiosInstance from "../../api/axiosInstance";
import Swal from 'sweetalert2'

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", });
  const [message, setMessage] = React.useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    setMessage(true)
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/post/contact', form);
      const { success, message, data } = response.data;

      console.log('Success:', success);
      console.log('Message:', message);

      setMessage(false)
      setForm({ name: "", email: "", subject: "", message: "" });
      if (success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.message || "Something went wrong!",
      });
      setMessage(false)
    }
  };


  return (
    <section className="contact section" id="contact">
      <h2 className="section__title text-cs">Contact Me </h2>
      <p className="section__subtitle">
        Lets <span>Talk About Ideas</span>
      </p>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegMap />
            </span>

            <h3 className="contact__card-title">Address</h3>
            <p className="contact__card-data">Kadawatha, Colombo</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegUser />
            </span>

            <h3 className="contact__card-title">Freelance / Hire me</h3>
            <p className="contact__card-data">Available Right Now</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegEnvelope />
            </span>

            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-data"> <a href="mailto:thusharathilan123@gmail.com" rel="noopener noreferrer" target="_blank">thusharathilan123@gmail.com</a></p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegAddressBook />
            </span>

            <h3 className="contact__card-title">Phone</h3>
            <p className="contact__card-data"> <a href="https://wa.me/94717109098?text=Hey%20Thushara%20%0AContact%20me" rel="noopener noreferrer">+94 71 - 710 - 9098</a></p>
          </div>
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegAddressBook />
            </span>

            <h3 className="contact__card-title">GitHub</h3>
            <p className="contact__card-data"> <a href="https://github.com/LUC1f3R-0/" rel="noopener noreferrer" target="_blank">GitHub Profile</a></p>
          </div>
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegAddressBook />
            </span>

            <h3 className="contact__card-title">LinkDin</h3>
            <p className="contact__card-data"> <a href="https://www.linkedin.com/in/thushara-thilan-b16784191/" rel="noopener noreferrer" target="_blank">LinkDin Profile</a></p>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group grid">
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your full name <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Your Name"
                value={form.name}
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your Email Address <b>*</b>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                className="contact__form-input"
                placeholder="youremail@gmail.com"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <label className="contact__form-tag text-cs">
              Your Subject <b>*</b>
            </label>
            <input
              type="text"
              name="subject"
              onChange={handleChange}
              value={form.subject}
              className="contact__form-input"
              placeholder="your subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag text-cs">
              Your Message <b>*</b>
            </label>
            <textarea
              type="text"
              name="message"
              onChange={handleChange}
              value={form.message}
              placeholder="Your Message"
              className="contact__form-input"></textarea>
          </div>

          <div className="contact__submit">
            <p>* Accept the terms and conditions.</p>
            <button type="submit" className="btn text-cs">
              {message ? 'sending' : 'Send Messages'}
            </button>
          </div>
        </form>
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Contact Me</span>
      </div>
    </section>
  );
};

export default Contact;
