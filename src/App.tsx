import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import SubjectList from "./SubjectList";

const genName = (path: string, search?: string): string => {
    if (path === "/list" && search) {
        search = decodeURI(search);
        let query: any = {};
        search
            .split("?")
            .slice(1)
            .map((param) => (query[param.split("=")[0]] = param.split("=")[1]));

        let result = "";

        if (query.clas) {
            result = result + query.clas + " класс";
        }

        if (query.subject) {
            result = result + ", " + query.subject;
        }

        if (query.teacher) {
            result = result + ", " + query.teacher;
        }

        return result;
    }

    if (path === "/") {
        return "Банк семинаров";
    }

    return "";
};

function App() {
    const location = useLocation();

    return (
        <div>
            <header id="name">
                <h1>{genName(location.pathname, location.search)}</h1>
            </header>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/list">
                    <SubjectList />
                </Route>
                <Route path="*">
                    <h1>404</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
