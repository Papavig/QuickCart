<%@ page contentType="text/html; charset=UTF-8" %>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="shortcut icon" href="Assets/Images/fav.ico" type="image/x-icon">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <link rel="stylesheet" href="Assets\CSS\style.css" />

    <title>QuickCart - HOME</title>

</head>

<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top bg-opacity-75">
    <div class="container-fluid px-4 px-lg-5">
        <a class="navbar-brand" href="index.jsp"><img src="Assets/Images/bag.svg" alt="icon"
                                                       class="px-2 pb-1" />QuickCart</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="ForwardServlet?destination=products">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="ForwardServlet?destination=login">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<header class="py-5">
    <div class="h-image">
        <div class="p-5 mb-4 rounded-3">
            <div class="home_txt">
                <p class="collectio">NEW ARRIVALS</p>
                <div>
                    <div class="home-t"><h2>SPRING - SUMMER<br />Collection 2023</h2></div>
                    <div class="home_label fw-light lh-sm">
                        <p class="home-para">
                            A specialist label creating luxury essentials. Ethically crafted <br> with an unwavering commitment to exceptional quality.
                        </p>
                    </div>
                </div>
                <a class="btn Btn btn-dark" href="ForwardServlet?destination=products" role="button">Shop now</a>
            </div>
        </div>
    </div>
</header>

<section class="py-3 mt-5">
    <div class="container px-4 px-lg-5">
        <h1 class="fw-bold mb-4 card-heading">New Arrivals</h1>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="Assets/Images/product-2.jpg" alt="..." />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">Urban Voyager Jacket</h5>
                            ₹3999
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a href="OrderServlet?product_id=1" class="btn btn-outline-dark btn-card mt-auto">BUY NOW</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col mb-5">
                <div class="card h-100">
                    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                        Sale
                    </div>
                    <img class="card-img-top" src="Assets/Images/product-7.jpg" alt="Bag" />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">Trailblazer Backpack</h5>
                            <span class="text-muted text-decoration-line-through">₹2000</span>
                            ₹750
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark btn-card mt-auto" href="OrderServlet?product_id=9">BUY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                        Sale
                    </div>
                    <img class="card-img-top" src="Assets/Images/product-5.jpg" alt="..." />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">Urban Nomad</h5>
                            <span class="text-muted text-decoration-line-through">₹650</span>
                            ₹345
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark btn-card mt-auto" href="OrderServlet?product_id=4">BUY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="Assets/Images/product-4.jpg" alt="..." />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">Serene Sunset</h5>
                            ₹3999
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark btn-card mt-auto" href="OrderServlet?product_id=2">BUY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
</section>

<section class="py-3">
    <div class="container px-4 px-lg-5">
        <h1 class="fw-bold mb-4 card-heading">Top Sales</h1>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="Assets/Images/product-2.jpg"
                         alt="..." />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">Urban Voyager Jacket</h5>
                            ₹3999
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark btn-card mt-auto" href="ForwardServlet?destination=login">BUY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                        Sale
                    </div>
                    <img class="card-img-top imgBox" src="Assets/Images/product-1.jpg" alt="shoe" />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">Stellar Stride</h5>
                            <span class="text-muted text-decoration-line-through">₹2000</span>
                            ₹1499
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark btn-card mt-auto" href="ForwardServlet?destination=login">BUY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="Assets/Images/product-3.jpg" alt="..." />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">Skywalkers</h5>
                            ₹1499
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark btn-card mt-auto" href="ForwardServlet?destination=login">BUY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                        Sale
                    </div>
                    <img class="card-img-top" src="Assets/Images/product-8.jpg" alt="..." />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">Urban polo</h5>
                            <span class="text-muted text-decoration-line-through">₹1000</span>
                            ₹650
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark btn-card mt-auto" href="ForwardServlet?destination=login">BUY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
</section>

<div class="d-flex justify-content-center align-items-center mb-5">
    <a class="btn Btn btn-dark" href="ForwardServlet?destination=products" role="button">View More</a>
</div>

<div class="container-sm py-5 my-5 ">
    <div class="row align-items-center">
        <div class="col-md-7">
            <div class="con-label px-3">
                <p class="con-info">INFORMATION</p>
                <h2>Contact Us</h2>
                <div class="fw-light lh-sm">
                    <p>If you are interested in placing bulk orders,<br>we offer a wide range of stylish and high-quality clothes for all occasions.</p>
                    <p><b>Address:</b><br>Panvel, Navi Mumbai, Maharashtra., 410206</p>
                    <p><b>Phone Number:</b><br>+91 96523487</p>
                </div>
            </div>
        </div>
        <div class="col-md-5">
            <div class="row g-3 px-3">
                <div class="col">
                    <input type="text" class="form-control home-form" placeholder="Name" aria-label="Name">
                </div>
                <div class="col">
                    <input type="text" class="form-control home-form" placeholder="Email" aria-label="Email">
                </div>
                <div class="col-12">
                    <textarea class="form-control home-form" placeholder="Message" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn Btn w-50 btn-dark" style="margin: 15px; height: 75%;">Send Message</button>
                </div>
            </div>
        </div>
    </div>
</div>

<footer class="py-5 bg-light">
    <div class="container">
        <p class="m-0 text-center">&copy; 2023 QuickCart, Inc</p>
    </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</body>

</html>