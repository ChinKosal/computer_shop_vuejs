<template>
    <section class="full_sec_1">
      <div class="container_sec_1">
        <a href="#" @click="gotoHome">Home &nbsp; / &nbsp;</a><span>Account</span>
      </div>
    </section>
    <section class="userlogin">
      <div class="container_userlogin">
        <p>Create Account</p>
      </div>
    </section>

   <form class="form">
      <div class="container">
        <label for="fname"><b>FirstName</b></label>
        <input type="text" placeholder="Enter first name" name="fname" required> <br><br>
        <label for="lname"><b>LastName</b></label>
        <input type="text" placeholder="Enter last name" name="lname" required> <br><br>

        <label for="email"><b>E-mail</b></label>
        <input type="email" placeholder="Enter your email" name="email" required> <br> <br>
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required> <br> <br>
          
        <button type="submit" @click="alert_createacc">Create</button> <br>
        <div class="container">
            <a class="psw" href="#" @click="gotoStore">or Return to Store</a>
        </div>
      </div>
</form>

 <!-- =========== Delivery ================ -->

 <div class="full_content_delivery">
        <div class="container_delivery">
            <div class="free_delivery">
                <div class="car_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46L19.5 9.5M6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4h3M3 6v9h.76c.55-.61 1.35-1 2.24-1c.89 0 1.69.39 2.24 1H15V6H3m7 1l3.5 3.5L10 14v-2.5H5v-2h5V7Z"/></svg>
                </div>
                <div class="txt_delivery">
                    <p>Free standard delivery on all orders</p>
                    <span>or Reverve and Collect in an hour</span>
                </div>
            </div>
            <div class="gift_card">
                <div class="gift_card_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19c0-.34.04-.67.09-1H3v-6h16v1c.7 0 1.37.13 2 .35V6c0-1.11-.89-2-2-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h10.09c-.05-.33-.09-.66-.09-1M3 6h16v2H3V6m14.75 16L15 19l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41L17.75 22"/></svg>
                </div>
                <div class="txt_gift_card">
                    <p>Gift Cards</p>
                </div>
            </div>
        </div>
     </div>

     <!-- =========== finish Delivery ================ -->

     <!-- =========== Footer ============ -->
     <footer class="full_footer">
        <div class="container_footer">
            <div class="footer-left">
                <div class="txt_footer_left">
                    <h3>ADDRESS</h3>
                    <p>ផ្លូវលេខ: 162 | ផ្ទះលេខ: 232 | កែងផ្លូវ: 237 | ផ្សារដេប៉ូ១ | ទួលគោក</p>
                </div>
            </div>
            <div class="footer-mid-1">
                <h3>SOCIAL MEDIA</h3>
                <div class="icon_socail_box">
                    <div class="icon_socail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"/></svg>
                    </div>
                    <div class="icon_socail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><defs><linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2AABEE"/><stop offset="100%" stop-color="#229ED9"/></linearGradient></defs><path fill="url(#logosTelegram0)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"/><path fill="#FFF" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z"/></svg>
                    </div>
                    <div class="icon_socail" style="background-color: black; padding: 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28.25" height="32" viewBox="0 0 256 290"><path fill="#FF004F" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67.115 67.115 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995h-.002Zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898ZM69.673 225.607a40.008 40.008 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.313 40.313 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.268 40.268 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9Z"/><path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857V92.85h-.001Z"/><path fill="#00F2EA" d="M242.075 76.63V66.516a66.285 66.285 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163ZM176.53 11.57a67.788 67.788 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571h34.643ZM99.966 113.58v-10.769a88.787 88.787 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833Z"/></svg>
                    </div>
                </div>
            </div>
            <div class="footer-mid-2">
                <div class="contact">
                    <h3>CONTACT US</h3>
                    <div class="phone_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256"><path fill="currentColor" d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62ZM176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.61.61 0 0 0 0 .12l21 47l-20.67 24.74a6.13 6.13 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8.44 8.44 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208Z"/></svg>
                        <p>0887683082</p>
                    </div>
                    <div class="phone_icon" style="margin-top: 5px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256"><path fill="currentColor" d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62ZM176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.61.61 0 0 0 0 .12l21 47l-20.67 24.74a6.13 6.13 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8.44 8.44 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208Z"/></svg>
                        <p>096343455</p>
                    </div>
                </div>
            </div>
            <div class="footer-right">
                <div class="menu">
                    <h3>MENU</h3>
                    <div class="txt_menu">
                        <p>Contact us</p>
                        <p>Home</p>
                    </div>
                </div>
            </div>
        </div>
     </footer>
     <div class="copy_right">
        <div class="container_copy_right">
            <p>© 2023 Computers. All Rights Reserved. Design by TemplateMonster.com. Website hosting by Shopify.</p>
        </div>
     </div>
     <!-- =========== finsih Footer ============ -->
</template>

