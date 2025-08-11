import React from "react";
import ReactDOM from "react-dom";

import "../src/index.css"

import ComponentList from "./list/ComponentList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Button from "./components/button/Button";
import TextInput from "./components/input/TextInput";
import Checkbox from "./components/checkbox/Checkbox";
import AlertDialog from "./components/dialog/AlertDialog";
import Header from "./components/header/Header";
import HeaderShowcase from "./components/header/Header";
import SelectShowcase from "./components/select/Select";
import {ErrorScreen} from "../src";

const root = document.getElementById("root")

const router = <BrowserRouter>
    <Routes>
        <Route path="/" element={<ComponentList />} />
        
        {/* Buttons */}
        <Route path="/button" element={<Button />} />

        {/* Inputs */}
        <Route path="/input" element={<TextInput />} />

        {/* Selectors */}
        <Route path="/select" element={<SelectShowcase />} />

        {/* Checkbox */}
        <Route path="/checkbox" element={<Checkbox />} />

        {/* Dialogs */}
        <Route path="/alertdialog" element={<AlertDialog />} />

        {/* Error */}
        <Route path="/error" element={<ErrorScreen/>} />

        {/* Header */}
        <Route path="/header" element={<Header />} />
        <Route path="/header/showcase" element={<HeaderShowcase />} />
    </Routes>
</BrowserRouter>

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(router, root);
