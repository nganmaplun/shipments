<template>
<div>
<header>
    <nav>
       <div class="menu-icon">
          <i class="fa fa-bars fa-2x"></i>
       </div>
       <div class="logo">
          SHIPMENTS
       </div>
       <div class="menu">
          <ul>
             <li><router-link to="">Home</router-link></li>
             <li><router-link to="About">About</router-link></li>
             <li><a href="#">Contact</a></li>
             <li><router-link to="Login">Login</router-link></li>
             <li><router-link to="Register">Register</router-link></li>

          </ul>
       </div>
    </nav>
</header>
</div>
</template>
<script>
</script>
<style>
header {
      width: 100%;
      height: 100px;
      background-size: cover;
}

.content {
      width: 94%;
      margin: 4em auto;
      font-size: 20px;
      line-height: 30px;
      text-align: justify;
}

.logo {
      line-height: 60px;
      position: fixed;
      float: left;
      margin: 16px 46px;
      color: rgb(88, 25, 85);
      font-weight: bold;
      font-size: 20px;
      letter-spacing: 2px;
}

nav {
      position: fixed;
      width: 100%;
      line-height: 60px;
}

nav ul {
      line-height: 60px;
      list-style: none;
      background: rgba(0, 0, 0, 0);
      overflow: hidden;
      color: rgb(184, 48, 48);
      padding: 0;
      text-align: right;
      margin: 0;
      padding-right: 40px;
      transition: 1s;
}

nav.black ul {
      background: #000;
}

nav ul li {
      display: inline-block;
      padding: 16px 40px;;
}

nav ul li a {
      text-decoration: none;
      color: rgb(87, 20, 20);
      font-size: 16px;
}

.menu-icon {
      line-height: 60px;
      width: 100%;
      background: #000;
      text-align: right;
      box-sizing: border-box;
      padding: 15px 24px;
      cursor: pointer;
      color: rgb(109, 6, 6);
      display: none;
}

@media(max-width: 786px) {

      .logo {
            position: fixed;
            top: 0;
            margin-top: 16px;
      }

      nav ul {
            max-height: 0px;
            background: rgb(136, 124, 124);
      }

      nav.black ul {
            background: rgb(131, 123, 123);
      }

      .showing {
            max-height: 34em;
      }

      nav ul li {
            box-sizing: border-box;
            width: 100%;
            padding: 24px;
            text-align: center;
      }

      .menu-icon {
            display: block;
      }

}

</style>
