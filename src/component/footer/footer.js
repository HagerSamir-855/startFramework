import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

function Footer(props) {
    return (
        <div className="footer text-white">
            <div className="row p-5 m-0 text-center">
                <div className='col-md-4 '>
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className='col-md-4 '>
                    <h3>AROUND THE WEB</h3>
                    <div className="d-flex justify-content-center gap-4">
                        <span className="border border-1 p-2 rounded-circle"><FontAwesomeIcon icon={faFacebook}/></span>
                        <span className="border border-1 p-2 rounded-circle"><FontAwesomeIcon icon={faTwitter}/></span>
                        <span className="border border-1 p-2 rounded-circle"><FontAwesomeIcon icon={faLinkedin}/></span>
                        <span className="border border-1 p-2 rounded-circle"><FontAwesomeIcon icon={faGlobe}/></span>

                    </div>
                </div>

                <div className='col-md-4'>
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>

            </div>
            <div className='bg-dark d-flex justify-content-center'>
                Copyright © Hager Website 2024
            </div>
        </div>


    );
}

export default Footer;