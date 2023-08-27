

<template>
    <header>
            <div class="container-top">
                <div  class="nav-top">
                    <div class="text-top-left">
                        <ul>
                            <li>
                                <a href="#" @click="gotoLogin">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="#" @click="gotoCreateacc">Create account</a>
                            </li>
                            <li>
                                <a href="#">Check out</a>
                            </li>
                        </ul>
                    </div>
                    <div class="text-top-mit">
                        <p>Welcome to our online store!</p>
                    </div>
                    <div class="text-top-right">
                        <select name="" id="">
                            <option value="">USA</option>
                            <option value="">Khmer</option>
                            <option value="">Thai</option>
                        </select>
                    </div>
                </div>
            </div>
    </header>
    <section class="container-fluid-1">
       <div class="container-1">
            <div class="box-left-sec1">
                <h1>Computers</h1>
            </div>
            <div class="box-right-sec1">
                <input type="text" name="" id="" placeholder="search-store">
                <div class="card_item">
                    <a href="#"  @click="gotoMycard">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96L19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM12 2l4 4l-4 4l-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59L12 2z"/></svg>
                        <span>My Card: <small>3 (items)</small></span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <nav class="container-fluid-2">
        <div class="container-2">
            <ul class="nav-bar">
                <li>
                    <a  style="color: red; opacity: 0.8;" href="" @click="gotoHome">Home</a>
                </li>
                <li>
                    <a  href="#">
                        Product
                    </a>
                </li>
                <li>
                    <a href="#">
                        Blog
                    </a>
                </li>
                <li>
                    <a href="" @click="gotoAbout">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </div>
    </nav>
    <router-view></router-view>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();

function gotoHome() {
  router.push({name: 'index'})
}
function gotoAbout() {
  router.push({ name: 'about' })
}
function gotoLogin(){
    router.push({name: 'login'})
}
function gotoCreateacc(){
    router.push({name: 'createacc'})
}
function gotoMycard(){
    router.push({name: 'mycard'})
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Creepster&family=Kantumruy+Pro:ital,wght@0,400;0,500;0,600;0,700;1,300&family=Poppins:wght@500;600;700;800&display=swap');
/* font-family: 'Creepster', cursive;
font-family: 'Kantumruy Pro', sans-serif;
font-family: 'Poppins', sans-serif; */
    :root{
        --poppins-font: 'Poppins', sans-serif;
    }
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html{
        scroll-behavior: smooth;
    }
    .container-top{
        width: 100%;
        background-color: #2c2c2c;
    }
    .nav-top{
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 8px 0px;
    }
    .nav-top .text-top-left ul{
        display: flex;
        gap: 30px;
    }
    .nav-top .text-top-left ul li {
        list-style: none;
    }
    .nav-top .text-top-left ul li a{
        text-decoration: none;
        color: #dddddd;
        font-size: 16px;
        font-family: var(--poppins-font);
    }
    .nav-top .text-top-mit p{
        color: #dddddd;
        opacity: 0.6;
        font-size: 16px;
        font-family: var(--poppins-font);
    }
    .nav-top .text-top-right select{
        border: none;
        background-color: transparent;
        color: #dddddd;
        outline: none;
        font-size: 16px;
        font-family: var(--poppins-font);
    }
    .nav-top .text-top-right select option{
        color: #2c2c2c;
        padding: 3px 5px;
        font-size: 16px;
    }

    /*================================*/
    .container-fluid-1{
        width: 100%;
    }
    .container-1{
        width: 60%;
        height: 130px;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
    }
    .box-left-sec1{
        width: 30%;
        height: 100%;     
        display: flex;
        align-items: center;
    }
    .box-left-sec1 h1{
        font-size:40px;
        font-weight: 400;
        margin-left: 4px;
    }
    .box-right-sec1{
        width: 30%;
        height: 100%;
    }
    .box-right-sec1 input{
        margin-top: 30px;
        border: none;
        font-size: 16px;
        padding: 5px 0px;
        border-bottom: 1px solid gray;
        width: 95%;
        outline: none;
        margin-bottom: 20px;
    }
    .box-right-sec1 .card_item a{
        display: flex;
        gap: 5px;
        text-decoration: none;
        color: #467197;
        transition: 0.2s all;
    }
    .box-right-sec1 .card_item span{
        font-size: 25px;
    }
    .box-right-sec1 .card_item a span:hover{
        color: red;
    }
    .box-right-sec1 .card_item a:hover{
        color: red;
    }

    /* nav bar */
    .container-fluid-2{
        z-index: 10;
        top: 0;
        position: sticky;
        width: 100%;
        border-bottom: 1px solid #dddddd;
        border-top: 1px solid #dddddd;
        background-color: #f4f4f3;
    }
    .container-2{
        width: 60%;
        margin: 0 auto;
    }
    .nav-bar {
        display: flex;
        padding: 0;
    }
    .nav-bar li:first-child{
        margin-left: 0px;
    }
    .nav-bar li{
        margin-left: 40px;
        list-style: none;
        padding: 12px 0px;
    }
    .nav-bar li a{
        text-decoration: none;
        font-size: 20px;
        font-family: var(--poppins-font);
        color: #467197;
        opacity: 0.8;
    }
    .nav-bar li a:hover{
        color: red; 
        opacity: 0.8;
    }
</style>
