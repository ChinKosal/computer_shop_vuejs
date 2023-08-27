<template>
        <div class="card_item">
            <img :src="props.image" alt="">
            <p class="txt1_sec_2">{{ props.p1 }}</p>
            <p class="txt2_sec_2">{{ props.p2 }}</p>
            <p class="txt3_sec_2">{{ props.p3 }}<span style="color: #BDC3C7;">{{ props.span }}</span></p>

            <div class="btn_card_sec_2">
                <button class="btn-1" @click="onAddProductToCard">Add to card</button>
                <button class="btn-1" style="background-color: #BDC3C7; color: #fff;">View</button>
            </div>
        </div>
</template>

<script setup>
import { reactive } from 'vue';
  const props =  defineProps({
    p1: {
        type: String,
        defaul: ""
    },
    p2: {
        type: String,
        defaul: ""
    },
    p3: {
        type: String,
        defaul: ""
    },
    span: {
        type: String,
        defaul: ""
    },
    image: {
        type: String,
        defaul: ""
    }
  })

  const state =  reactive ({
    item_cards:[
      {
        image:'https://i.pinimg.com/564x/b7/72/a3/b772a36eaf2a5188a66bc2a0ae708622.jpg',
        txt1: 'Apple G5 PowerMac 2GHz Desktop Computer',
        txt2: 'computers',
        txt3: '420.00$',
        txt_span: '420.00$'
      },
    ]
  })
  function onAddProductToCard(){
    alert("Add successfully!")
    const recive_product = {
        image:'https://i.pinimg.com/564x/b7/72/a3/b772a36eaf2a5188a66bc2a0ae708622.jpg',
        txt1: 'Apple G5 PowerMac 2GHz Desktop Computer',
        txt2: 'computers'
    }
    state.item_cards.push(recive_product);
  }
</script>


<style scoped>
    .card_item{
      width: 32%;
      height: 530px;
      padding: 5px 15px;
      text-align: center;
      transition: 0.5s all;
    }
    .card_sec_2 .card_item:hover{
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    }
    .card_item img{
      width: 100%;
      height: 45%;
      object-fit: cover;
      border-bottom: 1.5px solid #999999;
    }
    .card_item .txt1_sec_2{
      color: cornflowerblue;
      font-family: var(--poppins-font);
      font-size: 22px;
      line-height: 30px;
    }
    .card_item .txt2_sec_2{
      font-size: 16px;
      font-family: var(--poppins-font);
      color: black;
      opacity: 0.7;
    }
    .card_item .txt3_sec_2{
      margin-top: 10px;
      font-family: var(--poppins-font);
      font-size: 25px;
      color: crimson;
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: center;
    }
    .card_item .txt3_sec_2 span{
      color: crimson;
      font-size: 20px;
      font-family: var(--poppins-font);
      text-decoration: line-through;
    }
    .btn_card_sec_2 {
      margin-top: 20px;
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: center;
    }
    .btn_card_sec_2 .btn-1{
      border: none;
      padding: 10px 15px;
      background-color: crimson;
      font-family: var(--poppins-font);
      font-size: 16px;
      opacity: 1;
      color:#fff;
    }
    .btn_card_sec_2 .btn-1:hover{
      background-color: #2471A3;
      border: none;
      cursor: pointer;
    }
</style>