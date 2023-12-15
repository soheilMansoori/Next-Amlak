import Link from "next/link";
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
    faExpand,
    faHeart,
    faKey,
    faMapMarker,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;




function Home({ title, id, price, meterage, roomCount, img }) {
    return (
        <div className="card">
            <img src={img} alt="House 6" className="card__img" />
            <h5 className="card__title">{title}</h5>
            <span className="card__like">
                {/* <i className="fa fa-heart"></i> */}
                {/* <FontAwesomeIcon icon={faHeart} /> */}
            </span>
            <div className="card__details">
                <span className="">
                    {/* <i className="fa fa-map-marker card__icon"></i> */}
                    <FontAwesomeIcon icon={faMapMarker} className="card__icon" />
                </span>
                <p className="card__text">مالدیو</p>
                <span className="">
                    {/* <i className="fa fa-user card__icon"></i> */}
                    <FontAwesomeIcon icon={faUser} className="card__icon" />
                </span>
                <p className="card__text">{roomCount} اتاق</p>
                <span className="">
                    {/* <i className="fa fa-expand card__icon"></i> */}
                    <FontAwesomeIcon icon={faExpand} className="card__icon" />
                </span>
                <p className="card__text">{meterage} متر مربع</p>
                <span className="">
                    {/* <i className="fa fa-key card__icon"></i> */}
                    <FontAwesomeIcon icon={faKey} className="card__icon" />
                </span>
                <p className="card__text">{price.toLocaleString()} میلیون تومان</p>
            </div>

            <Link href={`/homes/${id}`} className="btn btn-brown btn-card">
                مشاهده ملک
            </Link>
        </div>
    );
}

export default Home;