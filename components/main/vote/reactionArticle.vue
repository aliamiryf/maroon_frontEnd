<template>
  <div class="reaction px-10 py-10 text-center mx-10">
    <h3>نظر شما نسبت به این مقاله ؟</h3>
    <v-row class="mt-2" :class="$vuetify.breakpoint.mdAndUp ? 'mx-10' : '' ">
      <v-col cols="6" lg="2" v-for="(item , i) in reactions">
        <div class="singleReaction" :class="i == 2 ? 'selected mainShadow white--text' : ''">
          <div class="d-flex justify-space-around" >
            <div>
              25
            </div>
            <div>
              {{item.text}}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    data(){
      return{
        reactions: [
          {
            text: "😍",
            key: "Excellent"
          },
          {
            text: "🤔",
            key: "veryGood"
          },
          {
            text: "👍",
            key: "good"
          },
          {
            text: '😆',
            key: "medium",
            selected: true
          },
          {
            text: '😮',
            key: 'Weak'
          },
          {
            text: '😢',
            key: 'veryWeak'
          }
        ]
      }
    }
}
</script>

<style scoped>
.reaction{
  box-shadow: 0px 20px 40px rgb(24 44 74 / 5%) !important;
  border: 1px solid #ededed;
  border-radius: 20px;
}
.singleReaction{
  border: 1px solid #ededed;
  border-radius: 20px;
  padding: 10px;
  font-size: 15pt;
}
.selected{
  background: red;
}
</style>
