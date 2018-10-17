<template>
  <div class="edituser">
    <form novalidate class="md-layout" @submit.prevent="edituser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Edit Akun</div>
        <p class="title">{{datauser.id}} </p>

        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('name')">
                <label for="nama-lengkap">Name Lengkap</label>
                <md-input name="nama-lengkap" id="nama-lengkap" autocomplete="given-name" v-model="datauser.name" />
                <span class="md-error" v-if="!$v.datauser.name.required">name Lengkap wajib diisi</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('email')">
                <label for="email">Email</label>
                <md-input type="email" name="email" id="email" autocomplete="email" v-model="datauser.email" />
                <span class="md-error" v-if="!$v.datauser.email.required">E-mail wajib diisi</span>
                <span class="md-error" v-else-if="!$v.datauser.email.email">Invalid email</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('password')">
                <label for="password">Password</label>
                <md-input type="password" name="password" id="password" v-model="datauser.password" ></md-input>
                <span class="md-error" v-if="!$v.datauser.password.required">Password wajib diisi</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('foto')">
                <label for="foto">Foto</label>
                <md-file name="foto" id="foto" accept="image/*" @change="onFileSelected" />
                <span class="md-error" v-if="!$v.datauser.foto.required">E-mail wajib diisi</span>
              </md-field>
            </div>

          </div>
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />
        <md-card-actions>
          <md-button type="submit" class="md-primary md-raised" >Simpan</md-button>
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
    name: 'edituser',
    mixins: [validationMixin],
    data: () => ({
      datauser: {
        name: null,
        email: null,
        password: null,
        foto: ''
      },
      sending: false
    }),
    validations: {
      datauser: {
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
        const field = this.$v.datauser[fieldName]
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
          this.datauser.foto = event.target.result
          console.log(this.datauser)
        }
      },
      edituser () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.$http.post('http://localhost/laravel/public/api/user', this.datauser).then(function (body) { console.log(body) })
        }
      },
      dataup () {
        this.datauser = JSON.parse(localStorage.user)
        this.datauser = this.datauser.body
      }
    },
    mounted () {
      this.dataup()
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