import { useEffect, useState } from "react";
import { getDonationId } from "../Utilities/Donations";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";


const Statistics = () => {
    const [dataLength,setDataLength]=useState(null);
    
   console.log(dataLength);

   useEffect(()=>{
     const data=getDonationId();
     setDataLength(((data.length/12)*100));
   },[])
   const pieData = [
    { name: 'Category A', value: dataLength ,fill:"#7dd3fc" },
    { name: 'Category B', value: (100-dataLength) ,fill:"#ec4899"}
  
  ];
    return (
        <div>
        <ResponsiveContainer width="100%" height={300}>
         <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#be123c"
          label
        />
        {
            pieData.map((pie,index)=>{
       <Cell key={index} fill={pie.fill} ></Cell>
       
            })}

      </PieChart>
      </ResponsiveContainer>
      <div className="flex gap-10 justify-center">
        <p>Your Donation: <span className="bg-[#7dd3fc] p-3 rounded-full "></span></p>
        <p>Total Donation :<span className="bg-[#ec4899] p-3 rounded-full"></span></p>
      </div>
        </div>
    );
};

export default Statistics;