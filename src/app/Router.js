import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Init from "../pages/Init";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import About from "../pages/About";
import Layout from "./Layout";
import Errornotfound from "../services/Errornotfound";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />} >
                <Route index element={<Init />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/nosotros" element={<About />} />
                <Route exact path="*" element={<Errornotfound />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;