
import React from 'react'; 
import './ContentBox.css'; 

function ContentBox(){
    return(
        <div className="ContentBox">
                <h1 className="importantText">Get <span className="highligthWord">insights</span> that 
                help your business grow.</h1>
                <p className="slogan">Discover the benefits of data analytics and make 
                    better decisionsregarding revenue, 
                    customer experience, and overall efficiency.
                </p>      
                <div className="boxNumber">
                    <div className="numbers">
                        <p className="importantText"> 10k+</p>      
                        <p className="smallUppercase">COMPANIES</p>
                    </div>
                    <div className="numbers">
                        <p className="importantText">314</p>      
                        <p className="smallUppercase">TEMPLATES</p>
                    </div>
                    <div className="numbers">
                        <p className="importantText">12M</p>      
                        <p className="smallUppercase">QUERIES</p>
                    </div>
                </div>
        </div>
    )
}
export default ContentBox; 