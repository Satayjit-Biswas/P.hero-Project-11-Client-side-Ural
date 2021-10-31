import React from 'react';
import { NavLink } from 'react-router-dom';
import './Packagedata.css'

const Packagedata = (props) => {
    const {_id,Title,Description,Img_Link,Price,Duration_Day,Duration_Night} = props.service
    return (
        <div className="col-lg-4 col-md-12">
            <div className="Packagedata_area">
                <div className="Packagedata_img">
                    <img src={Img_Link} alt="p1"/>
                    <div className="Packagedata_price">
                        <span>${Price}</span>
                    </div>
                </div>
                <div className="Packagedata_area_text">
                    <h5><a href="#">{Title}</a></h5>
                    <div className="Duration">
                        <i className="far fa-clock"></i>
                        <p>
                            <span>Duration : </span>
                            {Duration_Day} days {Duration_Night} nights
                        </p>
                    </div>
                    <p>{Description.substring(0,100)} . . .</p>
                    <div className="text-center">
                        <NavLink to={`/services/${_id}`}>
                            <button className="btn_custom">
                                Book Now
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packagedata;