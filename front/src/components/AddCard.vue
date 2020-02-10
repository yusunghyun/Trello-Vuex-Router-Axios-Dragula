<template>
  <div class="add-card">
    <form @submit.prevent="onSubmit">
      <input class="form-control" type="text" v-model="inputTitle" ref="inputText">
      <button class="btn btn-success" type="submit" :disabled="invalidInput">
        Add Card</button>
      <a class="cancel-add-btn" href="" @click.prevent="$emit('close')">&times;</a>
    </form>
  </div>
</template>

<script>
import {mapActions}from 'vuex'
export default {
  props:['listId'],
  data() {
    return {
      inputTitle: ''
    }
  },
  computed: {
    invalidInput() {
      return !this.inputTitle.trim()
    }
  },
  mounted() {//라이프사이클같은건가봄
    this.setupClickOutside(this.$el.parentNode.parentNode)//이 인자는 addcard컴포넌트의 element가 넘어가지는겨
    this.$refs.inputText.focus() //$refs.inputText하면 돔 메소드 할수있대
  },
  methods:{
    ...mapActions([
      'ADD_CARD'
    ]),
    onSubmit(){
      if(this.invalidInput) return
      const {inputTitle,listId} = this
      const pos = this.newCardPos()
      this.ADD_CARD({ title:inputTitle,ListId:listId ,pos})
        .finally(()=>this.inputTitle='')
    },
    newCardPos(){
      const curList = this.$store.state.board.Lists.filter(l=>l.id===this.listId)[0]
      if(!curList) return 65535
      const {Cards} = curList
      if(!Cards.length) return 65535
      return Cards[Cards.length - 1].pos * 2
    },
    setupClickOutside(el) {
      document.querySelector('body').addEventListener('click', e => {
        if( el.contains(e.target.parentNode.parentNode) ) return
        else {this.$emit('close')}
      })
    }
  }
}  
</script>

<style>
.add-card {
  padding: 10px;
  display: block;
  position: relative;
}
.add-card .cancel-add-btn {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: none;
  color: #888;
  font-size: 24px;
}
.add-card .cancel-add-btn:hover,
.add-card .cancel-add-btn:focus {
  color: #666;
}
</style>