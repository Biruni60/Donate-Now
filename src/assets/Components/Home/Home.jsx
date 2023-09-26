import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import DonateCard from "../donateCard/DonateCard";


const Home = () => {
    const [datas,setDatas]=useState([]);
    useEffect(()=>{
    fetch("donation.json")
    .then(res=>res.json())
    .then(data=>setDatas(data))
    },[])
    return (
        <div>
           <Banner></Banner>
           <div className="grid gap-4 mt-20 mx-2 md:grid-cols-2 lg:grid-cols-4">
           {
            datas.map(data=><DonateCard key={data.id} data={data}></DonateCard>)
           }
           </div>
        </div>
    );
};

export default Home;