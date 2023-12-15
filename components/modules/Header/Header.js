import React from 'react'
import Link from 'next/link'
function Header() {
    return (
        <>
            <header className="header">
                <img src="/img/logo.png" alt="Nexter Logo" className="header__logo" />
                <h3 className="u-heading-3 u-heading--light">خانه خودتان:</h3>
                <h1 className="u-heading-1">با خرید خانه نهایت آزادی را احساس کنید</h1>
                <Link href='/homes' className="btn header__btn btn-brown">
                    املاک ما را مشاهده کنید
                </Link>

                <p className="seeon__text">دیده می شود در</p>
                <figure className="seeon__box-img">
                    <img src="/img/logo-bbc.png" alt="BBC" className="seeon__img" />
                    <img src="/img/logo-bi.png" alt="BBC" className="seeon__img" />
                    <img src="/img/logo-forbes.png" alt="BBC" className="seeon__img" />
                    <img src="/img/logo-techcrunch.png" alt="BBC" className="seeon__img" />
                </figure>
            </header>

        </>
    )
}

export default Header
