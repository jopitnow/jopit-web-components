import React from "react";
import ReactDOM from "react-dom";

import "../src/index.css"

import ComponentList from "./list/ComponentList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Button from "./components/button/Button";
import TextInput from "./components/input/TextInput";
import Checkbox from "./components/checkbox/Checkbox";
import AlertDialog from "./components/dialog/alert/AlertDialog";
import ErrorScreen from "./components/error/ErrorScreen";
import Header from "./components/header/Header";
import Logo from "./components/logo/Logo";
import SelectorFilter from "./components/select/filter/FilterSelect";
import SelectorStandard from "./components/select/standard/Select";

const root = document.getElementById("root")

const router = <BrowserRouter>
    <Routes>
        <Route path="/" element={<ComponentList />} />
        
        {/* Buttons */}
        <Route path="/button" element={<Button />} />

        {/* Inputs */}
        <Route path="/input" element={<TextInput />} />

        {/* Selectors */}
        <Route path="/selector/filter" element={<SelectorFilter />} />
        <Route path="/selector/standard" element={<SelectorStandard />} />

        {/* Checkbox */}
        <Route path="/checkbox" element={<Checkbox />} />

        {/* Dialogs */}
        <Route path="/alertdialog" element={<AlertDialog />} />

        {/* Error */}
        <Route path="/error" element={<ErrorScreen />} />

        {/* Header */}
        <Route path="/header" element={<Header />} />

        {/* Logo */}
        <Route path="/logo" element={<Logo />} />
    </Routes>
</BrowserRouter>

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(router, root);
