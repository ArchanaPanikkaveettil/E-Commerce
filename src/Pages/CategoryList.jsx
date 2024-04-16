import React, { useEffect, useState } from 'react'
import '../Pages/CategoryList.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CategoryList() {


    const [Category, setCategory] = useState([]);

    const url = 'https://api.escuelajs.co/api/v1/categories';

    useEffect(() => {

        axios.get(url).then((res) => {
            setCategory(res.data);
            console.log(res.data);
        })
    }, [])



    return (
        <>

            <div class="row row-cols-1 row-cols-md-4 g-4" id='categorylist'>

                {Category.map((item) => (
                    <div class="col"  >
                        <div class="card" style={{ width: '80%', height: 'auto' }} id='categorycard'>

                            <Link to={`/singlecategory/${item.id}`} id='categorylink'>

                            <img src={item.image} class="card-img-top"
                                alt="Hollywood Sign on The Hill" id='categoryimage' />

                            <div class="card-body">
                                <h5 class="card-title" >{item.name}</h5>
                            </div>

                            </Link>
                        </div>
                    </div>
                ))}

            </div >

        </>
    )
}
