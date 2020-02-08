<template>
  <div class="login">
    <h2>Log in to Trello</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input class="form-control" type="text" name="email" 
          v-model="email" autofocus />
      </div>
      <div>
        <label for="password">Passwrod</label>
        <input class="form-control" type="password"
          v-model="password" placeholder="123123" />
      </div>
      <button  class="btn" type="submit" 
        v-on:click="clickState='login'">로그인</button>
      <button class="btn" v-on:click="clickState='join'" type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
import {auth, setAuthInHeader} from '../api'
import {mapActions,mapState} from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
      rPath:'',
      clickState:'',
    }
  },
  computed: {
    ...mapState({
      me:'me'
    })
  },
  watch: {
    me(value) {
      if (value) {
        this.$router.push({
          path: '/',
        });
      }
    }
    },
  created() {
    this.rPath = this.$route.query.rPath || '/'
  },
  methods: {
    ...mapActions([
      'LOGIN',
      'JOIN'
    ]),
    onSubmit() {
      if(this.clickState='login'){
        this.LOGIN({email:this.email,password:this.password})
          .then(data => {
            this.$router.push(this.rPath)
          })
          .catch(err=>{
            this.error = err.data.error
          })
      }
      else if(this.clickState='join'){
        this.JOIN({email:this.email,password:this.password}) //JOIN액션 만들것.
          .then(data => {
            this.$router.push(this.rPath)
          })
          .catch(err=>{
            this.error = err.data.error
          })
      }
    },
    
  }
}
</script>

<style>
.login {
  width: 400px;
  margin: 0 auto; 
}
.error {
  color: #f00;
}
</style>