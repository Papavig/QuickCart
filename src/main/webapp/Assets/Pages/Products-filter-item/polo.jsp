<%@ page contentType="text/html; charset=UTF-8" %>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="Assets/Images/fav.ico" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <link rel="stylesheet" href="Assets/CSS/style.css" />

    <title>QuickCart - PRODUCTS</title>
</head>

<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top bg-opacity-75">
    <div class="container-fluid px-4 px-lg-5">
        <a class="navbar-brand" href="ForwardServlet"><img src="Assets/Images//bag.svg" alt="icon"
                                                           class="px-2 pb-1" />QuickCart</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="ForwardServlet">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="ForwardServlet?destination=products">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="ForwardServlet?destination=login">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<section class="py-5 mt-5">
    <div class="container px-4 px-lg-5">
        <div class="row align-items-center justify-content-between mb-4">
            <div class="col-lg-6">
                <h1 class="fw-bold mb-4 card-heading">Our Products</h1>
            </div>
            <div class="col-lg-2 d-flex justify-content-end">
                <select class="form-select" onchange="window.location.href = this.value;">
                    <option value="ForwardServlet?destination=products">All items</option>
                    <option value="ForwardServlet?filter=Jackets">Jackets</option>
                    <option value="ForwardServlet?filter=Polo" selected>Polo</option>
                    <option value="ForwardServlet?filter=T-shirt">T-shirt</option>
                    <option value="ForwardServlet?filter=Bag">Bag</option>
                    <option value="ForwardServlet?filter=Shoe">Shoe</option>
                    <option value="ForwardServlet?filter=Perfume">Perfume</option>
                </select>
            </div>
        </div>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
                <div class="card h-100">
                    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                        Sale
                    </div>
                    <img class="card-img-top imgBox" src="https://i.postimg.cc/RhVP7YQk/hs1.png" alt="..." />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">Urban polo</h5>
                            <span class="text-muted text-decoration-line-through">₹1000</span>
                            ₹650
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark btn-card mt-auto" href="OrderServlet?product_id=5">BUY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
</section>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"></script>
</body>

</html>