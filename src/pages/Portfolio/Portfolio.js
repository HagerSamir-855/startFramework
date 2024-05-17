import React,{useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import image1 from "../../assets/portfolio/poert1.png";
import image2 from "../../assets/portfolio/port2.png";
import image3 from "../../assets/portfolio/port3.png";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import {faStar} from "@fortawesome/free-solid-svg-icons";
function Portfolio(props) {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");
    const galleryTab = [
// you can add more image if you want
        {
            imageUrl: image1,
            type: "Nature",
            title: "Beautiful Work",
        },
        {
            imageUrl: image2,
            type: "Nature",
            title: "Beautiful Work",
        },
        {
            imageUrl: image3,
            type: "Nature",
            title: "Beautiful Work",
        },
        {
            imageUrl: image1,
            type: "Nature",
            title: "Beautiful Work",
        },
        {
            imageUrl: image2,
            type: "Nature",
            title: "Beautiful Work",
        },
        {
            imageUrl: image3,
            type: "Nature",
            title: "Beautiful Work",
        },

    ];
    const slides = galleryTab.map((item) => ({
        src: item.imageUrl,
        width: 600,
        height: 650,
        srcSet: [
            { src: item.imageUrl, width: 150, height: 150 },
            { src: item.imageUrl, width: 640, height: 426 },
            { src: item.imageUrl, width: 1200, height: 800 },
            { src: item.imageUrl, width: 2048, height: 1365 },
            { src: item.imageUrl, width: 3840, height: 2560 },
        ],
    }));

    return (
        <div className="portfolio container text-center mx-auto">
        <div className='d-block justify-content-center my-5'>
            <h1 className="fw-bold">PORTFOLIO SECTION</h1>
            <div className="d-flex mt-3 justify-content-center gap-4">
                <span className="border-bottom  border-4  head-bottom" ></span>
                <FontAwesomeIcon icon={faStar}/>
                <span className="border-bottom  border-4  head-bottom"></span>
            </div>
        </div>

            <div className="my-4">
                <div  className="row g-5">
                   {galleryTab.map((x, index) => {
                        return (
                    <div className="col-lg-4 col-md-6">
                        <div className="layer__  rounded-3 overflow-hidden position-relative"><img
                            alt=" " onClick={() => {
                            setOpen(true);
                            setImage(x.imageUrl);
                        }} className=" w-100  rounded-3" src={x.imageUrl}/>
                        </div>
                    </div>
                        );
                   })}
                </div>
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    plugins={[Zoom]}
                    showPrevNext={false}
                    slides={slides}
                />
            </div>
        </div>
    );
}

export default Portfolio;