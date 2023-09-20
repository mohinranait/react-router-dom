import { useLoaderData } from "react-router-dom";
import ProductCart from "./ProductCart";

const Products = () => {

    const {products} = useLoaderData();
 
    return (
        <section className="py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-5">
                    {
                        products.map(product => <ProductCart key={product.id} product={product}></ProductCart> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;