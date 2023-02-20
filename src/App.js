import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Login/Login";
import PageNotFound from "./PageNotFound/PageNotFound";
import Register from "./Register/Register";

function App() {
  return (
    <div>
<BrowserRouter>
<Suspense fallback= {<div><h3 className='text-center'>Loading...</h3></div>}>
<Header />
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/home" element={<Home />}></Route>
<Route path="/login" element={<Login />}></Route>
<Route path="/register" element={<Register />}></Route>
<Route path="/dashboard" element={<Dashboard />}></Route>
<Route path="*" element={<PageNotFound />}></Route>
</Routes>
<Footer />
</Suspense>
</BrowserRouter>


    </div>
  );
}

export default App;
