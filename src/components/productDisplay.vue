<template>
    <nav class="navbar shadow-lg px-4">
        
            <div class="logo "><img src="../assets/images/logo.png" alt="logo"></div>
            <div class="row ">
                <div href="" class="item">
                    <div class="group">
                        <button type="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#exampleModalCenter">
                            <i class="material-icons">
                                shopping_cart
                            </i>
                        </button>
                        <div class="detail">
                            Cart({{cart}})
                            <div class="sub">Dt {{total}}</div>
                        </div>
                    </div>
                </div>
            </div>
  </nav>
        <div class="bg-secondary pt-3">
            <div class="bg-light shadow-s pt-5 pb-5 mx-3 ">
                <div class="row ">
                    <div class="col-md-6 ">
                        <img :src="image" :class="{outOfStock:!onStock,displayImage:onStock}" class="test" alt="Oops!">
                    </div>
                    <div class="col-md-6 p-5 border-left">
                        <h2 class="title">{{title}}</h2>
                        <div class="rating-wrap my-3">
                            <ul class="rating-stars d-none">
                                <li style="width:80%" class="stars-active">
                                    <img src="../assets/images/stars-active.svg" alt="">
                                </li>
                                <li>
                                    <img src="../assets/images/starts-disable.svg" alt="">
                                </li>
                            </ul>
                            <small class="label-rating text-muted">{{revCount}} reviews </small>
                            <small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154 orders
                            </small>
                        </div> <!-- rating-wrap.// -->

                        <div class="mb-3">
                            <h4 v-if="onStock" class="price ">{{price}} DT </h4>
                            <h4 v-else class="price text-danger">OUT OF STOCK </h4>
                            <!-- <span class="text-muted">/per kg</span>  -->
                        </div>
                        <!-- <ul class="list-dots mb-0">
                             <li>Chaussettes super doux et extensible</li>
                            <li>Imprimé pour permettre à l'encre de pénétrer dans le fil. </li>
                            <li>En le portant, vous développerez à coup sûr de meilleurs projets VueJs.</li>
                            <li>Lavable en machine</li> 
                        </ul> -->
                        <productDetails :details="details" />
                        <dl class="row mt-3">
                            <dt class="col-sm-3">Model#</dt>
                            <dd class="col-sm-9">CH-Vue</dd>

                            <dt class="col-sm-3">Couleur</dt>
                            <dd class="col-sm-9">
                                <!-- <li v-for="(varient,index) in varients" :style="{backgroundColor:varient.color}"
                                    @click="updateVarient(index)" class="color-box"></li> -->
                                <button @click="updateVarient(1)" class="btn-hover color-1">VERT</button>
                                <button @click="updateVarient(0)" class="btn-hover color-2">BLEU</button>

                            </dd>
                        </dl>

                        <hr>
                        <div class="row">
                            <div class="form-group col-md ">
                                <label>Quantité</label>
                                <div class="input-group mb-3 input-spinner col-10" style="padding-left: 0!important;">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-light" @click="remToAdd()" type="button"
                                            id="button-minus"> −
                                        </button>
                                    </div>
                                    <input type="text" class="form-control" v-model.number="toAddv">
                                    <div class="input-group-append">
                                        <button class="btn btn-light" @click="toAdd()" type="button" id="button-plus"> +
                                        </button>
                                    </div>
                                </div>
                                <span class="text-muted">Quantité restant:{{quantity}}</span>

                            </div> <!-- col.// -->
                            <div class="form-group col-md">
                                <label>Select size</label>
                                <div class="">
                                    <select class="form-controla col-6">
                                        <option v-for="taille in tailles" :key="taille.id">{{taille.taille}}</option>
                                    </select>
                                </div>
                            </div> <!-- col.// -->
                        </div> <!-- row.// -->
                        <button :disabled="!onStock||!toAddv||quantity<toAddv" @click="addCart" class="btn  mx-3 btn-outline-primary"> <span
                                class="text">Add to cart</span> <i class="fas fa-shopping-cart"></i> </button>
                        <button :disabled="canRem" @click="remFromCart" class="btn  btn-outline-danger"> <span
                                class="text">Remove from cart</span> <i class="fas fa-shopping-cart"></i> </button><br>
                                
                                
                                <button type="button" class="btn  mx-3 mt-2 btn-outline-primary" @click="show"
                            data-target="#modal-review"><i class="material-icons">rate_review</i></button> 
                           
                           
                           
                            <button class="btn  mx-3 mt-2 btn-outline-primary " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="material-icons">
