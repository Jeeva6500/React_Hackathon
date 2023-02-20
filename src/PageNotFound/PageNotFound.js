import React, { PureComponent } from 'react'
export default class PageNotFound extends PureComponent {
  render() {
    return (
        <div>
        <section className="error-area error-one">
   <div className="container">
      <div className="row justify-content-center">
         <div className="col-xxl-7 col-xl-8 col-lg-8">
            <div className="error-content text-center">
               <span className="error-404"style={{color: "indigo"}}>404</span>
               <h1 className="sub-title"style={{color: "indigo"}}>Oops! The page you are looking for could not be found.</h1>
               <h4 className="text pt-2" style={{color: "indigo"}}>
               It may have been removed, had it's name changed, or is temporarily unavailable.
               </h4>
               <div className="error-form">
                  <form action="#0">
                     <i className="lni lni-search-alt"></i>
                     <input type="text" id = "pagenotfoundtext" placeholder="Search for page"/>
                     <div className="error-btn rounded-buttons">
                        <button className="btn danger-btn rounded-full" style={{color: "indigo"}} type="submit">Search</button>
                     </div>
                  </form>
               </div>
            </div>
            
         </div>
      </div>
   </div>
</section>
      </div>
    )
  }
}
