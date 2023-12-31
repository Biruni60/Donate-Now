
import {PropTypes} from 'prop-types'
const Banner = ({handleSubmit}) => {
    return (
        <div >
        <div className="opacity-20">
           <img src="https://i.ibb.co/P9LKSHx/2210-q702-010-S-m005-c12-charity.jpg" alt="" />
        </div>
        <div className="text-center absolute  -mt-52 md:-mt-60 md:ml-20 lg:-mt-96 lg:ml-80">
            <h2 className="text-4xl font-bold mb-10">I Grow By Helping People In Need</h2>
            <form onSubmit={handleSubmit}>
            <input className="border-2 w-1/2 h-12 border-r-0 rounded-l-lg placeholder:pl-3" type="text" placeholder="Search here..." name='name' />
            <input className="bg-red-400 p-3 rounded-r-lg " type="submit" value="Search" />
            </form>
        </div>
        </div>
    );
};
Banner.propTypes={
    handleSubmit:PropTypes.function
}
export default Banner;