import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
    return (<>
            <div className="contact container text-center mx-auto">
            <div className='d-block justify-content-center my-5'>
                <h1 className="fw-bold">CONTACT SECTION</h1>
                <div className="d-flex mt-3 justify-content-center gap-4">
                    <span className="border-bottom  border-4  head-bottom" ></span>
                    <FontAwesomeIcon icon={faStar}/>
                    <span className="border-bottom  border-4  head-bottom"></span>
                </div>
            </div>
            <div className='w-50  mx-auto '>
            <FloatingLabel
                controlId="floatingInput"
                label="user Name"
                className="mb-3"
            >
                <Form.Control type="text"  />
            </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="user Age"
                    className="mb-3"
                >
                    <Form.Control type="text"  />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="user Email "
                    className="mb-3"
                >
                    <Form.Control type="email"  />
                </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="user password">
                <Form.Control type="password"  />
            </FloatingLabel>
            </div>
                <button className="my-3 justify-content-start btn btn-outline-info">send message</button>
            </div>
        </>
        );
}

export default Contact;