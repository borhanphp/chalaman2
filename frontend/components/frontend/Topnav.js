import Link from "next/link";
import styled from "styled-components";


const Wrapper = styled.div`
    margin-left: 0px;
    margin-right: 0px;
    height: 35px;
    display:flex;
    border-bottom: 1px solid #C0C0C0;
    font-size: 14px;
`;

const Dateset = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-aligh: center;
    margin-left: 17px;
    font-weight: bold;
    background-color: #F8F8FF;
`;

const Topmid = styled.div`
    flex: 4;
    display:flex;
    align-items: center;
    margin-left: 10px;
    font-weight: bold;
    color: #4682B4;
`;

const Socialmini = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 17px;
`;

const Topnav = () => {
   
    const monthNames = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন","জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বার", "ডিসেম্বর"];
    const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    
    let today = new Date();
    let date =''+''+today.getDate()+'-'+monthNames[(today.getMonth())]+'-'+today.getFullYear();
    let dayName = days[today.getDay()];


   
  return (
    
      <>
        <Wrapper>
            
                <Dateset>
                    {dayName},&nbsp;&nbsp;{date} 
                </Dateset>
                      
                <Topmid>
                    <Link href="/about">আমাদের সম্পর্কে</Link>&nbsp;&nbsp;&nbsp;
                    <Link href="/contact">যোগাযোগ</Link>
                </Topmid>

                <Socialmini>
                    <Link href="https://facebook.com"><i class="fab fa-facebook"></i></Link>&nbsp;&nbsp;&nbsp;
                    <Link href="/about"><i class="fab fa-twitter"></i></Link>&nbsp;&nbsp;&nbsp;
                    <Link href="/about"><i class="fab fa-1x fa-youtube"></i></Link>
                </Socialmini>
               
        </Wrapper>
      </>
  );
};

export default Topnav;
