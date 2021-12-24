<template>

  <div class="row">
    <div class="review-container collapse col-md-6 mx-auto" id="collapseExample">
          <div class="card card-body">
            <h3>Commentaires:</h3>
            <ul>
                <li v-for="(review , index) in reviews" :key="index">
                    {{review.name}} a donné {{review.rating}} étoiles <br>
                    "{{review.review}}"<br>
                    Recommendée : {{review.recomendation}}
                </li>
            </ul>
            </div>
        </div>
        </div>
</template>
<script>
export default {
  name: 'reviewList',
   props : {
        reviews:{
            type: Array,
            required: true
        }
    }
}
</script>