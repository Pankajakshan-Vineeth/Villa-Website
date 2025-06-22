import "./BestDeal.css";

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
    </div>
  );
};

export default BestDeal;
