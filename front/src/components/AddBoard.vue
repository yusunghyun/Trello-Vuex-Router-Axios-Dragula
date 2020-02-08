<template>
  <Modal>
    <div slot="header">
      <h2>
        Create new board
        <a href="" class="modal-default-button" 
          @click.prevent="SET_IS_ADD_BOARD(false)">&times;</a>
      </h2>
    </div>
    <div slot="body">
      <form id="add-board-form" 
        @submit.prevent="addBoard">
        <input class="form-control" type="text" v-model="input" ref="input">
      </form>
    </div>
    <div slot="footer">
      <button class="btn" :class="{'btn-success': valid}" type="submit" 
        form="add-board-form" :disabled="!valid">
        Create Board</button>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
import {mapMutations , mapActions}from 'vuex'
export default {
  components: {
    Modal
  },
  data() {
    return {
      input: '',
      valid: false
    }
  },
  watch: {
    input(v) {
      this.valid = !!v.trim().length
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD'
    ]),
    ...mapActions([
      'ADD_BOARD',
      'FETCH_BOARDS'
    ]),
    // close() {
    //   this.$emit('close')
    // },
    addBoard() {
      // this.$emit('close')
      console.log('AddBoard.vue-addBoard()첫실행')
      this.ADD_BOARD({title: this.input}).then((id)=>{
        console.log('AddBoard.vue-addBoard().then영역')
        this.$router.push(`/b/${id}`)
        // this.FETCH_BOARDS()
        })//ADD_BOARD호출
        .catch(err=>console.log(err))
        .finally(()=>this.SET_IS_ADD_BOARD(false))//변이함수:이게 닫는거 false대신 트루넣으면 뜨는거)
    } 
  }
}
</script>

<style>
</style>