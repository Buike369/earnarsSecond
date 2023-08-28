import React,{useState} from 'react'
import "./style/newProfile.css"
import Footer from "./footer"

const ProfilePage = () => {
    const[borderLine,setBorderLine] = useState("boTP")
 const [sectionChange,setSectionChange] = useState("tips")
    const  tipDetails = [{name:"Tips",value:"2,633"},{name:"Wins",value:"1,740"},{name:"Profit",value:"+575.06"},{name:"Draw",value:"99"},{name:"Win Rate",value:"66%"},{name:"ROI",value:"21.8%"}]
 const rent = [{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"}]
 const rent1 = [{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"},{name:"king",follower:"40",following:"78"}]

  return (
    <div style={{marginTop:"70px"}}>
<div className='ParentDivNewHod'>
    <div className='tipsterProfile'>
        Tipster Profile
    </div>


 

        <div className='profileCoverDiv'>
            <div><img src="/img/tom.png" alt="" className='Kn1'/></div>
            {/* <div className="point">
                <img src="/img/picMan.png" alt="" className="ImgPicMan"/>
                <img src="/img/picManImg.png" alt="" className="ImgPicMan1"/>
            </div> */}
            <div className='holder7'> 
                <div className='holder2'>
                    <div className="point">
                        <img src="/img/picMan.png" alt="" className="ImgPicMan"/>
                         <img src="/img/picManImg.png" alt="" className="ImgPicMan1"/>
                    </div>
                    <div>
                        <div className='AmosD'>
                            <p className='namePad'>Amos Rios</p>
                            <img src="/img/iconGuide.png" alt="" className='holder3' />
                              <img src="/img/usaFlag.png" alt="" className='holder3'/>
                        </div>
                         <div className='AmosD'>
                            <img src="/img/calendar.png" alt="" className='holder4'/>
                            <p className='holder5'>Joined Jan, 2017</p>
                         </div>
                     
                    </div>
                </div>
                <div className='AmosD holder8' >
                    <div><button className='holder6 holder5'>Subscribe From</button></div> 
                       <div><button  className='holder6 holder5'>Follow</button></div>
                </div>
            </div>

            <div className='holder7 holder8 msg1' >
                {tipDetails.map((app,id)=>(
                <div key={id} className="msg">
                    <p className='msg3'>{app.value}</p>
                    <p className='msg4'>{app.name}</p>
                </div>
                ))}
            </div>
            <div className='AmosD'>
                <div className={sectionChange === "tips" ? `AmosD IP1 ${borderLine}` : "AmosD IP1"} onClick={()=>setSectionChange("tips")}>
                  <img src="/img/tips.png" alt=""/>
                  <p className='IP holder3'>Tips</p>
                </div>
                  <div className={sectionChange ? 'AmosD IP1' : "AmosD IP1"} onClick={()=>setSectionChange("tips2")}>
                  <img src="/img/statistics.png" alt=""/>
                  <p className='IP holder3'>Statistics</p>
                </div>
                  <div className={sectionChange ==="tips1" ? `AmosD IP1  ${borderLine}`  : "AmosD IP1"} onClick={()=>setSectionChange("tips1")}>
                  <img src="/img/followerSecond.png" alt=""/>
                  <p className='IP holder3'>Followers (2400)</p>
                </div>
                  <div className={sectionChange === "tips3" ? `AmosD IP1 ${borderLine} ` : "AmosD IP1"} onClick={()=>setSectionChange("tips3")} >
                  <img src="/img/followingSecond.png" alt=""/>
                  <p className='IP holder3'>Following (240)</p>
                </div>
            </div>
        </div>
 {/* section for tips */}

    <div className="Above">
        {/* //change here */}
              <div className='pro1'>
        {/* // sect 1 change */}
        {(sectionChange === "tips") ? 
        <div>
            <div className='AmosD'>
                <div><button className=' holder6 AC'>Active Tips</button></div>
                   <div><button className=' holder6 AC'>Finished Tips</button></div>
            </div>
            <div>
            <p className='Oct'>28th Oct 2021</p>
            <div className='pay3 typo' >
                <div >
                    <div className='AmosD doM' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'>ENGLAND Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IP gameP'>Middlesbrough FC v Peterborough United</p>
                </div>
                  <div>
                    <div><button className='Tact'>Active Tip</button></div>
                    <div><button>image</button></div>
                  </div>
            </div>
               <div className='pay3 typo' >
                <div >
                    <div className='AmosD doM' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'>ENGLAND Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IP gameP'>Middlesbrough FC v Peterborough United</p>
                </div>
                  <div>
                    <div><button className='Tact'>Active Tip</button></div>
                    <div><button>image</button></div>
                  </div>
            </div>
               <div className='pay3 typo' >
                <div >
                    <div className='AmosD doM' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'>ENGLAND Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IP gameP'>Middlesbrough FC v Peterborough United</p>
                </div>
                  <div>
                    <div><button className='Tact'>Active Tip</button></div>
                    <div><button>image</button></div>
                  </div>
            </div>
               <div className='pay3 typo' >
                <div >
                    <div className='AmosD doM' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'>ENGLAND Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IP gameP'>Middlesbrough FC v Peterborough United</p>
                </div>
                  <div>
                    <div><button className='Tact'>Active Tip</button></div>
                    <div><button>image</button></div>
                  </div>
            </div>
               <div className='pay3 typo' >
                <div >
                    <div className='AmosD doM' >
                        <img src="/img/fengland.png" alt="" />
                        <p className='holder5'>ENGLAND Premier League, 15:30 GMT +0</p>
                    </div>
                    <p className='IP gameP'>Middlesbrough FC v Peterborough United</p>
                </div>
                  <div>
                    <div><button className='Tact'>Active Tip</button></div>
                    <div><button>image</button></div>
                  </div>
            </div>
            </div>
        </div> 
        :""}

        {/* // sect 2 change */}
         {(sectionChange === "tips1") ? 
        <div>
                 <div className='follower2h'>
              {rent1.map((app,id)=>( 
         <div className="cardProfileDiv TY Fad"  style={{border:"1px solid rgb(61 62 126)"}} key={id}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1 jike"/></div>
          <div className="donKing donKing4">Chukwubuike </div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
          <div className="houseRuMM Fad1">Unfollow</div>
        </div>
        ))}  

            </div>

        </div>
          :""}
    
               {(sectionChange === "tips3") ? 
        <div>
            <div className='follower2h'>
              {rent.map((app,id)=>( 
         <div className="cardProfileDiv TY Fad"  style={{border:"1px solid rgb(61 62 126)"}} key={id}>
          <div className="catImgDivProfile"><img src="/img/kucoin.png" alt="" style={{width:"100%",height:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></div>
           <div className="imgcardPic"><img src="/img/create.png" alt="" className="catImgDivProfile1 jike"/></div>
          <div className="donKing donKing4">Chukwubuike </div>
          <div className="ipconFig">
            <div>
              <div className="imgWay">
                <div><img src="/img/followers.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp" >Followers</p>
                </div>
              </div>
            </div>
             <div>
               <div className="imgWay" >
                <div><img src="/img/following.png" alt=""/></div>
                <div>
                  <p className="followerp1">24k</p>
                  <p className="followerp">Following</p>
                </div>
              </div>
             </div>
          </div>
          <div className="houseRuMM Fad1">Follow</div>
        </div>
        ))}  
            </div>

        </div>
            :""}

            </div>
     


          <div className='pro2'>
          
            <div>
                <form>
                    <div className='pay1'>
                        <p className='pay2'>Subscribe To This Tipster</p>
                        <div className='pay3'>
                            <div className='pay4 pay5'>
                                <div></div>
                                <div className='pay6'>1 Day <span className='pay7'>$1900</span></div>
                            </div>
                             <div className='pay4 pay5'>
                                <div className=''></div> 
                                <div className='pay6'>7 Day <span className='pay7'>$1900</span></div>
                             </div>
                        </div>
                        <div className='pay8'></div>
                        <p className='pay9'>Payment method</p>

                    
                        <div className='pay3 pay10'>
                            <div className="pay4">
                                <div className='pay6'>.</div>
                                <p className='pay6'>Card</p>
                            </div>
                             <div>
                                <img src="/img/visa.png" alt="" />
                                 <img src="/img/mastercard.png" alt="" />
                                  {/* <img src="/img/" alt="" /> */}
                             </div>
                        </div>
                    
                    <div className='pay3 pay10'>
                            <div className="pay4">
                                <div className='pay6'>.</div>
                                <p className='pay6'>Bitcoin</p>
                            </div>
                             <div>
                                <img src="/img/bitcoin.png" alt="" />
                                
                             </div>
                        </div>
                        <div className='pay3 pay10'>
                            <div className="pay4">
                                <div className='pay6'>.</div>
                                <p className='pay6'>Paypal</p>
                            </div>
                             <div>
                                <img src="/img/paypal.png" alt="" />
                                
                             </div>
                       
                          
                        </div>
                    
                        <div className='pay11'>
                            Buy Now
                        </div>
                    </div>
                </form>
            </div>
          
            <div className='pay12 pay4'>
                <div><img src="/img/subscribers-icon.png" alt="" /></div>
                  <div className='pay14'>
                    <p className='pay6 pay15'>2400</p>
                     <p className='pay13'>Subscribers</p>
                  </div>
            </div>
          </div>

   </div>
</div>
 <div style={{padding:"0 10px"}}>
                <div className="MessageDivCov">
               <div className="Package_Up">
                   <h1 className="alap">Don't miss out on Fantastic News</h1>
                   <p className="Each_Time_your">
                       Subscribe to our newsletter and be the first to receive news.
                   </p>
                   <form>
                    <div className="newsInput">
                        <input type="email" placeholder="Enter Your Email"  className="newsBro"/>
                    </div>
                   </form>
                   <img src="/img/news.svg" alt=""  className="messageImg"/>
               </div>
               <img src="/img/undrawWorld1.svg" alt="" className="papag" />
                <img src="/img/undrawWorld1.svg" alt="" className="papag1" />
               
               </div>
               </div>
<Footer/>

            </div>
  )
}

export default ProfilePage