import React from "react";

function HeroBannerComponent() {
  return (
    <>
      <div className="container">
        <svg viewBox="0 0 1920 684">
          {/* Hero Image */}
          <g transform="translate(0 -199.704)">
            <g className="hero_banner" transform="translate(0 199.704)">
              <rect className="hero_img" width={1920} height={684} />
              <rect className="j" x={0.5} y={0.5} width={1919} height={683} />
            </g>

            {/* Hero Text Block */}
            <g transform="translate(243 256.595)">
              <text className="b" transform="translate(0 44.109)">
                <tspan x={0} y={0}>
                  {"Lorem ipsum"}
                </tspan>
              </text>
              <text className="c" transform="translate(0 137.109)">
                <tspan x={0} y={0}>
                  {"PNACC"}
                </tspan>
              </text>
              <text className="d" transform="translate(0 185.109)">
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
            <g transform="translate(1608 613.704)">
              <g className="e" transform="translate(0 0)">
                <rect className="i" width={215} height={205} rx={102.5} />
                <rect
                  className="j"
                  x={0.5}
                  y={0.5}
                  width={214}
                  height={204}
                  rx={102}
                />
              </g>
              <text className="f" transform="translate(108 96)">
                <tspan x={-39.749} y={0}>
                  {"LOGO"}
                </tspan>
                <tspan x={-37.507} y={31}>
                  {"HERE"}
                </tspan>
              </text>
            </g>

            {/* Sign Up button */}
            <g transform="translate(278 674.704)">
              <g className="g" transform="translate(0 0)">
                <rect className="i" width={205} height={68} rx={34} />
                <rect
                  className="j"
                  x={0.5}
                  y={0.5}
                  width={204}
                  height={67}
                  rx={33.5}
                />
              </g>
              <text className="h" transform="translate(48 44)">
                <tspan x={0} y={0}>
                  {"Sign Up"}
                </tspan>
              </text>
            </g>
          </g>

        </svg>
      </div>
    </>
  );
}

export default HeroBannerComponent;
