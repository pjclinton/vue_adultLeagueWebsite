<template>
  <div class="form-container">
    <v-card>
      <v-card-title>Add Player Form</v-card-title>
      <v-card-subtitle>
        Use this form to add a player. duh. did I really have to say it?
      </v-card-subtitle>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>
      
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>
      
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
      
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="phone"
                  label="Phone"
                  required
                ></v-text-field>
              </v-col>
              
      
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="position"
                  label="Position"
                  required
                ></v-text-field>
              </v-col>
              
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="notes"
                  label="Notes"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="jersey"
                  label="Jersey"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="dues"
                  label="Dues"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="number"
                  label="Number"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="submit()"
          color="primary"
          block
          :disabled="!valid"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    emits: ['onFormSubmit'],
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      phone: '',
      position: '',
      notes: '',
      jersey: '',
      dues: '',
      number: '',
      formData: null,
    }),
    methods: {
      submit() {
        const formData = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          position: this.position,
          notes: this.notes,
          jersey: this.jersey,
          dues: this.dues,
          number: this.number
        }

        this.$store.dispatch('addPlayer', formData);
        this.$router.push('/roster')
      }
    },
  }
</script>

<style lang="scss" scoped>
.form-container {
  padding: 4rem;
}
</style>