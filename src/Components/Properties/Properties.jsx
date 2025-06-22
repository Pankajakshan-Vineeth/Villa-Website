import property01 from "../../assets/property-01.jpg";
import property02 from "../../assets/property-02.jpg";
import property03 from "../../assets/property-03.jpg";
import property04 from "../../assets/property-04.jpg";
import property05 from "../../assets/property-05.jpg";
import property06 from "../../assets/property-06.jpg";
const Properties = () => {
  return (
    <div className="property-container">
      <div className="property-text">
        <h3>| PROPERTIES</h3>
        <h1>We Provide The Best Property You Like</h1>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={property01} alt="" />
          <div class="property-header">
            <span class="badge">Apartment</span>
            <span class="price">$584.500</span>
          </div>

          <h2 class="address">12 New Street Miami, OR 12650</h2>
          <div class="info">
            <p>
              <strong>Bedrooms:</strong> 4
            </p>
            <p>
              <strong>Bathrooms:</strong> 3
            </p>
            <p>
              <strong>Area:</strong> <span class="highlight">125m2</span>
            </p>
            <p>
              <strong>Floor:</strong> 25th
            </p>
            <p>
              <strong>Parking:</strong> <span class="highlight">2 cars</span>
            </p>
          </div>
          <button class="visit-btn">Schedule a visit</button>
        </div>
        <div className="card">
          <img src={property02} alt="" />
        </div>
        <div className="card">
          <img src={property03} alt="" />
        </div>
        <div className="card">
          <img src={property04} alt="" />
        </div>
        <div className="card">
          <img src={property05} alt="" />
        </div>
        <div className="card">
          <img src={property05} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Properties;
