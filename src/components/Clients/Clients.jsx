import Amazon from "../../assets/logo-amazon.png";
import Boots from "../../assets/logo-boots.png";
import Paypal from "../../assets/logo-paypal.png";
import Ms from "../../assets/logo-ms.png";
import "./Clients.css";

const Clients = () => {
  return (
    <section id="clients">
      <h2>Earn rewards from major brands</h2>

      <div className="clientBox">
        <div className="amazon">
          <img src={Amazon} alt="" />
        </div>
        <div className="boots">
          <img src={Boots} alt="" className="boots" />
        </div>
        <div className="paypal">
          <img src={Paypal} alt="" className="paypal" />
        </div>
        <div className="ms">
          <img src={Ms} alt="" className="ms" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