preview  </i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Cart</h5>
                        <button type="button" class="close btn-danger" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" order-md-2 mb-4">
                            <ul class="list-group mb-3">
                                <div v-for="varient in varients" :key="varient.id">
                                    <li v-if="varient.cart>0"
                                        class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 class="my-0">{{varient.name}}</h6>
                                            <small class="text-muted">Prix
                                                unitiare:{{varient.price}}<br>Quantité:{{varient.cart}}</small>
                                        </div>
                                        <span class="text-muted">{{varient.price*varient.cart}}TND</span>
                                    </li>
                                </div>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Total</span>
                                    <strong>{{total}} Tnd</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Continue to payment</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import productDetails from '@/components/productDetails.vue';

export default {
  name: 'ProductDisplay',
  props:{
      varients: Array,
      reviews:Array,
  },
  emits:[
      "add-cart",
      "rem-cart"
  ],components:{
      productDetails,
  },
  data: function (){
        return{
            brand : "VueJs",
            product : "Chausette",
            description :"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolores adipisci tenetur beatae velit sequi illum tempore animi impedit. Laboriosam, culpa. Voluptas temporibus magnam, pariatur odit dolores recusandae cumque consectetur?",
            link:"#",
            toAddv:0,
            selectedVarient:0,
            details:['Chaussettes super doux et extensible','Imprimé pour permettre à l\'encre de pénétrer dans le fil.','En le portant, vous développerez à coup sûr de meilleurs projets VueJs.',"Lavable en machine"],
            // varients:[
            //     {id:2002,name:'Chausette Blue',color:"blue",quantity:1,image :"../assets/images/socks_blue.png",cart:0,price:12},
            //     {id:2001,name:'Chausette Green',color:"green",quantity:50,image :"../assets/images/socks_green.png",cart:0,price:10},
            // ],
            tailles:[
                {id:2001,taille:"30"},
                {id:2002,taille:"34"},
                {id:2003,taille:"36"},
                {id:2004,taille:"38"},
                {id:2005,taille:"42"},
            ]
        }
    },
    methods : {
        addCart(){
        //     if (this.varients[this.selectedVarient].quantity-this.toAddv>=0){
        //     if (this.varients[this.selectedVarient].quantity){
        //     this.varients[this.selectedVarient].cart+=this.toAddv;
        //     this.varients[this.selectedVarient].quantity-=this.toAddv;
        //     this.toAddv=0;}}
            let tab=[this.toAddv,this.selectedVarient]
            this.$emit('add-cart', tab);
            this.toAddv=0;
        },
        show(){
            window.$('#modal-review').modal('show');
        }
        ,
        updateVarient(arg){
            this.selectedVarient=arg;
            console.log(this.selectedVarient);
        },
        remFromCart(){
            if (this.varients[this.selectedVarient].cart!=0){
                this.$emit('rem-cart', this.selectedVarient);

}
        },
        toAdd(){
            this.toAddv++;
        },
        remToAdd(){
            if (this.toAddv!=0)
                this.toAddv--;
        }
    },
    computed : {
        title(){
          console.log(this.image);
            return this.product+" "+this.brand;
        },
        image(){
            return this.varients[this.selectedVarient].image;
        },
        onStock(){
            return this.varients[this.selectedVarient].quantity>0?true:false;
        },
        inventory(){
            return this.varients[this.selectedVarient].quantity;
        },
        onSale(){
            return this.varients[this.selectedVarient].quantity>0?true:false;
        },
        Sale(){ 
            if (this.onSale==true)
                return this.product+" "+this.brand+" est en vente";
            else
            return this.product+" "+this.brand+" n'est pas en vente";

        },
        cart(){
            let count=0;
            for (let i = 0 ; i < this.varients.length ; i++) {
                count+=this.varients[i].cart;
            }
            // return this.varients[this.selectedVarient].cart;
            return count;
        },
        canRem(){
            return this.varients[this.selectedVarient].cart==0;
        },
        quantity(){
            return this.varients[this.selectedVarient].quantity;
        },
        total(){
            return (this.varients[0].cart*this.varients[0].price+this.varients[1].cart*this.varients[1].price);
        },
        price(){
            return this.varients[this.selectedVarient].price;
        },
        revCount(){
            return this.reviews.length;
        }
    }, 
}
</script>