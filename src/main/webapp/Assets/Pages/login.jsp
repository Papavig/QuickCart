<%@ page contentType="text/html; charset=UTF-8" %>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="Assets/Images/fav.ico" type="image/x-icon">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="Assets/CSS/style.css" />

    <title>QuickCart - LOGIN</title>
  </head>
  <body>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light fixed-top bg-opacity-75"
    >
      <div class="container-fluid px-4 px-lg-5">
        <a class="navbar-brand" href="ForwardServlet"
          ><img
            src="Assets/Images//bag.svg"
            alt="icon"
            class="px-2 pb-1"
          />QuickCart</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="ForwardServlet">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="ForwardServlet?destination=products">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="ForwardServlet?destination=login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="row border p-3 bg-white shadow">
        <div class="col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
          <div class="featured-image mb-3">
            <img src="Assets/Images//signin.jpg" class="img-fluid" />
          </div>
        </div>
    
        <div class="col-md-6">
          <div class="row align-items-center">
            <div class="header-text mb-2 pt-3 login_label">
              <h2>Hello, Again</h2>
              <p>We are happy to have you back.</p>
            </div>
            <form action="LoginServlet" method="post">
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control login-form form-control-lg"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <div class="input-group mb-1">
                <input
                  type="password"
                  class="form-control login-form form-control-lg"
                  name="password"
                  placeholder="Password"
                  required
                  pattern=".{8,}"
                  title="Password must be at least 8 characters"
                />
              </div>
              <div class="input-group my-2 pt-2 d-flex justify-content-between">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="formCheck"
                  />
                  <label for="formCheck" class="form-check-label text-secondary"><p>Remember Me</p></label>
                </div>
                <div class="forgot">
                  <p><a href="404.html">Forgot Password?</a></p>
                </div>
              </div>
              <div class="input-group mb-3">
                <button type="submit" class="btn btn-lg btn-dark login-btn">Login</button>
              </div>
              <div class="row">
                <p>Don't have an account? <a href="ForwardServlet?destination=signup">Sign Up</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
