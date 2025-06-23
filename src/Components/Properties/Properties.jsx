import property01 from "../../assets/property-01.jpg";
import property02 from "../../assets/property-02.jpg";
import property03 from "../../assets/property-03.jpg";
import property04 from "../../assets/property-04.jpg";
import property05 from "../../assets/property-05.jpg";
import property06 from "../../assets/property-06.jpg";
import "./Properties.css";
 
const Properties = () => {
  return (
    <div className="property-container">
      <div className="property-text">
        <h3>| PROPERTIES</h3>
        <h1>
          We Provide The Best <br />
          Property You Like
        </h1>
      </div>
      <div className="card-container">
        <div className="cards">
          <img src={property01} alt="" className="property-image" />

          <div class="property-header">
            <span class="badge">Luxury Villa</span>
            <span class="price">$2.264.000</span>
          </div>

          <h3 class="address">12 New Street Miami, OR 12650</h3>

          <div class="info">
            <p>
              <strong>Bedrooms:</strong> 4{" "}
              <span className="bathroom">
                <strong>Bathroom</strong> :8
              </span>
            </p>
            <p>
              <strong>Area:</strong>{" "}
              <span class="highlight">
                125m2 <strong className="bathroom">Floor:</strong> 25th{" "}
                <strong className="bathroom">Parking:</strong>{" "}
                <span class="highlight">2 cars</span>
              </span>
            </p>
          </div>

          <button class="visit-btn">Schedule a visit</button>
        </div>
        <div className="cards">
          <img src={property02} alt="" className="property-image" />
          <div class="property-header">
            <span class="badge">Luxury Villa</span>
            <span class="price">$2.264.000</span>
          </div>
          <h3 class="address">12 New Street Miami, OR 12650</h3>
          <div class="info">
            <p>
              <strong>Bedrooms:</strong> 4{" "}
              <span className="bathroom">
                <strong>Bathroom</strong> :8
              </span>
            </p>
            <p>
              <strong>Area:</strong>{" "}
              <span class="highlight">
                125m2 <strong className="bathroom">Floor:</strong> 25th{" "}
                <strong className="bathroom">Parking:</strong>{" "}
                <span class="highlight">2 cars</span>
              </span>
            </p>
          </div>

          <button class="visit-btn">Schedule a visit</button>
        </div>
        <div className="cards">
          <img src={property03} alt="" className="property-image" />
          <div class="property-header">
            <span class="badge">Luxury Villa</span>
            <span class="price">$2.264.000</span>
          </div>
          <h3 class="address">12 New Street Miami, OR 12650</h3>
          <div class="info">
            <p>
              <strong>Bedrooms:</strong> 4{" "}
              <span className="bathroom">
                <strong>Bathroom</strong> :8
              </span>
            </p>
            <p>
              <strong>Area:</strong>{" "}
              <span class="highlight">
                125m2 <strong className="bathroom">Floor:</strong> 25th{" "}
                <strong className="bathroom">Parking:</strong>{" "}
                <span class="highlight">2 cars</span>
              </span>
            </p>
          </div>

          <button class="visit-btn">Schedule a visit</button>
        </div>
        <div className="cards">
          <img src={property04} alt="" className="property-image" />
          <div class="property-header">
            <span class="badge">Luxury Villa</span>
            <span class="price">$2.264.000</span>
          </div>
          <h3 class="address">12 New Street Miami, OR 12650</h3>
          <div class="info">
            <p>
              <strong>Bedrooms:</strong> 4{" "}
              <span className="bathroom">
                <strong>Bathroom</strong> :8
              </span>
            </p>
            <p>
              <strong>Area:</strong>{" "}
              <span class="highlight">
                125m2 <strong className="bathroom">Floor:</strong> 25th{" "}
                <strong className="bathroom">Parking:</strong>{" "}
                <span class="highlight">2 cars</span>
              </span>
            </p>
          </div>

          <button class="visit-btn">Schedule a visit</button>
        </div>
        <div className="cards">
          <img src={property05} alt="" className="property-image" />
          <div class="property-header">
            <span class="badge">Luxury Villa</span>
            <span class="price">$2.264.000</span>
          </div>
          <h3 class="address">12 New Street Miami, OR 12650</h3>
          <div class="info">
            <p>
              <strong>Bedrooms:</strong> 4{" "}
              <span className="bathroom">
                <strong>Bathroom</strong> :8
              </span>
            </p>
            <p>
              <strong>Area:</strong>{" "}
              <span class="highlight">
                125m2 <strong className="bathroom">Floor:</strong> 25th{" "}
                <strong className="bathroom">Parking:</strong>{" "}
                <span class="highlight">2 cars</span>
              </span>
            </p>
          </div>

          <button class="visit-btn">Schedule a visit</button>
        </div>
        <div className="cards">
          <img src={property06} alt="" className="property-image" />
          <div class="property-header">
            <span class="badge">Luxury Villa</span>
            <span class="price">$2.264.000</span>
          </div>
          <h3 class="address">12 New Street Miami, OR 12650</h3>
          <div class="info">
            <p>
              <strong>Bedrooms:</strong> 4{" "}
              <span className="bathroom">
                <strong>Bathroom</strong> :8
              </span>
            </p>
            <p>
              <strong>Area:</strong>{" "}
              <span class="highlight">
                125m2 <strong className="bathroom">Floor:</strong> 25th{" "}
                <strong className="bathroom">Parking:</strong>{" "}
                <span class="highlight">2 cars</span>
              </span>
            </p>
          </div>

          <button class="visit-btn">Schedule a visit</button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
