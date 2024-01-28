import Image from "next/image";
import "./blogs.css";


export const Card = ({img,title,details}) => {
  return (
    // <div className="container">
      <div className="cards">
      <div className="card">
        <div className='card-img'>
          <Image src={img}/>
        </div>
        <div className='card-title'><h4>
        {title}</h4>
        <p>{details}</p></div>
        </div>

    </div>
    // </div>
  );
};
