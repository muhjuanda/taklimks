<template>
  <div class="register">
    <form novalidate class="md-layout" @submit.prevent="register">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Buat Akun</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('name')">
                <label for="name-lengkap">name Lengkap</label>
                <md-input name="name-lengkap" id="name-lengkap" autocomplete="given-name" v-model="dataUser.name" />
                <span class="md-error" v-if="!$v.dataUser.name.required">name Lengkap wajib diisi</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('email')">
                <label for="email">Email</label>
                <md-input type="email" name="email" id="email" autocomplete="email" v-model="dataUser.email" />
                <span class="md-error" v-if="!$v.dataUser.email.required">E-mail wajib diisi</span>
                <span class="md-error" v-else-if="!$v.dataUser.email.email">Invalid email</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('password')">
                <label for="password">Password</label>
                <md-input type="password" name="password" id="password" v-model="dataUser.password" ></md-input>
                <span class="md-error" v-if="!$v.dataUser.password.required">Password wajib diisi</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('foto')">
                <label for="foto">Foto</label>
                <md-file name="foto" id="foto" accept="image/*" @change="onFileSelected" />
                <span class="md-error" v-if="!$v.dataUser.foto.required">E-mail wajib diisi</span>
              </md-field>
            </div>

          </div>
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />
        <md-card-actions>
          <md-button type="submit" class="md-primary md-raised" >Buat Akun</md-button>
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
    name: 'register',
    mixins: [validationMixin],
    data: () => ({
      dataUser: {
        name: null,
        email: null,
        password: null,
        foto: ''
      },
      sending: false
    }),
    validations: {
      dataUser: {
        name: {
          required
        },
        email: {
          required,
          email
        },
        password: {
          required
        },
        foto: {
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
      onFileSelected: function (event) {
        let filereader = new FileReader()
        filereader.readAsDataURL(event.target.files[0])
        filereader.onload = (event) => {
          this.dataUser.foto = event.target.result
          console.log(this.dataUser)
        }
      },
      cleardataUser () {
        this.$v.$reset()
        this.dataUser.name = null
        this.dataUser.email = null
        this.dataUser.password = null
        this.dataUser.foto = null
      },
      register () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.$http.post('http://localhost/laravel/public/api/user', this.dataUser).then(function (body) { console.log(body) })
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
</style>