import "./BestDeal.css";
import property05 from "../../assets/property-05.jpg";

const BestDeal = () => {
  return (
    <div className="best-deal-container">
      <div className="deal-container">
        <div className="deal-text-container">
          <h4>| BEST DEAL</h4>
          <h1>Find Your Best Deal Right Now!</h1>
        </div>
        <div className="deal-button-container"></div>
        <button className="property-button active">Apartment</button>
        <button className="property-button">Villa House</button>
        <button className="property-button">PentHouse</button>
      </div>
      <div className="extra-info-container">
        <div className="details-container">
          <div className="card">
            <div className="small-text">
              <p>Total Flate Space</p>
              <p>Floor Number</p>
              <p>Number of rooms</p>
              <p>Parking Available</p>
              <p>Payment Process</p>
            </div>
            <div className="measurement">
              <h2>185 m2</h2>
              <h2>26th</h2>
              <h2>4</h2>
              <h2>Yes</h2>
              <h2>Bank</h2>
            </div>
          </div>

          <div className="image-containerr">
            <img src={property05} alt="" className="sofa-image" />
          </div>
          <div className="extra-info">
            <h3>Extra Info About Property</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
              eiusmod tempor pack incididunt ut labore et dolore magna aliqua
              quised ipsum suspendisse.
            </p>
            <p>
              When you need free CSS templates, you can simply type TemplateMo
              in any search engine website. In addition, you can type TemplateMo
              Portfolio, TemplateMo One Page Layouts, etc.
            </p>
            <button>Schedule a Visit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
