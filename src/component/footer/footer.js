import React from 'react';


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
                        <span>In</span>
                        <span>Os</span>
                        <span>fa</span>
                        <span>LN</span>

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