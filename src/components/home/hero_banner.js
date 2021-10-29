import React from "react";

function HeroBannerComponent() {
  return (
      <section className="container">

        {/* Hero Banner */}
        <svg viewBox="0 0 1920 684">
          <g transform="translate(0 -100)">
            <rect
              className="hero_banner"
              width={1920}
              height={684}
              transform="translate(0 100)"
            />

            {/* Hero Text Block */}
            <g transform="translate(243 156.891)">
              <text className="top" transform="translate(0 44.109)">
                <tspan x={0} y={0}>
                  {"Lorem ipsum"}
                </tspan>
              </text>
              <text className="mid" transform="translate(0 137.109)">
                <tspan x={0} y={0}>
                  {"PNACC"}
                </tspan>
              </text>
              <text className="bottom" transform="translate(0 185.109)">
                <tspan x={0} y={25}>
                  {"Lorem ipsum dolor sit amet, consetetur "}
                </tspan>
                <tspan x={0} y={56}>
                  {"sadipscing elitr, sed diam nonumy eirmod "}
                </tspan>
                <tspan x={0} y={87}>
                  {"tempor invidunt ut labore et dolore magna "}
                </tspan>
                <tspan x={0} y={118}>
                  {"aliquyam erat, sed diam voluptua. At vero eos."}
                </tspan>
              </text>
            </g>

            {/* Logo Image */}
            <g className="logo" transform="translate(1608 514)">
              <rect className="logo_img" width={215} height={205} rx={102.5} />
              <rect
                className="logo_img"
                x={0.5}
                y={0.5}
                width={214}
                height={204}
                rx={102}
              />
            </g>
            <text className="logo-text" transform="translate(1716 610)">
              <tspan x={-39.749} y={0}>
                {"LOGO"}
              </tspan>
              <tspan x={-37.507} y={31}>
                {"HERE"}
              </tspan>
            </text>


            {/* Sign Up Button */}
            <g transform="translate(278 575)">
              <g className="g" transform="translate(0 0)">
                <rect className="sign-up" width={205} height={68} rx={34} />
                <rect
                  className="sign-up-button"
                  x={0.5}
                  y={0.5}
                  width={204}
                  height={67}
                  rx={33.5}
                />
              </g>
              <text className="sign-up-text" transform="translate(48 44)">
                <tspan x={0} y={0}>
                  {"Sign Up"}
                </tspan>
              </text>
            </g>
          </g>
        </svg>
      </section>
  
    );
}

export default HeroBannerComponent;
