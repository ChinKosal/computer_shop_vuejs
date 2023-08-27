<template>
    <div class="sec-slideshow">
            <div class="laptop-img">
            <img src="../image/pic-slideshow-1.png" alt="">
            <div class="txt">
                <p class="txt-1">MacBookPro</p>
                <span class="txt-2">With M2 max chip</span>
                <p class="txt-3">$ 2399</p>
               <div class="btn_shop_now">
                    <button type="button">Shop Now</button>
               </div>
            </div>
            <div class="btn_slide">
                <a href="#" style="color: black;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/></svg>
                </a>
                <a href="#" style="color: red;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/></svg>
                </a>
                <a href="#" style="color: black ;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/></svg>
                </a>
               </div>
        </div>
        </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
/* font-family: 'Poppins', sans-serif;  */
    :root{
        --poppins-font:'Poppins', sans-serif;
        --background: #fcfcfb;
        --boxShadow:  rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.15) 0px 2px 16px 0px;;
    }
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html{
        scroll-behavior: smooth;
    }
    .sec-slideshow{
        width: 60%;
        margin: 0 auto;
        height: 450px;
        /* box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.15) 0px 2px 16px 0px; */
        box-shadow: 0 0 12px #0000001a;
    }
    .sec-slideshow .btn_slide {
        position: absolute;
       bottom: 0;
       right: 50%;
    }
    .sec-slideshow .laptop-img{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .sec-slideshow .laptop-img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .txt{
        width: 450px;
        height: 250px;
        position: absolute;
        top: 10%;
        text-align: center;
    }
    .txt .txt-1{
        font-size: 60px;
        font-family: var(--poppins-font) ;
        opacity: 0.8;
    }
    .txt .txt-2{
        font-size: 20px;
        font-family: var(--poppins-font);
    }
    .txt .txt-3{
        font-size: 30px;
        margin-top: 40px;
        font-family: var(--poppins-font);
        color: brown;
    }
    .btn_shop_now button{
        margin-top: 40px;
        padding: 15px 20px;
        border-radius: 10px;
        font-size: 20px;
        font-family: var(--poppins-font);
        border: 1px solid slategrey;
        outline: none;
        background-color: white;
        transition: 0.2s all;
    }
    .btn_shop_now button:hover{
        background-color: gray;
        font-family: var(--poppins-font);
        color: white;
        font-weight: 600;
    }
</style>