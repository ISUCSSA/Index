import React, { Component } from 'react';
import HoverLink from './hoverLink';

class Footer extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: "#f3f3f3",
                color: "#686868",
                fontSize: "14px",
                lineHeight: "24px",
                padding: "9%",
                paddingTop: "25px",
                paddingBottom: "45px"
            }}>
                <div className="row">
                    <div className="col-3" style={{ textAlign: "center" }}>
                        <p style={{ fontSize: "30px", margin: "0", color: "#c00", fontFamily: "'Libre Baskerville', serif", whiteSpace: "nowrap" }}>
                            I<span style={{ fontSize: "24px" }}>OWA </span>
                            S<span style={{ fontSize: "24px" }}>TATE</span>
                        </p>
                        <p style={{ fontSize: "25px", paddingTop: "1px", margin: "0", color: "#c00", fontFamily: "'Libre Baskerville', serif", whiteSpace: "nowrap" }}>
                            UNIVERSITY
                        </p>
                        <p style={{ fontSize: "18px", margin: "0", paddingTop: "10px" }}>
                            Chinese Students &
                        </p>
                        <p style={{ fontSize: "18px", margin: "0" }}>
                            Scholars Association
                    </p>
                    </div>
                    <div className="col-3">
                        <p style={{ fontSize: "14px", margin: "0" }}><strong>Iowa State Universisy</strong></p>
                        <p style={{ fontSize: "14px", margin: "0" }}>Chinese Students & Scholars Association</p>
                        <br />
                        <p style={{ fontSize: "14px", margin: "0" }}>cssa.isu.ia@gmail.com</p>
                        <p style={{ fontSize: "14px", margin: "0" }}>2229 Lincoln Way C4 1530 Student Office</p>
                        <p style={{ fontSize: "14px", margin: "0" }}>​Memorial Union Ames, iA 50011-1130</p>
                    </div>
                    <div className="col-3">
                        <HoverLink icon="wechat" color="#06ad00">Wechat</HoverLink>
                        <HoverLink icon="weibo" color="#da0000">Weibo</HoverLink>
                        <HoverLink icon="facebook-square" color="#008ada">Facebook</HoverLink>
                        <HoverLink icon="instagram" color="#a115ff">Instragram</HoverLink>
                    </div>
                    <div className="col-3">
                        Copyright © 2017 WMXPY, open sourced under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a> License.
                </div>
                </div>
            </div>
        );
    }
}

export default Footer;
