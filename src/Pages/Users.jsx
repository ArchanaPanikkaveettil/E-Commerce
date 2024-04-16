import React, { useEffect, useState } from 'react'
import '../Pages/Users.css'
import axios from 'axios';


export default function Users() {


    const url = "https://api.escuelajs.co/api/v1/users";

    const [User, setUser] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
            setUser(response.data);
            console.log(response.data);
        })
    },[])






  return (
    <>
      
      <div class="row row-cols-1 row-cols-md-4 g-4" id='userslist'>

        {User.map((item) => (
          <div class="col"  >
            <div class="card" style={{ width: '80%', height: 'auto' }} id='usercard'>

                <img src={item.avatar} class="card-img-top"
                  alt="Hollywood Sign on The Hill" id='userimage' />

                <div class="card-body">
                  <h5 class="card-title" >{item.name}</h5>
                  <h7 class="card-title" ><i>{item.email}</i></h7>
                  <p class="about" id='about'></p>

                </div>
            </div>
          </div>
        ))}

      </div >
    </>
  )
}
