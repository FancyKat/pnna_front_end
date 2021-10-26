import React from "react";
import "./style.css";

const Header = () => (
    <svg viewBox="0 0 1920 100">
        <defs>
        </defs>
        <rect className="a" width={1920} height={100} />
        <g transform="translate(1082)">
            <rect className="a" width={178} height={100} />
            <text className="b" transform="translate(89 61)">
                <tspan x={-35.431} y={0}>
                    {"Home"}
                </tspan>
            </text>
        </g>
        <g transform="translate(1270)">
            <rect className="a" width={178} height={100} />
            <text className="b" transform="translate(89 61)">
                <tspan x={-36.609} y={0}>
                    {"About"}
                </tspan>
            </text>
        </g>
        <g transform="translate(1681 12)">
            <rect className="c" width={207} height={76} rx={38} />
            <text className="b" transform="translate(104 49)">
                <tspan x={-36.743} y={0}>
                    {"Log In"}
                </tspan>
            </text>
        </g>
        <g transform="translate(1458)">
            <rect className="a" width={178} height={100} />
            <text className="b" transform="translate(89 61)">
                <tspan x={-46.1} y={0}>
                    {"Sign Up"}
                </tspan>
            </text>
        </g>
        <text className="d" transform="translate(48 67)">
            <tspan x={0} y={0}>
                {"Logo Design"}
            </tspan>
        </text>
    </svg>
);

export default Header;
