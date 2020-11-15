import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./style.less";
import { ApiContext } from "./Api/ApiContext";
import { NoteApiClient } from "./Api/NoteApi/NoteApiClient";
import { App } from "./Components/App/App";

const API_URL = process.env.NODE_ENV === "development" ? `http://localhost:9999` : ``;
const api = new NoteApiClient(API_URL);

ReactDOM.render(
    <ApiContext.Provider value={api}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApiContext.Provider>,
    document.getElementById("root")
);
