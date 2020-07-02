import React, { Fragment } from "react";
import {
    Layout
} from "antd";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import "./Header.scss";

const { Header } = Layout

function HeaderMain() {
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
                {isDesktopOrLaptop &&
                    <div className="header-container">
                        <Layout>
                            <Header>
                                <div className="header-container"><p className="header-text">Jessmer Nicole</p></div>
                            </Header>
                        </Layout>
                        {isTabletOrMobile && 
                            <>
                                <Layout>
                                    <Header>
                                        <span className="header-text">Jessmer Nicole</span>
                                    </Header>
                                </Layout>
                            </>
                        }
                    </div>
                }
                {isTabletOrMobileDevice &&
                    <>
                        <Layout>
                            <Header>
                                <span className="header-text">Jessmer Nicole</span>
                            </Header>
                        </Layout>
                    </>
                }
                {/* <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
                {isRetina && <p>You are retina</p>} */}
        </>
    )
}

export default HeaderMain