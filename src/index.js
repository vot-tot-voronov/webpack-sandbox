import React, { useState } from "react";
import { render } from "react-dom";
import './style.scss'

function App() {
    return (
        <div className="hold">Hello webpack and postcss!</div>
    );
}

render(<App />, document.getElementById("root"));