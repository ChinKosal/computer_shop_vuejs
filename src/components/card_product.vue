<template>
      <div class="box_item">
            <img :src="props.src" alt="">
            <div class="hr" style="border-bottom: 2px solid gray; margin-top: 30px; opacity: 0.5;"></div>
            <div class="txt_product">
                <p>{{ props.p }} <br> <br> <span style="color: brown;">{{ props.span }}</span></p>
            </div>
        </div>
</template>

<script setup>
    const props =  defineProps({
        p:{
            type: String,
            defaul: ""
        },
        span:{
            type: String,
            defaul: ""
        },
        src:{
            type: String,
            defaul: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
        }
    });
</script>


<style scoped>
    .box_item{
        width: 23%;
        height: 370px;
        padding:20px 30px;
        transition: 0.5s all;
        background-color: transparent;
    }
    .box_item:hover{
        box-shadow: 0 0 12px #0000001a;
    }
    .box_item img{
        width: 100%;
        height: 60%;
        object-fit: cover;
    }

    .box_item .txt_product p{
        margin-top: 15px;
        text-align: center;
        font-size: 20px;
        font-family: var(--poppins-font);
    }
</style>