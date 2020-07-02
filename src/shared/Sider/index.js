import React, { Fragment } from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import moment from 'moment';

import linkedin from '../../assets/images/linkedin.svg'
import instagram from '../../assets/images/instagram.svg'

import "./Sider.scss";

function Sider() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })

    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
        <>
            <div className="sider-container">     
                {isDesktopOrLaptop && <>
                    <h1 className="logo-text"><Link to="/">jn</Link></h1>
                    <div className="text-links">
                        <div className="menu-item">
                            <Link to="/">
                                HOME
                            </Link>
                        </div>

                        <div className="menu-item">
                            <Link to="/services">
                                SERVICES
                            </Link>
                        </div>

                        <div className="menu-item">
                            <Link to="/about">
                                ABOUT
                            </Link>
                        </div>

                        <div className="menu-item">
                            <Link to="/portfolio">
                                PORTFOLIO
                            </Link>
                        </div>

                        <div className="menu-item">
                            <Link to="/hire-me">
                                HIRE ME
                            </Link>
                        </div>

                        <div className="menu-item">
                            <a href="https://www.instagram.com/jessmernicole/" target="_blank" rel="noopener noreferrer"><img src={instagram} style={{ marginRight: 20 }} height={30} alt="instagram" /></a>
                            <a href="https://linkedin.com/in/jessmernicolenorteza" target="_blank" rel="noopener noreferrer"><img src={linkedin} height={30} alt="linkedin" /></a>
                        </div>

                        <div className="copyright">
                            <span>&copy; {moment().format('YYYY')} Jessmer Nicole</span>
                        </div>
                    </div>
                    {isTabletOrMobile && <p>You are sized like a tablet or mobile phone though</p>}
                </>}
                {isTabletOrMobileDevice && <p>You are a tablet or mobile phone</p>}
            </div>
        </>
    )
}

export default Sider