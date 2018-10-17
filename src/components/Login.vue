<template>
  <div class="login">
    <form novalidate class="md-layout" @submit.prevent="login">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>
        <md-card-content>
          <center><p class="alert">email/password salah</p></center>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('email')">
                <label for="email">E-mail</label>
                <md-input name="email" id="email" type="email" autocomplete="given-name" v-model="dataUser.email" :disabled="sending" />
                <span class="md-error" v-if="!$v.dataUser.email.required">E-mail wajib diisi</span>
                <span class="md-error" v-else-if="!$v.dataUser.email.email">Invalid email</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('password')">
                <label for="password">Password</label>
                <md-input name="password" id="password" autocomplete="given-name" v-model="dataUser.password" :disabled="sending" type="password"/>
                <span class="md-error" v-if="!$v.dataUser.password.required">Password wajib diisi</span>
              </md-field>
            </div>
          </div>
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />
        <md-card-actions>
          <md-button class="md-primary" to="/register" :disabled="sending" >Buat Akun Taklim</md-button>
          <md-button type="submit" class="md-primary md-raised" :disabled="sending" >Login</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email
  } from 'vuelidate/lib/validators'

  export default {
    name: 'login',
    mixins: [validationMixin],
    data: () => ({
      dataUser: {
        email: null,
        password: null,
        userParsed: null
      },
      sending: false
    }),
    validations: {
      dataUser: {
        email: {
          required,
          email
        },
        password: {
          required
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.dataUser[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      cleardataUser () {
        this.$v.$reset()
        this.dataUser.email = null
        this.dataUser.password = null
      },
      login () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.$http.post('http://localhost/laravel/public/api/user/login', this.dataUser).then(function (body) {
            console.log(body)
            if (body !== null) {
              console.log('ada data')
              const parsed = JSON.stringify(body)
              localStorage.setItem('user', parsed)
              this.$router.push('/')
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  p {
    color: red;
  }
</style>