<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter();

    // gotoHome
    function gotoHome(){
        router.push({name: 'index'});
    };

    function gotoStore(){
        router.push({name: 'index'})
    }

    function alert_createacc(){
        alert("Created Account!");
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
/* font-family: 'Poppins', sans-serif;  */
    :root{
        --poppins-font:'Poppins', sans-serif;
        --background: #fcfcfb;
        --boxShadow:  rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;;
    }
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html{
        scroll-behavior: smooth;
    }
    .full_sec_1{
      width: 100%;
      margin-top: 20px;
    }
    .full_sec_1 .container_sec_1{
      width: 60%;
      margin: 0 auto;
      padding: 12px 10px;
      background-color: #999999;
      border-radius: 8px;
    }
    .full_sec_1 .container_sec_1 a{
      font-size: 16px;
      font-family: var(--poppins-font);
      text-decoration: none;
      color: #fff;
    }
    .full_sec_1 .container_sec_1 span{
      font-size: 16px;
      font-family: var(--poppins-font);
      text-decoration: none;
      color: #fff;
    }
    /* user login */
    .userlogin{
      margin-top: 10px;
      width: 100%;
    }
    .container_userlogin{
      width: 60%;
      margin: 0 auto;
      padding: 15px 10px; 
      border-bottom: 2px solid #999999;
    }
    .container_userlogin p{
      font-size: 30px;
      opacity: 0.8;
      font-family: var(--poppins-font);
    }


    /* form */
  .form {
   width: 40%;
   margin: 0 auto;
   margin-top: 30px;
  }

input[type=text], input[type=password], input[type=email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  font-family: var(--poppins-font);
  font-size: 18px;
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

.container {
  padding:  16px 0px;
  width: 100%;
}

.psw {
  float: left;
  color: #2471A3;
  font-size: 20px;
  font-family: var(--poppins-font);
}
.psw:hover{
    cursor: pointer;
}


/* ========= delivery and gift card ============= */
.full_content_delivery {
        width: 100%;
    }
    .full_content_delivery .container_delivery{
        width: 60%;
        height: 70%;
        margin: 0 auto;
        margin-top: 30px;
        padding: 15px 0px;

        display: flex;
        gap: 15px;
    }
    .free_delivery{
        border-radius: 5px;
        width: 60%;
        height: 100%;
        background-color: #B03A2E ;

        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0px 15px;

        transition: 0.2s all;
    }
    .free_delivery:hover{
        background-color: #2C3E50;
    }
    .free_delivery .txt_delivery p{
        opacity: 0.9;
        font-size: 35px;
        color:  white;
        font-family: var(--poppins-font);
    }
    .free_delivery .txt_delivery span{
        font-size: 20px;
        font-family: var(--poppins-font);
        color: white;
        opacity: 0.7;
    }
    .free_delivery .car_icon{
        color: white;
        opacity: 0.9;
    }

    .gift_card{
        width: 40%;
        height: 100%;
        background-color: #2471A3 ;

        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0px 15px;
        border-radius: 5px;

        transition: 0.2s all;
    }
    .gift_card:hover{
        background-color: #154360 ;
    }
    .gift_card .gift_card_icon{
        color: white;
        opacity: 0.9;
    }

    .gift_card .txt_gift_card p{
        opacity: 0.9;
        font-size: 35px;
        color:  white;
        font-family: var(--poppins-font);
    }

    /* ======== footer =========== */
    .full_footer{
        margin-top: 20px;
        width: 100%;
        height: 250px;
        background-color: #D7DBDD !important ;
        box-shadow: 0 0 12px #0000001a;
    }
    .container_footer{
        width: 60%;
        height: 100%;
        margin: 0 auto;

        display: flex;
        padding: 50px 0px 0px 0px;
    }
    .full_footer .footer-left{
        width: 30%;
        height: 100%;
    }
    .footer-left .txt_footer_left{
        padding: 20px;
    }
    .txt_footer_left h3{
        font-size: 20px;
        color:  #2d2d2e;
        font-family: var(--poppins-font);
    }
    .txt_footer_left p{
        font-size: 20px;
        color: #2d2d2e;
        margin-top: 20px;
    }
    .full_footer .footer-mid-1{
        width: 30%;
        height: 100%;
        padding: 20px;
    }
    .full_footer .footer-mid-1 h3{
        font-size: 20px;
        font-family: var(--poppins-font);
        color: #2d2d2e;
    }
    .footer-mid-1 .icon_socail_box{
        display:flex;
        gap: 10px;
        margin-top: 20px;
    }
    .footer-mid-1 .icon_socail{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        transition: 0.2s all;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
    .footer-mid-1 .icon_socail:hover{
        transform: scale(1.13);
        cursor: pointer;
    }
    .footer-mid-1 .icon_socail svg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .full_footer .footer-mid-2{
        width: 20%;
        height: 100%;
    }
    .footer-mid-2 .contact{
        padding: 20px;
    }
    .footer-mid-2 .contact h3{
        font-size: 20px;
        font-family: var(--poppins-font);
        color: #2d2d2e;
    }
    .footer-mid-2 .contact .phone_icon{
        margin-top: 20px;
        display: flex;
        align-items: center;
    }
    .contact .phone_icon svg{
        color:#2d2d2e;
        opacity: 0.8;
    }
    .contact .phone_icon p{
        font-size: 20px;
        color: #2d2d2e;
    }
    .full_footer .footer-right{
        width: 20%;
        height: 100%;
    }
    .footer-right .menu{
        cursor: pointer;
        padding: 20px;
        font-family: var(--poppins-font);
        font-size: 20px;
        color: #2d2d2e;
    }
    .footer-right .menu h3 {
        transition: 0.2s all;
    }
    .footer-right .menu h3:hover{
        color: #B03A2E;
    }
    .txt_menu{
        margin-top: 10px;
        line-height: 32px;
    }
    .txt_menu p {
        transition: 0.2s all;
    }
    .txt_menu p:hover{
        color: #2471A3;
    }

    .copy_right{
        width: 100%;
        background-color: #2C3E50 !important;
        box-shadow: 0 0 12px #0000001a;
    }
    .copy_right .container_copy_right{
        width: 60%;
        padding: 10px;
        margin: 0 auto;
    }

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
}
</style>