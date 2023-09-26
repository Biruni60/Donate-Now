import { useLoaderData, useParams } from "react-router-dom";


const DonationDetail = () => {
    const datas=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id)
    const data=datas.find(data=>data.id===idInt);
    
    
    return (
        <div>
          <div className="card">
  <figure className="px-10 pt-10">
    <img src={data.picture} className="rounded-xl w-full" />
  </figure>
  
  <div className="card-body ">
  <div className="p-6 mx-2 -mt-32 rounded-b-xl" style={{backgroundColor:"rgba(0,0,0,0.3)"} }>
   <button className="p-2 rounded text-xl" style={{backgroundColor:data.text_button_bg}}>Donate ${data.price}</button>
  </div>
    <h3 className="text-4xl font-bold pb-2 mt-2">{data.title}</h3> 
    <p>{data.description}</p>
  </div>
</div>  
        </div>
    );
};

export default DonationDetail;