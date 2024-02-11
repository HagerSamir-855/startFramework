import React from 'react';
import avattar from "../../assets/avataaars.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Home(props) {
    return (
    <div className="mainpage text-white">
        <div className='container mx-auto text-center'>
            <div className="d-flex justify-content-center">
                <img className="d-block w-25" src={avattar} alt="logo"/>
            </div>
            <div className=''>
                    <h1 className="fw-bold">START FRAMEWORK</h1>
                    <div className="d-flex mt-3 justify-content-center gap-4">
                        <span className=" border-bottom border-light  border-5 head-bottom"></span>
                        <FontAwesomeIcon icon="fa-solid fa-star"/>
                        <span className="border-bottom border-light  border-5 head-bottom"></span>
                    </div>
                    <div className="d-flex justify-content-center gap-2 pt-2">
                        <span className="">Graphic Artist-</span>
                        <span className="">Web Designer-</span>
                        <span className="">Illustrator</span>
                    </div>
                </div>
            </div>
        </div>

)
    ;
}

export default Home;