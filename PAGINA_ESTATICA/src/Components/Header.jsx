import "../assets/StyleSheets/Header.css";
import Img from "../Img/volovan.jpg";
import Products from "./Products";

function Header() {

    const products = [
        {
            img: Img,
            name: "Volovan Choriqueso",
            price: "20",
            description: "El mejor volovoan de mexico ajuaa",
        },
        {
            img: Img,
            name: "Volovan Hawoiano",
            price: "20",
            description: "El mejor volovan de mexico ajuaa",
        },
        {
            img: Img,
            name: "Volovan Tradicional",
            price: "20",
            description: "El mejor volovan de mexico ajuaa",
        },
    ];

    return (
        <div className="Base">

            <div className="Header-prod">
            <div id="lines" className="btn"></div>

            <input type="search" placeholder="Search" id="Buscador" />

                <div className="title">
                    <h1 className="title-name">LOS ESGUT</h1>
                </div>
            </div>

            <div className="first">
                <div className="box-products">
                    {products.map((product) => {
                        return <Products product={product}/>;
                    })}
                </div>
            </div>
        </div>
    )

}

export default Header;