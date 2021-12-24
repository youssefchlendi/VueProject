<template>
    <div>
        <div class="modal fade" id="modal-review" tabindex="-1" role="dialog"
            aria-labelledby="modal-review" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Review</h5>
                        <button type="button" class="close btn-danger" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" order-md-2 mb-4">

        <form class="" id="reviewformulaire" @submit.prevent="onSubmit">
            <h3>Laisser un commentaire</h3>
            <label for="name">name:</label>
            <input type="text" name="name" v-model="name"  required>

            <label for="review">Commentaire:</label>
            <textarea name="review" v-model="review"  id="review" required></textarea>

            <label for="rating">Rating:</label>
            <select name="rating" v-model.number="rating" id="rating" class="ml-2" required>
            <option selected="selected" value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select><br>
            <label for="recomendation">recomendation:</label>
            <select name="recomendation" v-model="recomendation" id="recomendation" required>
            <option selected="selected"  value="yes">yes</option>
            <option value="no">no</option>
            </select>
            <!-- <input type="submit" class="button" value="envoyer"> -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" id="sbtn" class="btn btn-primary" @click="hide" >Envoyer</button>
                    </div>
        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

export default {
  name: 'reviewForm',
  props: {
  },
  data () {
        return{
            name:'',
            review:'',
            rating:null,
            recomendation:'',
        }
    },
    methods: {
        onSubmit(){
            let productReview={
                name : this.name,
                review : this.review,
                rating : this.rating,
                recomendation: this.recomendation,
            }
            this.$emit('review-submited',productReview);
            this.name=this.review='';
            this.rating=null;
        },
        hide(){
            window.$('#modal-review').modal('hide');
        }
        
    }
}



</script>