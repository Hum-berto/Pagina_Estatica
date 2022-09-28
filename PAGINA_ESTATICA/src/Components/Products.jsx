import "../assets/StyleSheets/Products.css";
function Products(props) {

    return (
                    <div className="card">
                        <img src={props.product.img} alt="" />
                        <h1 className="name">{props.product.name}</h1>
                        <h1 className="price">{props.product.price}</h1>
                        <p className="description">{props.product.description}</p>
                        <button className="boton" type="button">Comprar</button>
                    </div>
    );

}

export default Products;