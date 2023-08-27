<template>
   <div class="one_item_card">
        <div class="one_img">
            <img :src="props.src" alt="">
        </div>
        <div class="one_txt">
            <div class="detail_top">
                <p class="p1">{{ props.p_one }}</p>
                <p class="p2">{{ props.p_two }}</p>
            </div>
            <div class="detail_button">
                  <div class="left_detail">
                      <p>{{ props.p_three }}</p>
                    <div class="qty">
                      <label for="qty">{{ props.p_four }}</label>
                      <input type="number" name="qty">
                    </div>   
                  </div>
                  <div class="right_detail">
                      <p>Total: <span>{{ props.span }}</span></p>
                  </div>
              </div>
        </div>
    </div>
</template>

<script setup>
      const props = defineProps({
        src:{
          type: String,
          default: ""
        },
        p_one:{
          type: String,
          default: ""
        },
        p_two:{
          type: String,
          default: ""
        },
        p_three:{
          type: String,
          default: ""
        },
        p_four: {
          type: String,
          default: ""
        },
        p_five:{
          type: String,
          default: ""
        },
        span:{
          type: String,
          default: ""
        }
      })

      
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
     .one_item_card{
        width: 100%;
        height: 250px;
        border-bottom: 1px solid #BDC3C7 ;

        display: flex;
    }
    .one_item_card .one_img{
        width: 30%;
        height: 100%;
    }
    .one_img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
        padding: 20px;
    }
    .one_item_card .one_txt{
        width: 70%;
        height: 100%;
    }
    .one_txt .detail_top{
      width: 100%;
      height: 40%;
      border-bottom: 1px solid #BDC3C7 ;
    }
    .detail_top .p1{
      padding-top: 25px;
      font-size: 23px;
      color: #2471A3;
      font-family: var(--poppins-font);
    }
    .detail_top .p2{
      padding-top: 25px;
      font-size: 18px;
      color: #2d2d2e;
      opacity: 0.7;
      font-family: var(--poppins-font);
    }
    .detail_top .p2{
      padding-top: 20px;
      font-size: 18px;
      font-family: var(--poppins-font);
    }

    .one_txt .detail_button{
      width: 100%;
      height: 60%;

      display: flex;
      /* background-color: #B03A2E; */
    }
    .detail_button .left_detail{
      width: 50%;
      height: 100%;
      padding: 30px 30px 0px 0px ;
      
      display: flex;
      justify-content: space-between;
    }
    .left_detail p{
      font-size: 22px;
      color: #B03A2E;
      font-family: var(--poppins-font);
    }
    .left_detail input{
      width: 50px;
      height: 30px;
      outline: none;
      margin-left: 10px;
      border-radius: 5px;
      border: 1px solid #2C3E50;
      text-align: center;
      padding-right: 10px;
      color: #B03A2E;
    }
    .left_detail input:hover{
      cursor: pointer;
    }
    .detail_button .right_detail{
      width: 50%;
      height: 100%;
      position: relative;
    }
    .detail_button .right_detail p{
      position: absolute;
      color:#2d2d2e;
      font-size: 20px;
      font-family: var(--poppins-font);

      right: 0;
      top: 60%;
    }
    .right_detail p span{
      font-size: 18px;
      font-family: var(--poppins-font);
      color: #B03A2E;
    }
</style>
