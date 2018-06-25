import React from "react";
import "./Title.css";

const Title = props =>
    <
    div className = "col-12 col-md-4" > < h1 className = "title" > Current Score: {
        props.score
    } < /h1></div > ;

export default Title;