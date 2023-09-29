
import {PropTypes} from 'prop-types'
const DonationPageDetail = ({donation}) => {
    const{picture,category,title,price,category_bg,card_bg,text_button_bg}=donation;
    return (
        <div>
           <div style={{backgroundColor:card_bg}} className="card card-side mx-2 shadow-xl h-80">
  <figure className='w-1/2'><img className="w-full h-full" src={picture}/></figure>
  <div className="card-body w-1/2 justify-center gap-3">
    <h2 style={{backgroundColor:category_bg,color:text_button_bg}} className="p-2 w-24 text-center rounded">{category}</h2>
    <h2 className='text-2xl font-bold'>{title}</h2>
    <h1 className='font-bold' style={{color:text_button_bg}}>${price}</h1>
    <div className="card-actions ">
      <button className='text-white p-3 rounded-lg font-semibold' style={{backgroundColor:text_button_bg}}>View Details</button>
    </div>
  </div>
</div> 
        </div>
    );
};
DonationPageDetail.propTypes={
    donation:PropTypes.object
}
export default DonationPageDetail;