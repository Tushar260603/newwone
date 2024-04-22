import React from 'react';
import imgg from "./assets/image1.png"
import imgg2 from "./assets/image2.png"
import imgg3 from "./assets/image.png"
import health from "./assets/healthy-heart.png"
import skin from "./assets/skincare.png"
import immune from "./assets/immunity.png"
import hair from "./assets/hair.png"
import Home from "./assets/home.png"
import girl2 from "./assets/girl2.png"
import { FiFacebook } from "react-icons/fi";
import { RiInstagramLine, RiYoutubeFill } from "react-icons/ri";

import { AiOutlineYoutube } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
const Login = () => {
  return (
    <>
    <div>
      <nav className="bg-[#FFF7E2] flex justify-between px-20 items-center p-5">
          <div>
            <h1 className="text-3xl text-[#3A643B] tracking-widest font-semibold">
              AMRUTAM
            </h1>
          </div>
          <div className="flex text-md justify-start gap-4">
            <button className="text-[#474747]">Home</button>
            <button className="text-[#3A643B] font-bold">Find Doctors</button>
            <button className="text-[#474747]">About Us</button>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 ring-1 undefined ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
              Login
            </button>
            <button className="px-4 py-1.5 ring-1 bg-[#3A643B] text-white ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
              Sign-Up
            </button>
          </div>
        </nav>
  




    </div>
   <div>
    <img  src={imgg} alt='' className='im'     />
    <img src={imgg2} alt='' className='im2'    />
 
   <div className='cont'>
   <img src={imgg3} alt='' className='im3'   />

<div className='contt'>

<div>
    <div className='kin'>
    <h1 style={{fontFamily:"cursive",fontWeight:"bold"}}>Dr.Bruce Willis</h1>
<span className='gre' style={{fontFamily:"unset",fontWeight:"640",fontSize:"16px"}} >Gynecologist</span>
    </div>

<h1 className='gre2'>4.2 <span>⭐️⭐️⭐️⭐️</span></h1>
</div>

<div>
    <span className='gre' style={{fontFamily:"unset",fontWeight:"640",fontSize:"16px"}}>Followers</span>
    <h1 style={{fontWeight:"bold"}}>850</h1>
</div>

<div>

<span className='gre' style={{fontFamily:"unset",fontWeight:"640",fontSize:"16px"}}>Following</span>
    <h1 style={{fontWeight:"bold"}}>18K</h1>
</div>

<div>

<button className="px-4 py-1.5 ring-1 bg-[#3A643B] text-white ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
              Book an Appointment
            </button>
</div>

</div>




   </div>
   </div>

   <div>
    <div>
        <div className='first'>

        <header className="header">
           <div className="header__title" >A Little About me</div>
           <div className="header__social">Follow +</div>
       </header>
<div className='paragraph'>
<p class="content__paragraph" style={{fontFamily:"cursive"}}>Hello I am Dr. Bruce Willis a Gynecologist in Sanjivini Hospital Surat. love to work with all my hospital staff and senior doctors. Completed my graduation in Gynecologist Medicine </p>

</div>
<div className='king'><span>_________________________________________________ </span><h1> Read More</h1></div>
 
<div className='languages'>
    <h1 style={{fontFamily:"cursive",fontWeight:"bold"}}>Language Spoken</h1>
    <div className='languages__language'>English</div>
    <div className='languages__language'>Hindi</div>
    <div className='languages__language'>Telugu</div>

</div>
<div className='ic'>
<div className='ic1'><FiFacebook /></div>
<div className='ic1'><RiInstagramLine /></div>
<div className='ic1'><AiOutlineYoutube /></div>
<div className='ic1'><SlSocialTwitter /></div>
</div>
        </div>


            <div className='first'>

        <header className="header">
           <div className="header__title" >I Specialize In</div>
    
       </header>


<div style={{display:"flex",justifyContent:"space-evenly" ,marginRight:"5%"}}>


<div className='sec'>
<div className='sec1p'>
    <div className='sec1pc'>
    <div className='sec1' >
<img src={health} style={{background:"#fffcf2"}}   alt=''  />
</div>
    </div>
    
</div>

</div>

<div className='sec'>
<div className='sec1p'>
    <div className='sec1pc'>
    <div className='sec1' >
<img src={skin} style={{background:"#fffcf2"}}   alt=''  />
</div>
    </div>
    
</div>

</div>

<div className='sec'>
<div className='sec1p'>
    <div className='sec1pc'>
    <div className='sec1' >
<img src={immune} style={{background:"#fffcf2"}}   alt=''  />
</div>
    </div>
    
</div>

</div>

<div className='sec'>
<div className='sec1p'>
    <div className='sec1pc'>
    <div className='sec1' >
<img src={hair} style={{background:"#fffcf2"}}   alt=''  />
</div>
    </div>
    
</div>

</div>



</div>
<div style={{display:"flex",justifyContent:"space-evenly",marginTop:"-8%",marginBottom:"5%",marginRight:'5%'}}>
<h1 style={{fontFamily:"cursive",fontWeight:"bold",marginLeft:"-4%"}}>Women's Health
</h1>
<h1 style={{fontFamily:"cursive",fontWeight:"bold",marginLeft:"-4%"}}>Skin Care
</h1>
<h1 style={{fontFamily:"cursive",fontWeight:"bold"}}>Immunity
</h1>
<h1 style={{fontFamily:"cursive",fontWeight:"bold",marginRight:"-4%"}}>Hair Care
</h1>
</div>




        </div>


          <div className='first'>

        <header className="header">
           <div className="header__title" >The Concerns I Treat</div>
         
       </header>
       <div className='languages1'>
   
    <div className='languages__language1' style={{marginBottom:"3%"}}>  <span className='gre1' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px",marginBottom:"3%"}}>Skin Treatment</span></div>
    <div className='languages__language1' style={{marginBottom:"3%"}}>  <span className='gre1' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px"}}>Pregnancy</span></div>
    <div className='languages__language1' style={{marginBottom:"3%"}}>  <span className='gre1' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px"}}>Period Doubts</span></div>
    <div className='languages__language1' style={{marginBottom:"3%"}}>  <span className='gre1' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px"}}>Endometriosis</span></div>
    <div className='languages__language1' style={{marginBottom:"3%"}}>  <span className='gre1' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px"}}>Pelvic Pain</span></div>
    <div className='languages__language1' style={{marginBottom:"3%",marginLeft:"-3%"}}>  <span className='gre1' style={{fontFamily:"unset",fontWeight:"640",fontSize:"14px"}}>Ovarian Cysts</span></div>
    <div className='languages__languag' style={{marginBottom:"3%",marginRight:"6%"}}>          <div className="header__social">+5 More</div></div>
 
   
    
</div>

        </div>


        <div className='first'>

<header className="header">
   <div className="header__title" >My Work Experience</div>
   
</header>
<div>
<h1 style={{color:'#3a643b',fontWeight:"bold",marginTop:"4%",marginRight:"36%",marginBottom:"0%"}}>I HAVE BEEN IN PRACTICE FOR : 7+ YEARS</h1>
<span style={{color:"#858585d6",marginLeft:"-20%",marginBottom:"10%"}}>_________________________________________________</span>
<div>

<img alt='' src={Home}  style={{width:"8%",marginLeft:"5%",marginBottom:'5%',marginTop:"4%"}}   />
<div>
   <h1 style={{fontFamily:"cursive",fontWeight:"bold",marginTop:"-12%",marginBottom:"12%",marginLeft:"-26%"}}>Midtown Medical Clinic</h1>
   <h1 style={{color:"#858585d6",fontWeight:"bold",marginTop:"-11%",marginBottom:"12%",marginLeft:"-26%"}}>Senior Doctor</h1>
   <h1 style={{color:"#858585d6",marginTop:"-20.5%",marginBottom:"12%",marginLeft:"59%",fontSize:"94%"}}>2016-PRESENT</h1>
</div>
<img alt='' src={Home}  style={{width:"8%",marginLeft:"5%",marginBottom:'5%'}}   />
<div>
   <h1 style={{fontFamily:"cursive",fontWeight:"bold",marginTop:"-14%",marginBottom:"12%",marginLeft:"-26%"}}>Midtown Medical Clinic</h1>
   <h1 style={{color:"#858585d6",fontWeight:"bold",marginTop:"-11%",marginBottom:"12%",marginLeft:"-26%"}}>Senior Doctor</h1>
   <h1 style={{color:"#858585d6",marginTop:"-20.5%",marginBottom:"12%",marginLeft:"59%",fontSize:"94%"}}>2010-2015</h1>
</div>
</div>
</div>
<div></div>

</div>


         <div className='first'>

        <header className="header">
           <div className="header__title" >Featured Reviews (102) </div>
           
       </header>
<div>
    
    <div style={{background:"#f7f7fc"}}>

        <img alt='' src={girl2}  style={{width:"11%",marginLeft:"13%",marginBottom:'3%',marginTop:"4%"}}   />
        <div>
           <h1 style={{fontFamily:"cursive",fontWeight:"bold",marginTop:"-12%",marginBottom:"12%",marginLeft:"-26%"}}>Alicent Hightower</h1>
           <h1 style={{color:"#858585d6",fontWeight:"500",marginTop:"-11%",marginBottom:"12%",marginLeft:"-22%"}}>Consulted for Skin care</h1>
           <h1 style={{color:"#858585d6",marginTop:"-19.5%",marginBottom:"14%",marginLeft:"59%",fontSize:"94%"}}>20 January 2023 </h1>
           <h1 style={{color:"#858585d6",fontWeight:"500",marginTop:"-13%",marginBottom:"12%",marginLeft:"-52%"}}><h1 className='gre2'><span>⭐️⭐️⭐️⭐️</span></h1></h1>
           <h1 style={{fontFamily:"cursive",marginTop:"-12%",marginBottom:"12%",marginLeft:"-10%",fontSize:"90%"}}>Might be bit early to confirm but yes I can see noticeable difference</h1>
           <h1 style={{fontFamily:"cursive",marginTop:"-12%",marginBottom:"7%",marginLeft:"-10%",fontSize:"90%"}}>in my hairfall will write again after using it for longer periods</h1>
        </div>
        
    </div>
    <div style={{background:"#f7f7fc"}}>

<img alt='' src={girl2}  style={{width:"11%",marginLeft:"13%",marginBottom:'3%',marginTop:"4%"}}   />
<div>
   <h1 style={{fontFamily:"cursive",fontWeight:"bold",marginTop:"-12%",marginBottom:"12%",marginLeft:"-26%"}}>Alicent Hightower</h1>
   <h1 style={{color:"#858585d6",fontWeight:"500",marginTop:"-11%",marginBottom:"12%",marginLeft:"-22%"}}>Consulted for Skin care</h1>
   <h1 style={{color:"#858585d6",marginTop:"-19.5%",marginBottom:"14%",marginLeft:"59%",fontSize:"94%"}}>20 January 2023 </h1>
   <h1 style={{color:"#858585d6",fontWeight:"500",marginTop:"-13%",marginBottom:"12%",marginLeft:"-52%"}}><h1 className='gre2'><span>⭐️⭐️⭐️⭐️</span></h1></h1>
   <h1 style={{fontFamily:"cursive",marginTop:"-12%",marginBottom:"12%",marginLeft:"-10%",fontSize:"90%"}}>Might be bit early to confirm but yes I can see noticeable difference</h1>
   <h1 style={{fontFamily:"cursive",marginTop:"-12%",marginBottom:"10%",marginLeft:"-10%",fontSize:"90%"}}>in my hairfall will write again after using it for longer periods</h1>
</div>

</div>
</div>
<div></div>

        </div>
    </div>

    <div></div>

    
   </div>
    </>
  );
};

export default Login;