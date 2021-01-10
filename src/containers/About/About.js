import React, { useState } from "react";

import "./About.css";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Button from "../../components/UI/Button/Button";
import apiCalls from "../../utos/ApiCalls";

const About = (props) => {
  const [cv, setCv] = useState();

  const uploadCvHalnder = () => {
    if (cv) {
      const data = new FormData();
      data.append("cv", cv);
      apiCalls.postCV(data).then((res) => {
        console.log(res.status);
      });
    }
  };

  const onCvInputChange = (event) => {
    setCv(event.target.files[0]);
  };

  const downloadCvHandler = () => {
    apiCalls
      .getCV()
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Alexandros-Efthymiou.pdf");
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <Backdrop backdrop />
      <div className="Grid">
        <div className="artistPhoto">
          <img src={`${process.env.PUBLIC_URL}/img/photo.svg`} alt="Alex" />
        </div>
        <div className="header alignLeft">
          <div className="widthFitContent">
            <h1 style={{ fontWeight: "bold", letterSpacing: "1px" }}>
              About Me
            </h1>
          </div>
        </div>
        <div className="artistName widthFitContent alignLeft">
          <div className="name">
            <span style={{ marginRight: ".5em" }}>Alexandros</span>
            <span>Efthymiou</span>
          </div>
          <div className="artistDescription">
            Graphic Designer
            <span>-</span>
            Concept Artist
          </div>
        </div>
        <div className="text alignLeft">
          I am a Graphic Designer and a Concept Artist. <br />I am young and
          passionate about designing, full of <br />
          creativity and will on making the world a better place. <br />
          My Goal is to leave my mark on the Design field by <br />
          showing my graphic skills with the pencil and the mouse.
        </div>
        <div className="download alignLeft">
          <Button
            btnType="Download"
            icon="download"
            click={downloadCvHandler}
          />
          <div
            className="widthFitContent"
            style={{
              display: "flex",
              backgroundColor: "var(--LightColor)",
              marginLeft: ".5em",
            }}
          >
            <div className="downloadDescription">Download Resume</div>
          </div>
        </div>
      </div>
      {props.isAuth && (
        <div style={{ top: "90vh", position: "absolute" }}>
          <input
            data-v-1a48b055=""
            type="file"
            accept="application/pdf"
            onChange={(event) => onCvInputChange(event)}
          />
          <Button btnType="Success" click={uploadCvHalnder}>
            upload CV
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default About;
