import {PropTypes} from 'prop-types'
import { Link } from 'react-router-dom';

const DonateCard = ({data}) => {
    const {id,picture,category,title,category_bg,card_bg,text_button_bg}=data;
    return (
        <>
           <Link to={`/home/${id}`}>
           <div style={{backgroundColor:card_bg}} className="card h-96  bg-base-100 shadow-xl ">
  <figure><img className='w-full' src={picture}  /></figure>
  <div className="card-body">
    <h2 style={{backgroundColor:category_bg,color:text_button_bg}} className="p-2 w-24 text-center rounded">
      {category}
    </h2>
   <h1 className='text-xl font-bold' style={{color:text_button_bg}}>{title}</h1>
  </div>
</div>

           </Link>
        </>
    );
};
DonateCard.propTypes={
    data:PropTypes.object
}
export default DonateCard;