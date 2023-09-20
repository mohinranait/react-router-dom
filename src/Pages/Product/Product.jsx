
import { useLoaderData, useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate();
    const product = useLoaderData();
    const {title,images,thumbnail,rating,price,stock,brand,category} = product;

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <section className='py-8'>
            <div className="container mx-auto">
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-5'>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={thumbnail} alt=""/>
                            </div>
                            <div className="grid grid-cols-5 gap-4">
                                {
                                    images.map((img,index) => (
                                        <div key={index} className='h-[80px] border rounded-md'>
                                        <img className=" object-cover h-full rounded-md" src={img} alt=""/>
                                    </div>
                                    ) )
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col-span-7'>
                        <div className='flex justify-between'>

                        <h1 className='text-3xl font-medium '>{title}</h1>
                        <button onClick={handleGoBack} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600  focus:outline-none ">Go Back</button>
                        </div>

                        <ul className='space-y-2 py-5'>
                            <li className='text-base font-medium text-gray-800 '> <b>Rating:</b> <span className='text-gray-600 font-normal'>{rating}</span> </li>
                            <li className='text-base font-medium text-gray-800 '> <b>Category:</b> <span className='text-gray-600 font-normal'>{category}</span> </li>
                            <li className='text-base font-medium text-gray-800 '> <b>Brand:</b> <span className='text-gray-600 font-normal'>{brand}</span> </li>
                            <li className='text-base font-medium text-gray-800 '> <b>Stock:</b> <span className='text-gray-600 font-normal'>{stock}<span className='text-xs'>/Pcs</span></span> </li>
                        </ul>
                        <h3 className='text-3xl font-bold text-blue-600'>${price}</h3>
                        <div className='mt-5'>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600  focus:outline-none ">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Product;