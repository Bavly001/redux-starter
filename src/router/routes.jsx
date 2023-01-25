import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Home from "../components/home";

export default function routes() {
     return (
          <Routes>
               <Route path="" element={<Home/>}/>
          </Routes>
     );
}
