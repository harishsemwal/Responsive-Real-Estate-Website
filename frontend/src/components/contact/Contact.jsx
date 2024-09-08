import React from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className='contact mb-5'>
        <Back name='Contact Us' title='Get Help & Friendly Support' cover={img} />
        <div className='container'>
          <form className='contact-form shadow p-4 bg-light'>
            <h4 className='text-center mb-4'>Fill Up The Form</h4>
            <div className='row mb-3'>
              <div className='col-md-6'>
                <input type='text' className='form-control' placeholder='Name'/>
              </div>
              <div className='col-md-6'>
                <input type='email' className='form-control' placeholder='Email'/>
              </div>
            </div>
            <input type='text' className='form-control mb-3' placeholder='Subject' />
            <textarea className='form-control mb-3' cols='30' rows='6' placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn-primary w-100'>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
