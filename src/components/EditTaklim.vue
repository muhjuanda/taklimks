<template>
  <div class="edittaklim">
    <form novalidate class="md-layout" @submit.prevent="ubahtaklim">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Edit Taklim</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('nama')">
                <label for="nama-taklim">Nama/Judul Taklim</label>
                <md-input name="nama-taklim" id="nama-taklim" autocomplete="given-name" v-model="datataklim.nama" />
                <span class="md-error" v-if="!$v.datataklim.nama.required">Nama taklim wajib diisi</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('tema')">
                <label for="tema-taklim">Tema</label>
                <md-input name="tema-taklim" id="tema-taklim" autocomplete="family-name" v-model="datataklim.tema" />
                <span class="md-error" v-if="!$v.datataklim.tema.required">Tema Taklim Wajib Diisi</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('tempat')">
                <label for="tempat">Tempat</label>
                <md-input name="tempat" id="tempat" autocomplete="given-name" v-model="datataklim.tempat" />
                <span class="md-error" v-if="!$v.datataklim.tempat.required">Nama tempat wajib diisi</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('alamat')">
                <label for="alamat">Alamat</label>
          
                <md-input name="alamat" id="alamat" autocomplete="family-name" v-model="datataklim.alamat" />
                <span class="md-error" v-if="!$v.datataklim.alamat.required">Alamat Wajib Diisi</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('pemateri')">
                <label for="pemateri">Pemateri</label>
                <md-input name="pemateri" id="pemateri" autocomplete="given-name" v-model="datataklim.pemateri" />
                <span class="md-error" v-if="!$v.datataklim.pemateri.required">Nama Pemateri wajib diisi</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('pelaksana')">
                <label for="pelaksana">Pelaksana</label>
                <md-input name="pelaksana" id="pelaksana" autocomplete="family-name" v-model="datataklim.pelaksana" />
                <span class="md-error" v-if="!$v.datataklim.pelaksana.required">pelaksana Wajib Diisi</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('tanggal')">
                <label for="tanggal">Tanggal</label>
                <md-input name="tanggal" id="tanggal" v-model="datataklim.tanggal" type="date" />
                <span class="md-error" v-if="!$v.datataklim.tanggal.required">Tanggal Wajib Diisi</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('pukul')">
                <label for="pukul">pukul</label>
                <md-input name="pukul" id="pukul" v-model="datataklim.pukul" type="time" />
                <span class="md-error" v-if="!$v.datataklim.pukul.required">pukul Wajib Diisi</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('peserta')">
                <label for="peserta">Peserta</label>
                <md-select name="peserta" id="peserta" v-model="datataklim.peserta" md-dense>
                  <md-option value="Umum" default>Umum</md-option>
                  <md-option value="ikhwah">Ikhwan (Laki-laki)</md-option>
                  <md-option value="Akhwat">Akhwat (Perempuan)</md-option>
                </md-select>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('htm')">
                <label for="htm">Biaya</label>
                <span class="md-prefix">Rp</span>
                <md-input type="number" id="htm" name="htm" autocomplete="htm" v-model="datataklim.htm" />
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
               <md-field>
                <label for="cp"><i>Contact Person</i></label>
                <md-input type="number" id="cp" name="cp" autocomplete="cp" v-model="datataklim.cp" />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field >
                <label for="ket">ket</label>
                <md-textarea id="ket" name="ket" autocomplete="ket" v-model="datataklim.ket" ></md-textarea>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
            <md-field>
              <label>Pamflet/datataklim</label>
              <md-file id="pamflet" accept="image/*" @change="onFileSelected" />
            </md-field>
          </div>
          </div>
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />
        <md-card-actions>
          <md-button type="submit" class="md-primary" >Simpan</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required
  } from 'vuelidate/lib/validators'

  export default {
    name: 'edittaklim',
    mixins: [validationMixin],
    data: () => ({
      datataklim: {
        id_user: '',
        id: null,
        nama: null,
        tema: null,
        pemateri: null,
        tempat: null,
        alamat: null,
        tanggal: '2018-08-27',
        pukul: '09:00',
        peserta: 'Umum',
        htm: '0',
        pelaksana: null,
        cp: null,
        ket: null,
        pamflet: ''
      },
      id_user: null,
      sending: false
    }),
    validations: {
      datataklim: {
        nama: {
          required
        },
        tema: {
          required
        },
        pemateri: {
          required
        },
        tempat: {
          required
        },
        alamat: {
          required
        },
        tanggal: {
          required
        },
        pukul: {
          required
        },
        peserta: {
          required
        },
        htm: {
          required
        },
        pelaksana: {
          required
        },
        cp: {
          required
        },
        ket: {
          required
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.datataklim[fieldName]

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
          this.datataklim.pamflet = event.target.result
          console.log(this.datataklim)
        }
      },
      ubahtaklim () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          console.log('asdfasdfasdfasdf' + this.datataklim)
          this.$http.post('http://localhost/laravel/public/api/taklim/update', this.datataklim).then(function (body) { console.log(body) })
          this.$swal(
            'Good job!',
            'You clicked the button!',
            'success'
          )
          this.$router.push('/')
        }
      },
      dataup () {
        let id = this.$route.params.id

        this.$http.get('http://localhost/laravel/public/api/taklim?id=' + id).then(function ({body}) {
          console.log(body)
          this.datataklim = body
          this.datataklim.pamflet = null
        })

        localStorage.getItem('user')
        this.user = JSON.parse(localStorage.user)
        this.datataklim.id_user = this.user.body.id
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