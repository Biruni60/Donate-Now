import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationId } from "../Utilities/Donations";
import DonationPageDetail from "../DonationPageDetail/DonationPageDetail";



const Donation = () => {
    const [dataLength,setDataLength]=useState(4);
    const datas=useLoaderData();
     const [donations,setDonations]=useState([])
    useEffect(()=>{
     const storeData=getDonationId();
     const donations=datas.filter(data=>storeData.includes(data.id));
     setDonations(donations);
    },[datas])
    
    return (
       <div>
         <div className="grid mt-10 gap-4 lg:grid-cols-2">
         {
            donations.slice(0,dataLength).map(donation=><DonationPageDetail key={donation.id} donation={donation}></DonationPageDetail>)
         }
        </div>
        <div  className={(dataLength===donations.length || donations.length===0) && 'hidden'}>
            <div className="flex justify-center mt-8">
            <button className="btn btn-accent " onClick={()=>setDataLength(donations.length)}>Show All</button>
            </div>
        </div>
       </div>
    );
};

export default Donation;