import Amazon from "../../assets/logo-amazon.png"
import Boots from "../../assets/logo-boots.png"
import Paypal from "../../assets/logo-paypal.png"
import Ms from "../../assets/logo-ms.png"
import "./Clients.css"

const Clients = () => {
  return (
    <section id="clients">
        <h2>Earn rewards from major brands</h2>

    <div className="clientBox">
        <img src={Amazon} alt="" className="amazon" />
        <img src={Boots} alt="" className="boots"/>
        <img src={Paypal} alt="" className="paypal"/>
        <img src={Ms} alt="" className="ms"/>
    </div>

    </section>
  )
}

export default Clients