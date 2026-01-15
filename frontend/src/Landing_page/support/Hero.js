import React from 'react';

function Hero() {
    return ( 
    <section className="container" id="supportHero">
      <div className="p-4 mt-5 my-3" id="supportWrapper">
        <h4> Support Portal</h4>
        <a href=''>Track Tickets</a>
      </div>
      <div className=" row p-3 ">
        <div className=" col-6 p-5 " style={{borderRight: '1px solid #ddd'}}>
            <h1 className='fs-3'>
                Search for an answer or browse help topics to create a ticket
            </h1>
            <input placeholder='Eg: how do i activate F&O, why is my order getting rejected..' style={{width: '100%', marginBottom: '10px'}}/> <br></br>
            <a href=''>Track account opening</a> 
            <a href=''>Track segment activation</a>
            <a href=''>Intraday margins</a>
            <a href=''>Portiq user manual</a>
        </div>
        <div className=" col-6 p-5">
            <h1 className='fs-3'>
               Featured
            </h1>
            <ol style={{paddingLeft: '20px'}}>
                <li><a href=''> Current Takeovers and Delisting - January 2026</a></li>
                <li><a href=''> Latest Intraday leverages - MIS & CO</a></li>
            </ol>
        </div>
      </div>
      </section>
     );
}

export default Hero;