import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//let user = JSON.parse(localStorage.getItem('mytoken'));

export default function Dashboard() {

	const [welcome, setWelcome] = useState('');
	//const name = (localStorage.getItem("name"));

  function logout() {
    localStorage.clear("mytoken");
}

console.log(localStorage.getItem("mytoken"));
console.log(localStorage.getItem("username"));

//const decodedd = localStorage.getItem("mytoken");
//const decoded = jwt.verify(token, "mytoken");
//var username1 = jwtToken.verify(decodedd);
//console.log(username1);

//const userdetail = localStorage.getItem('username',data.username);
//console.log(userdetail);

//function welcomeName() {
//setWelcome = localStorage.getItem("mytoken".username);
//}

  return (
    <div className="container-fluid">
	<div className="row justify-content-center">
  
<h3 className="text-center mb-1" style={{color:"indigo"}}> Welcome {localStorage.getItem('username')}! </h3>

		<div className="col-12 col-lg-11 mb-2">
			<div className="card card0 rounded-0">
				<div className="row">
					<div className="col-md-5 d-md-block d-none p-0 box">
						<div className="card rounded-0 border-0 card1 ms-1" id="bill">
							<h4 id="heading1" style={{color:"indigo"}}>Payment Summary</h4>
							<div className="row">
								<div className="col-lg-7 col-8 mt-4 line pl-4">
									<h4 className="bill-head "style={{color:"indigo"}}>Medicines</h4>
									<small className="bill-date">2022 Feb 10 at 10:30 PM</small>
								</div>
								<div className="col-lg-5 col-4 mt-4">
									
								</div>
							</div>
							<div className="row">
								<div className="col-lg-7 col-8 mt-4 line pl-4">
									<h4 className="bill-head"style={{color:"indigo"}}>Cinema</h4>
									<small className="bill-date">2022 Feb 25 at 11:30 PM</small>
								</div>
								<div className="col-lg-5 col-4 mt-4">
							
								</div>
							</div>
							<div className="row">
								<div className="col-lg-7 col-8 mt-4 line pl-4">
									<h4 className="bill-head"style={{color:"indigo"}}>Grocery</h4>
									<small className="bill-date">2022 Mar 17 at 10:45 PM</small><br/>
									<small className="bill-date">2022 Mar 18 at 11:45 PM</small>
								</div>
								<div className="col-lg-5 col-4 mt-4">
									
								</div>
							</div>
							<div className="row">
								<div className="col-lg-7 col-8 mt-4 line pl-4">
									<h4 className="bill-head"style={{color:"indigo"}}>Food</h4>
									<small className="bill-date">2022 Apr 13 at 05:30 PM</small>
								</div>
								<div className="col-lg-5 col-4 mt-4">
									
								</div>
							</div>
							<div className="row mt- text-center">
								<div className="col-md-7 mt-4" style={{background:"indigo"}}>
									<p className="bill-date" id="total-label">Total Price</p>
									<h2 className="bill-head" id="total">$ 523.65</h2>
									<small className="bill-date" id="total-label">Price includes all taxes</small>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-7 col-sm-12 p-0 box">
						<div className="card rounded-0 border-0 card2" id="paypage">
							<div className="form-card">
			                    <h2 id="heading2" className="text-danger"style={{color:"indigo"}}>Payment Method </h2>
			                    <div className="radio-group">
			                        <div className='radio' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" width="200px" height="60px"/></div>
			                        <div className='radio' data-value="paypal"><img src="https://i.imgur.com/5QFsx7K.jpg" width="200px" height="60px"/></div>
			                        <br/>
			                    </div>
			                    <label className="pay"style={{color:"indigo"}}>Name on Card</label>
			                    <input type="text" name="holdername" placeholder="John Smith"/>
			                    <div className="row">
			                        <div className="col-8 col-md-6">
			                            <label className="pay"style={{color:"indigo"}}>Card Number</label>
			                            <input type="text" name="cardno" id="cr_no" placeholder="0000-0000-0000-0000" minLength="19" maxLength="19"/>
			                        </div>
			                        <div className="col-4 col-md-6">
			                            <label className="pay"style={{color:"indigo"}}>CVV</label>
			                            <input type="password" name="cvcpwd" placeholder="&#9679;&#9679;&#9679;" className="placeicon" minLength="3" maxLength="3"/>
			                        </div>
			                    </div>
			                    <div className="row">
			                        <div className="col-md-12">
			                            <label className="pay"style={{color:"indigo"}}>Expiration Date</label>
			                        </div>
			                        <div className="col-md-12">
			                            <input type="text" name="exp" id="exp" placeholder="MM/YY" minLength="5" maxLength="5"/>
			                        </div>
			                    </div>
			                    <div className="row">
			                        <div className="col-md-3">
			                            <input type="submit" value="Make a payment" id= "mainbutton1" className="btn btn-info rounded"/>
			                        </div>
			                    </div>
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
