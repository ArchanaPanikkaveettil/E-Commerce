import React, { useEffect, useState } from 'react'
import '../Pages/ProductDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {

   

    const id = useParams().id;

    const [ProductDetail, setProductDetail] = useState({});



    console.log();

    useEffect(() => {


        const url = `https://api.escuelajs.co/api/v1/products/${id}`;

        axios.get(url).then(response => {
            setProductDetail(response.data);
            console.log(response.data);
        })

    }, [])









    return (
        <>
            <div class="container mt-5 mb-5" id='details'>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10">
                        <div class="card" id='detailscard'>

                            

                                <div class="row">

                                    <div class="col-md-6">


                                        <div class="images p-3">
                                       
                                            <div class="text-center p-4"> <img id="main-image" src={ ProductDetail.description?ProductDetail?.images[0].replace(/^\[\"|\"\]$/g, ''):''} width="250" /> </div>
                                            {/* <div class="thumbnail text-center"> <img onclick="change_image(this)" src="https://i.imgur.com/Rx7uKd0.jpg" width="70" /> <img onclick="change_image(this)" src="https://i.imgur.com/Dhebu4F.jpg" width="70" /> </div> */}
                                        
                                        </div>

                                    </div>


                                    <div class="col-md-6">
                                        <div class="product p-4" id='product' >


                                            {/* <div class="d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span class="ml-1">Back</span> </div> <i class="fa fa-shopping-cart text-muted"></i>
                                        </div> */}


                                            <div class="mt-4 mb-3">

                                                <h5 class="text-uppercase">{ProductDetail?.category?.name}</h5>
                                                <div class="price d-flex flex-row align-items-center">
                                                    <span class="act-price" id='act-price'>${ProductDetail?.price}</span>
                                                </div>

                                            </div>


                                            <p class="about" id='about'>{ProductDetail?.description}</p>


                                            <div class="sizes mt-5">
                                                <h6 class="text-uppercase">Size</h6> <label class="radio"> <input type="radio" name="size" value="S" checked /> <span>S</span> </label> <label class="radio"> <input type="radio" name="size" value="M" /> <span>M</span> </label> <label class="radio"> <input type="radio" name="size" value="L" /> <span>L</span> </label> <label class="radio"> <input type="radio" name="size" value="XL" /> <span>XL</span> </label> <label class="radio"> <input type="radio" name="size" value="XXL" /> <span>XXL</span> </label>
                                            </div>
                                            <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>


                                        </div>
                                    </div>

                                </div>

                         

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
