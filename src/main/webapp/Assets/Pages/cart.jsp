<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Map" %>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="Assets/Images/fav.ico" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <link rel="stylesheet" href="Assets/CSS/style.css" />

    <title>Shopping Cart</title>
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
            <ul class="navbar-nav mx-auto"> <!-- Set margin to auto to align items in the middle -->
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="ForwardServlet">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="ForwardServlet?destination=products">Products</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="ForwardServlet?destination=cart">My Cart</a>
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
        <h1 class="fw-bold mb-4">Your Shopping Cart</h1>

        <div class="row gx-4 gx-lg-5">
            <%
                List<Map<String, Object>> cart = (List<Map<String, Object>>) session.getAttribute("cart");
                if (cart != null && !cart.isEmpty()) {
                    for (int i = 0; i < cart.size(); i++) {
                        Map<String, Object> product = cart.get(i);
            %>
            <div class="col mb-5">
                <div class="card h-100 d-flex flex-row align-items-center">
                    <div class="card-body flex-grow-1">
                        <h5 class="card-title mx-4" style="display:inline;"><%= product.get("productName") %></h5>
                        <p class="card-text mx-4" style="display:inline;">Price: ₹<%= product.get("price") %></p>
                    </div>
                    <div class="card-footer bg-transparent border-top-0">
                        <div class="text-end">
                            <form action="RemoveFromCartServlet" method="post">
                                <input type="hidden" name="index" value="<%= i %>">
                                <button type="submit" class="btn btn-outline-danger">Remove</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <%
                }
            } else {
            %>
            <p>Your cart is empty.</p>
            <%
                }
            %>
        </div>


        <%!
            double calculateTotal(List<Map<String, Object>> cart) {
                double total = 0.0;
                if (cart != null) {
                    for (Map<String, Object> item : cart) {
                        double price = (double) item.get("price");
                        total += price;
                    }
                }
                return total;
            }
        %>


        <div class="text-end">
            <p>Total: ₹<%= calculateTotal(cart) %></p>
            <a class="btn Btn btn-dark" href="OrderServlet?action=checkout">Proceed to Checkout</a>
        </div>
    </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"></script>
</body>

</html>
