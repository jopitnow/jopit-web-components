import React from "react";
import ReactDOM from "react-dom";

import "../src/index.css"

import ComponentList from "./list/ComponentList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Button from "./components/button/standard/Button";
import MiddleButton from "./components/button/middle/MiddleButton";
import Checkbox from "./components/checkbox/Checkbox";
import AlertDialog from "./components/dialog/alert/AlertDialog";
import ErrorScreen from "./components/error/ErrorScreen";
import Header from "./components/header/Header";
import TextArea from "./components/input/area/TextArea";
import TextPassword from "./components/input/password/PasswordTextInput";
import TextSearch from "./components/input/search/SearchTextInput";
import TextStandard from "./components/input/standard/TextInput";
import Logo from "./components/logo/Logo";
import SelectorFilter from "./components/select/filter/FilterSelect";
import SelectorStandard from "./components/select/standard/Select";

const root = document.getElementById("root")

const router = <BrowserRouter>
    <Routes>
        <Route path="/" element={<ComponentList />} />
        {/* Buttons */}
        <Route path="/button" element={<Button />} />
        <Route path="/button/middle" element={<MiddleButton />} />

        {/* Checkbox */}
        <Route path="/checkbox" element={<Checkbox />} />

        {/* Dialogs */}
        <Route path="/alertdialog" element={<AlertDialog />} />

        {/* Error */}
        <Route path="/error" element={<ErrorScreen />} />

        {/* Header */}
        <Route path="/header" element={<Header />} />

        {/* Inputs */}
        <Route path="/input/area" element={<TextArea />} />
        <Route path="/input/password" element={<TextPassword />} />
        <Route path="/input/search" element={<TextSearch />} />
        <Route path="/input/standard" element={<TextStandard />} />

        {/* Logo */}
        <Route path="/logo" element={<Logo />} />

        {/* Selectors */}
        <Route path="/selector/filter" element={<SelectorFilter />} />
        <Route path="/selector/standard" element={<SelectorStandard />} />
    </Routes>
</BrowserRouter>

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(router, root);
