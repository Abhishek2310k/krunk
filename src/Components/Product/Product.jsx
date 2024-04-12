import React from 'react';
import './Product.scss';
import { RxCross2 } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa";

const Product = ({ messages }) => {
    const tags = ["Clutch", "Fabric Lining", "Baggit", "Multipurpose", "Krunk"];
    const filters = ["strap-long", "Colour", "Size", "Brand", "Material"];


    const getCurrentTime = () => {
        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
        return formattedTime;
      };
    
      const currentTime = getCurrentTime();

    return (
        <div className={`product ${messages.length > 0 ? 'show' : ''}`}>
            <div className='r1'>
                <div className='title'>
                    <span>
                        Popular tags for handbag
                    </span>
                </div>
                <div className='tags'>
                    {tags.map((tag, index) => (
                        <div key={index} className='tag'>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <div className='r2'>
                <div className='item'>
                    <div className='title'>
                        <img src='/bag.png' alt='bag'/>
                        <div className='name'>
                            <span className='item_name'>
                                <span>
                                    Bags on Timpu
                                </span>
                                <img src='/tick.png' alt='tick'/>
                            </span>
                            <span className='num'>
                                <span> 1123 products </span> <FaChevronRight/>
                            </span>
                        </div>
                    </div>
                    <div className='desc'>
                        Or set Filters and help us choose the best bags for you
                    </div>
                </div>
                <div className='time' style={{paddingLeft:"10px",fontSize:"10px"}}>
                    {currentTime}
                </div>
            </div>
            <div className='r3'>
                <div className='title'>
                    <span>Select Filters</span>
                    <span className='right'><img src='/sliders.png' alt='slider'/> Filter</span>
                </div>
                <div className='filters'>
                    {filters.map((filter, index) => (
                        <div key={index} className='tag'>
                            <span>{filter}</span> <RxCross2/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;
