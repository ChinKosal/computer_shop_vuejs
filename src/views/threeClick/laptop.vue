<template>
    <section class="full_sec_1">
      <div class="container_sec_1">
        <a href="#" @click="gotoHome">Home &nbsp; / &nbsp;</a><span>Account</span>
      </div>
    </section>
    <section class="userlogin">
      <div class="container_userlogin">
        <p>Hard Drive</p>
      </div>
    </section>
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

</style>