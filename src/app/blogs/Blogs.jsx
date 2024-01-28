
import "./blogs.css";
import { Card } from "../blogs/Card";
import img1 from "../../asset/img1.jpg";
import img2 from "../../asset/img2.jpg";
import img3 from "../../asset/img3.jpg";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const Blogs = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-title">
          <h1>Why Choose CreativeZone?</h1>
          <div className="hr-line" />
        </div>
        <div className="blogs">
          <div className="blog-cards main">
            <div className="blog-card">
              <Card
                img={img1}
                title="Australia"
                details="Speak with your own voice! On our marketplaces you can maintain your
            identity, build your brand and promote your work to the community"
              />
            </div>
            <div className="blog-card">
              <Card
                img={img2}
                title="Gua"
                details="Speak with your own voice! On our marketplaces you can maintain your
            identity, build your brand and promote your work to the community"
              />
            </div>
            <div className="blog-card">
              <Card
                img={img3}
                title="France"
                details="Speak with your own voice! On our marketplaces you can maintain your
            identity, build your brand and promote your work to the community"
              />
            </div>
          <div className="blog-btn-box">
          <button className="blog-btn"><ExpandMoreOutlinedIcon/></button>
          </div>
          </div>
         
          <div className="blog-cards">
            <h1>Country Exploring rate </h1>
            <p>
              Speak with your own voice! On our marketplaces you can maintain
              your identity, build your brand and promote your work to the
              community.
            </p>
            <div className="rating-box">
            <div className="rating-bar">
              <span className="skill-bar">
                <span className="tooltip">90%</span>
              </span>
            </div>
            </div>
            <div className="rating-box">
            <div className="rating-bar ">
              <span className="skill-bar two">
                <span className="tooltip">70%</span>
              </span>
            </div>
            </div>
            <div className="rating-box">
            <div className="rating-bar ">
              <span className="skill-bar three">
                <span className="tooltip">30%</span>
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
