import React from 'react';
import avattar from "../../assets/avataaars.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function About(props) {
    return (
        <div className="secondPage p-5  text-white ">
            <div className='container p-5 mx-auto text-center'>
                <div className='p-5'>
                    <h1 className="fw-bold">ABOUT COMPONENT</h1>
                    <div className="d-flex mt-3 justify-content-center gap-4">
                        <span className=" border-bottom border-light  border-5 head-bottom"></span>
                        <FontAwesomeIcon icon="fa-solid fa-star"/>
                        <span className="border-bottom border-light  border-5 head-bottom"></span>
                    </div>
                    <div className="row text-start">
                        <div className="col-md-6 py-3">
                            <p className="px-5">
                                Freelancer is a free bootstrap theme created by Route. The download includes the
                                complete source files including HTML, CSS, and JavaScript as well as optional SASS
                                stylesheets for easy customization.
                            </p>
                        </div>
                        <div className="col-md-6 py-3">
                            <p  className="px-5">
                                Freelancer is a free bootstrap theme created by Route. The download includes the
                                complete source files including HTML, CSS, and JavaScript as well as optional SASS
                                stylesheets for easy customization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;