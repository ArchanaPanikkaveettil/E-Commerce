import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../Pages/SingleCategory.css';

export default function SingleCategory() {

  const id = useParams().id;


  const [SingCategory, setSingCategory] = useState([]);

  useEffect(() => {

    const url = `https://api.escuelajs.co/api/v1/categories/${id}/products`;


    axios.get(url).then((res) => {
      setSingCategory(res.data);
      console.log(res.data);
    })
  }, [])



  return (
    <>

      <div class="row row-cols-1 row-cols-md-4 g-4" id='singlecategory'>

        {SingCategory.map((item) => (
          <div class="col"  >
            <div class="card" style={{ width: '80%', height: 'auto' }} id='singcategcard'>

              

                <img src={item.images[0].replace(/^\[\"|\"\]$/g, '')}  class="card-img-top"
                  alt="Hollywood Sign on The Hill" id='singleimage'  />

                <div class="card-body">
                  <h5 class="card-title" >{item.title}</h5>
                  <h5 class="card-title" style={{color:'green'}}>${item.price}</h5>
                  <p class="about" id='about'>{item.description}</p>


                </div>

              
            </div>
          </div>
        ))}

      </div >
    </>
  )
}