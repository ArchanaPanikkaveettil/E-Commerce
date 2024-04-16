import React from 'react'


export default function Home() {
    return (
        <>

            <header>
                {/* <!-- Navbar --> */}
                <nav class="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
                    <div class="container">
                        <a class="navbar-brand" href="#!"><span style={{ color: '#5e9693' }}>Shopping</span><span style={{ color: '#fff' }}>Time</span></a>
                        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul class="navbar-nav me-auto" >
                                <li class="nav-item">
                                    <a class="nav-link" href="/products" style={{color:'white'}}>Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/category"style={{color:'white'}}>Category</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a class="nav-link" href="/users"style={{color:'white'}}>Users</a>
                                </li>
                            </ul>
                            <ul class="navbar-nav d-flex flex-row">
                                <li class="nav-item me-3 me-lg-0">
                                    <a class="nav-link" href="#!">
                                        <i class="fas fa-shopping-cart"></i>
                                    </a>
                                </li>
                                <li class="nav-item me-3 me-lg-0">
                                    <a class="nav-link" href="#!">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="nav-item me-3 me-lg-0">
                                    <a class="nav-link" href="#!">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <!-- Navbar --> */}

                {/* <!--Section: Design Block--> */}
                <section>
                    {/* background-image: url('https://mdbootstrap.com/img/Photos/new-templates/psychologist/img1.jpg') */}
                    {/* <!-- Intro --> */}
                    <div id="intro" class="bg-image vh-100" style={{backgroundImage : 'url(https://segwitz.com/wp-content/uploads/2021/09/why-ecommerce-need-mobile-apps.jpg)'}}>
                        <div class="mask" style={{backgroundColor: 'rgba(250, 182, 162, 0.15)'}}></div>
                    </div>
                    {/* <!-- Intro --> */}
                </section>
                {/* <!--Section: Design Block--> */}
            </header>
        </>
    )
}
