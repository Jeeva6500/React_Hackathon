import React from 'react'
import Capture8 from "./Capture8.PNG"
import Hero2 from "./Hero2.PNG"

import image1 from "./image1.PNG"
import image2 from "./image2.PNG"
import image3 from "./image3.PNG"
import image4 from "./image4.PNG"
import image11 from "./image11.jpg"
import image12 from "./image12.png"

export default function Home() {
    return (
        <div>
            <div className='text-center'>
                <img src={image4} style={{ height: 400, width: "98.7vw" }} ></img>

                <div className="row p-2 pt-4" style={{ background: "indigo" }}>
                    <div className="col-md-2 p-2" style={{ color: "white" }}>
                        <i className="fa fa-home p-2"></i>
                        <br></br>
                        <h6 className="work-heading p-3 " id="center_flex"  >Select the right <br></br>mortgage</h6>

                    </div>

                    <div className="col-md-2 p-2 " style={{ color: "white" }}>
                        <i className="fa fa-credit-card p-2" ></i>
                        <h6 className="work-heading p-3" id="center_flex">Choose from our <br></br>credit cards</h6>

                    </div>

                    <div className="col-md-2 p-2" style={{ color: "white" }}>
                        <i className="fas fa-phone p-2" ></i>
                        <h6 className="work-heading p-3" id="center_flex">Banking with <br></br>Natwest</h6>

                    </div>

                    <div className="col-md-2 p-2" style={{ color: "white" }}>
                        <i className="fa fa-gbp p-2"></i>
                        <h6 className="work-heading p-3" id="center_flex">See our savings <br></br>products</h6>

                    </div>

                    <div className="col-md-2 p-2" style={{ color: "white" }}>
                        <i className="fas fa-comments p-2" ></i>
                        <h6 className="work-heading p-3" id="center_flex" >Visit our Support <br></br>centre</h6>

                    </div>
                    <div className="col-md-2 p-2 pb-4" style={{ color: "white" }}>
                        <i className="fa fa-laptop p-2" ></i>
                        <h6 className="work-heading p-3" id="center_flex" >Lgin to Online <br></br>Banking</h6>

                    </div>
                </div>
                

                <div className="card mb-0">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Capture8} style={{ "height": "40vh" }} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title" style={{ color: "indigo" }} >Still interested in the app?</h2>
                                <p className="card-text pt-4">Getting started on our app is quick and easy - you can <br></br>even do it in the time it takes to make a cuppa.</p>
                                {/* <p className="card-text p-2">Bank securely, see your accounts and make payments<br></br> anytime, anywhere.</p> */}
                                <p className="card-text p-2">App available to customers aged 11+ using compatible iOS and<br></br>Android devices and a UK or international mobile number in <br></br>specific countries. Payment limits apply.</p>
                                <button type="button" className="btn btn-info pt-2" id = "mainbutton1">Get the app</button>
                            </div>
                        </div>


                        <div className="container bg-info">
                            <div className="row p-2" style={{ background: "indigo" }}>
                                <div className="col-md-2 p-2" style={{ color: "white" }}>
                                    <i className="fa fa-comments p-2"></i>
                                    <br></br>
                                    <h6 className="work-heading p-2" id="center_flex"  >Support centre</h6>

                                </div>

                                <div className="col-md-2 p-2" style={{ color: "white" }}>
                                    <i className="fas fa-cubes p-2" ></i>
                                    <h6 className="work-heading p-2" id="center_flex">Start a business</h6>

                                </div>

                                <div className="col-md-2 p-2" style={{ color: "white" }}>
                                    <i className="fas fa-lock p-2" ></i>
                                    <h6 className="work-heading p-2" id="center_flex">Fraud & Security</h6>

                                </div>

                                <div className="col-md-2 p-2" style={{ color: "white" }}>
                                    <i className="fa fa-credit-card p-2"></i>
                                    <h6 className="work-heading p-2" id="center_flex">Card payment</h6>

                                </div>

                                <div className="col-md-2 p-2" style={{ color: "white" }}>
                                    <i className="fas fa-commenting p-2" ></i>
                                    <h6 className="work-heading p-2" id="center_flex" >Ask Cora</h6>

                                </div>
                                <div className="col-md-2 p-2" style={{ color: "white" }}>
                                    <i className="fa fa-gbp p-2" ></i>
                                    <h6 className="work-heading p-2" id="center_flex" >Financial Health</h6>
                                </div>
                            </div>
                        </div>

                        <div className="text-center text-sm-start">
                            <h3 className="text-center mt-4" id='products1' style={{ color: "indigo" }}>Explore our products and services</h3>
                            <div className="container text-center text-md-start mt-5">
                                <div className="row mt-3">
                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <h5 className="fw-bold mb-4" id="products" style={{ color: "indigo" }}>
                                            Our products
                                        </h5>
                                        <p>
                                            <a href="#!" className="text-reset">Current Accounts</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Credit Cards</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Loans</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Overdrafts</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Buy Now Pay Later</a>
                                        </p>
                                    </div>

                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                        <h5 className="fw-bold mb-4" id="products" style={{ color: "indigo" }}>
                                            Our products
                                        </h5>
                                        <p>
                                            <a href="#!" className="text-reset">Mortgages</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Home Insurance</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Life Insurance</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Savings</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Investing</a>
                                        </p>
                                    </div>

                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                        <h5 className="fw-bold mb-4" id="products" style={{ color: "indigo" }}>
                                            Our support
                                        </h5>
                                        <p>
                                            <a href="#!" className="text-reset">Struggling financially</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Bereavement support</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Ways to bank with us</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Support for Ukraine refugees</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Support centre</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-center" style={{ color: "indigo" }}>Switch to NatWest</h3>

                            <div className="row row-cols-1 offset-1 row-cols-md-3 offset-1 g-4" id='card123' >
                                
                                <div className="col p-4">
                                    <div className="card h-100 border-0">
                                        <img src={image1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Switching your current account</h5>
                                            <p className="card-text">Want to keep your banking all in one place? It only takes 7 days, your Direct Debits will be moved over, and all the tricky admin bits will be covered too.</p>
                                            <div className='text-center'>
                                            <button type="button" id="mainbutton1" className="btn btn-info pt-2">Switch to us</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-4">
                                    <div className="card h-100 border-0">
                                        <img src={image2} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Video chat day or night</h5>
                                            <p className="card-text">Looking to move? Starting a family? Whatever goal you’re working towards, a Check-in with NatWest could help get you closer. Criteria apply.</p>
                                            <div className='text-center'>
                                            <button type="button-center" id="mainbutton1" className="btn btn-info pt-2 me-2 p-2">Get started</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-4">
                                    <div className="card h-100 border-0">
                                        <img src={image3} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Cut the waste, feel the heat</h5>
                                            <p className="card-text">Well insulated homes need less energy to heat up and could stay warmer for longer. So, spending some money now could help lower energy bills.</p>
                                            <div className='text-center'>
                                            <button type="button" id="mainbutton1" className="btn btn-info pt-2">Show me more</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="card mt-2 border-0 offset-1">
                                <div className="row g-0">
                                    <div className="col-md-5 ms-4">
                                        <img src={image11} style={{ "height": "90%", "width": "90%" }} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-5 pt-2 offset-1">
                                        <div className='card border-0'>
                                        <div className="card-body border-0" id='prices-card'>
                                            <h4 className="card-title p-2" >Prices are up. Let's ease the squeeze.</h4>
                                            <p className="card-text p-2">We're experiencing the biggest price hike for 50 years.<br></br> Inflation, energy prices, tax rises and the Russian <br></br>invasion of Ukraine, have all played a part. It's squeezing<br></br> all our pockets. So if you're feeling the pinch, you're not<br></br> alone.</p>
                                            <div className='text-center'>
                                            <button type="button" id="mainbutton1" className="btn btn-info pt-2">Know more</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="card mb-2 mt-2 border-0 offset-1">
                            <div className="row g-0">
                                <div className=" col-md-5 ms-4">
                                    <div className="card-body p-2" id='account-card'>
                                        <h4 className="card-title p-2">Independent service quality survey results for personal  current accounts</h4>
                                        <p className="card-text p-2">As part of a regulatory requirement, an independent<br></br> survey was conducted to ask customers of the largest 16<br></br> personal current account providers if they would <br></br>recommend their provider to friends or family.</p>
                                        <div className='text-center'>
                                        <button type="button" id="mainbutton1" className="btn btn-info pt-2">Know more</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5 m-0 ms-4 p-2">
                                    <img src={image12} style={{ "height": "90%", "width": "100%" }} className="img-fluid rounded-start pt-2 ms-4" alt="..." />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


