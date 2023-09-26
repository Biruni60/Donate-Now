import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import DonateCard from "../donateCard/DonateCard";


const Home = () => {
    const [datas,setDatas]=useState([]);
    const [displayData,setDisplayData]=useState([]);
    useEffect(()=>{
        setDisplayData(datas);
    },[datas])
    useEffect(()=>{
    fetch("donation.json")
    .then(res=>res.json())
    .then(data=>setDatas(data))
    },[])
    const handleSubmit=(e)=>{
     e.preventDefault();
     const subData=e.target.name.value;
    
     const foodDoner=datas.filter(data=>data.category===subData);
     if (foodDoner.length>0){
        setDisplayData(foodDoner);
     }
     else{
       setDisplayData(datas);
       alert("Not Found")
     }
    
 
     
     
    }
   
    return (
        <div>
           <Banner handleSubmit={handleSubmit}></Banner>
           <div className="grid gap-4 mt-20 mx-2 md:grid-cols-2 lg:grid-cols-4">
           {
            displayData.map(data=><DonateCard key={data.id} data={data}></DonateCard>)
           }
           </div>
        </div>
    );
};

export default Home;