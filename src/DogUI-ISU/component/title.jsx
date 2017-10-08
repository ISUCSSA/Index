import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';

class Title extends Component {
    render() {
        return (
            <div style={{
                width: "100%",
                backgroundColor: "#c00",
                color: "#fff",
                height: "110px",
                paddingTop: "15px",
                paddingBottom: "15px",
                fontSize: "40px",
                fontFamily: "'Libre Baskerville', serif"
            }}>
                <div className="row">
                    <div className="col-2" style={{ textAlign: "right" }}>
                        <div style={{ paddingRight: "30px" }}>
                            <Logo width="70" />
                        </div>
                    </div>
                    <div className="col-8">
                        <div style={{ float: "left", whiteSpace: "nowrap" }}>
                            <p style={{ fontSize: "40px", margin: "0", cursor: "pointer" }}>
                                I<span style={{ fontSize: "32px" }}>OWA </span>
                                S<span style={{ fontSize: "32px" }}>TATE </span>
                                U<span style={{ fontSize: "32px" }}>NIVERSITY</span></p>
                            <p style={{ fontSize: "21px", margin: "0", marginTop: "-10px", cursor: "pointer" }}>Chinese Students & Scholars Association</p>
                            <p style={{ fontSize: "24px", margin: "0", paddingTop: "10px", cursor: "pointer" }}><strong>{this.props.children}</strong></p>
                        </div>
                        <div style={{ width: "35%", maxWidth: "400px", position: "absolute", right: "0px", textAlign: "right" }}>
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Title;
