import React, { useEffect, useRef, useState } from 'react'
import './ProductList.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList() {

   


    const [products, setProducts] = useState([]);

    const url = 'https://api.escuelajs.co/api/v1/products';

    useEffect(() => {

        axios.get(url).then(response => {
            setProducts(response.data);
            console.log(response.data);
        })

    }, [])


    return (
        <>

            <div class="row row-cols-1 row-cols-md-4 g-4" id='product-list'>

                {products.map((item) => (
                    <div class="col" key={item.id} >
                        <div class="card" style={{ width: '80%', height: 'auto' }} id='card'>

                            <Link to={`/details/${item.id}`} id='detailslink'>

                                <img src={item.images[0].replace(/^\[\"|\"\]$/g, '')} class="card-img-top"
                                    alt="Hollywood Sign on The Hill" id='productimage' />
                                <div class="card-body">
                                    <h5 class="card-title" >{item.title}</h5>
                                    <h5 class="card-title" style={{ color: 'green' }}>${item.price}</h5>
                                    <br />
                                    <button id="button-33" role="button">Add to Cart</button>
                                </div>

                            </Link>

                        </div>

                    </div>
                ))}

            </div >

        </>
    )
}
