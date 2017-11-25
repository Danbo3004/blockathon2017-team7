import "semantic-ui-css/semantic.min.css";
import "flatpickr/dist/themes/material_green.css";
import "react-image-gallery/styles/css/image-gallery.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
