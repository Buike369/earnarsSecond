import React,{useState} from 'react'
import "./style/becomeATipster.css"

const BecomeATipster = () => {

 const valuesText = [{h2:"Add Tips",text:`Create your tip and it’ll immediately be added to our “today’s tips” database for buyers to purchase.`},{h2:"Bettors buy from you",text:"Once your tip is live we’ll promote it to over 10,000+ bettors.If they purchase tip then you will earn"},{h2:"Get Paid",text:"60% of every Sale is given directly to you. Assuming a bettor buys the minimum bronze membership."}]
  return (
    <div>
        <div className=''>
             <div  className='becomeTip1'>
            <div className='stable'>
                <div className='becomeTip2'>
                    <p className='keep'>Keep attracting buyers and earn unlimited cash</p>
                    <p className='keep1'>Become a Tipster and <span className='keep1 earnM' > Earn Money!</span></p>
                    <p className='keep2'>Earn money by selling your tips to help others win! Those tips help bettors place better bets to win more cash.</p>
                    <div className='stable1 keep3'><img src="/img/check-second.png" alt="" /> <p className='keep4'>Keep attracting buyers and earn unlimited cash</p></div>
                    <div className='stable1 keep3'><img src="/img/check-second.png" alt="" /><p className='keep4'>Withdraw your funds any time, any place</p></div>
                    <div className='stable1 keep3'><img src="/img/check-second.png" alt="" /> <p className='keep4'>Earn a stable income with no risk</p></div>
                </div>
                 <div  className='becomeTip3'>
                    <form>
                        <div className='pay1 jone'>
                            <div className='gb'>Register Now</div>
                            <p className='gb1'>Start Selling Your Tips In Less Than 30 Seconds</p>
                            <div className='gb2'><input type="email" placeholder="Enter Your email" className='gb3' /></div> 
                            <div className='gb2'><input type="text" placeholder="User Name" className='gb3'/></div> 
                            <div className='gb2'><button className='gb4'>Become a Tipster</button></div>
                            <p  className='gb5'>You agree to <a href="#" className='gb6'>Tipster Terms </a> & <a href="#" className='gb6'> Privacy Policy </a>.</p>
                        </div>
                    </form>
                 </div>
            </div>
            </div>

   
            <div>
                
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>01</p>
                    </div>
                    <div>Add Tips</div>
                    <p>Create your tip and it’ll immediately be added to our “today’s tips” database for buyers to purchase.</p>
                </div>
            </div>

          
            <div>
                <div>
                    <div>
                        <div><img src="" alt="" /></div>
                    </div>
                    <div>
                        <p>Skilled bettors earn moneythrough selling tips</p>
                        <h2>Serious Tips For Serious Bettors</h2>
                        <p>You can earn an unlimited amount. bitips is full of serious bettors. Bettors who are happy to pay for tips because they know our tipsters provide a high return on investment for them. If you’re serious about your tips, you need to find the serious bettors, and bitips is the place for you</p>
                    </div>
                </div>
            </div>
        
            <div>
                <div>
                    <div>
                        <div>
                            <p>Earn a stable income with no risk</p>
                            <h2>We Want You To Succeed</h2>
                            <p>Most tip sites don’t look after their tipsters Offering tipsters less than 50% of their earnings and no assistance.we do everything we can to help you get started and attract more bettors.</p>
                            <div><span>image</span><p>We help verify your account</p></div>
                            <div><span>image</span><p>We take the smallest percentage possible.</p></div>
                            <div><span>image</span><p>We highlight high performing tipsters</p></div>
                            <div><span>image</span><p>Zero set-up or registration fee</p></div>
                            <div><span>image</span><p>24 hour support</p></div>
                        </div>
                        <div><button>Join as a Tipster</button></div>
                    </div>
                    <div>
                        <div><img src="" alt=""/></div>
                    </div>
                </div>
            </div>
            //section5
            <div>
                <p>Zero set-up or registration fee</p>
                <h2>Ready To Become A Tipster?</h2>
                <p>All you need to spend is 10 minutes of your time. If you’ve got the tips and knowledge, we’ll help you become a tip superstar who earns more than a full time living.</p>
                <div>
                    <form>
                        <div>
                            <h3>Register Now</h3>
                            <p>Start Selling Your Tips In Less Than 30 Seconds</p>
                           <div><input type="email" placeholder="Enter Your Email"/></div>
                           <div><input type="text" placeholder="User Name"/></div>
                           <div>Become a Tipster</div>
                           <p>You agree to <a href="">Tipster Terms </a> & <a href="">Privacy Policy.</a></p>

                        </div>
                    </form>
                </div>
            </div>
            //section6
            <div>
                <p>They are talking about us</p>
                <h2>Don't Take Our Word For It.</h2>
                <p>See what my customers have to say.Find out what our clients are saying below</p>
                <div>
                    <div>
                        home page Carousel
                    </div>
                     <div>
                        home page carousel
                     </div>
                </div>
            </div>
            //section7
            <div>
                <h2>Don't miss out on Fantastic News</h2>
                <p>Subscribe to our newsletter and be the first to receive news</p>
                <div><input type="email" placeholder="Enter Your Email" /></div>
            </div>
        </div>
    </div>
  )
}

export default BecomeATipster