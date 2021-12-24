<template>
<div>
   <productDisplay :reviews="reviews"  :varients="varients" @add-cart="addToCart" @rem-cart="remFromCart" />
    <reviewForm @review-submited="addReview"/>
    <reviewList :reviews="reviews"/>
</div>
</template>

<script>

import productDisplay from '@/components/productDisplay.vue';
import reviewForm from '@/components/reviewForm.vue';
import reviewList from '@/components/reviewList.vue';

export default {
  name: 'App',
  components:{
      productDisplay,
      reviewForm,
      reviewList
  },
  data: function (){
        return{
            reviews :[],
            // cart : 0 
             varients:[
                {id:2002,name:'Chausette Blue',color:"blue",quantity:1,image :"../assets/images/socks_blue.png",cart:0,price:12},
                {id:2001,name:'Chausette Green',color:"green",quantity:50,image :"../assets/images/socks_green.png",cart:0,price:10},
            ],
        }
    },
    methods : {
        test(val){
            console.log(val);
        },
        addToCart(tab){
            let add=tab[0];
            let id=tab[1];
            if (this.varients[id].quantity-add>=0){
            if (this.varients[id].quantity){
            this.varients[id].cart+=add;
            this.varients[id].quantity-=add;
            add=0;}}
        },
        updateVarient(arg){
            this.selectedVarient=arg;
            console.log(this.selectedVarient);
        },
        remFromCart(arg){
            if (this.varients[arg].cart!=0){
            this.varients[arg].cart--;
            this.varients[arg].quantity++;
        }
        },
        toAdd(){
            this.toAddv++;
        },
        remToAdd(){
            if (this.toAddv!=0)
                this.toAddv--;
        },
        addReview(review){
            this.reviews.push(review);
        }
    },
    
}

</script>

<style>
  @import 'assets/style.css';
  /* @import 'assets/bootstrap.min.css'; */
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>
