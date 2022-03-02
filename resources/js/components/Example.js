import React from "react";
import ReactDOM from "react-dom";
import "./../../css/app.css";
import wordtopdf from "./../../images/wordtopdf.svg";



function Example() {
    return (
        <div className="main">
            <div className="rectangle">
                <p className="text-1">PDF to Word</p>
                <div className="frame">
                    <img src={wordtopdf} />
                </div>
                <p className="text-3">Drag your file here</p>
                <p className="text-4">or click to upload</p>

            </div>
        </div>
    );
}


export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
