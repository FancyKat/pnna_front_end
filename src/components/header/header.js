import React from "react";



function Header(){

    
            return (
                <header className="navigationbar" >
                    <svg viewBox="0 0 1920 100">
                        <rect className="navBase" width={1920} height={100} />
                        <g transform="translate(1082)">
                            <rect className="navbar" width={178} height={100} />
                            <text className="navOption" transform="translate(89 61)">
                                <tspan x={-35.431} y={0}>
                                    {"Home"}   {/* Prop Here some links*/}
                                </tspan>
                            </text>
                        </g>

                        <g transform="translate(1270)">
                            <rect className="navbar" width={178} height={100} />
                            <text className="navOption" transform="translate(89 61)">
                                <tspan x={-36.609} y={0}>
                                    {"About"}   {/* Prop Here some links*/}
                                </tspan>
                            </text>
                        </g>

                            <g transform="translate(1458)">
                            <rect className="navbar" width={178} height={100} />
                            <text className="navOption" transform="translate(89 61)">
                                <tspan x={-46.1} y={0}>
                                    {"Sign Up"}   {/* Prop Here some links*/}
                                </tspan>
                            </text>
                        </g>
                        
                        <g transform="translate(1681 12)">
                            <rect className="loginButton" width={207} height={76} rx={38} />
                            <text className="navOption" transform="translate(104 49)">
                                <tspan x={-36.743} y={0}>
                                    {"Log In"}   {/* Prop Here some links*/}
                                </tspan>
                            </text>
                        </g>

                    
                        <text className="logo" transform="translate(48 67)">
                            <tspan x={0} y={0}>
                                {"Logo Design"}
                            </tspan>
                        </text>
                    </svg>  
                </header>
        
                
            )
        }


export default Header;
