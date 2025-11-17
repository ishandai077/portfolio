import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";

function Certifications(props) {
  const theme = props.theme;
  return (
    <div className="main" id="certs">
      <div className="certs-body-div">
        <Fade bottom duration={2000} distance="20px">
          <div
            className="custom-message-card"
            style={{
              backgroundColor: theme.body,
              border: `1px solid ${theme.text}`,
              boxShadow: `0px 2px 5px ${theme.text}20`,
            }}
          >
            <div className="custom-message-content">
              <h2 className="custom-message-text" style={{ color: theme.text }}>
                I am Ishan, good learner
              </h2>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Certifications;
