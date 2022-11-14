<template>
  <v-container fluid fill-height>
      <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
              <v-card color="primary" dark elevation="0">
                  <v-card-title>Sign Up</v-card-title>
                  <v-card-subtitle>Sign up for leagues in the Austin, Texas area.</v-card-subtitle>
                  <v-card-text>
                  <v-form>
                    <v-row>
                      <v-col cols="12" md="4">
                      <v-text-field
                        v-model="firstname"
                        label="First name"
                        required
                      ></v-text-field>
                      </v-col>
  
                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="lastname"
                          label="Last name"
                          required
                        ></v-text-field>
                      </v-col>
  
                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="email"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </v-col>
  
                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="phone"
                          label="Phone"
                          required
                        ></v-text-field>
                      </v-col>
  
                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="position"
                          label="Position"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="number"
                          label="Number"
                          required
                        ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                        <v-text-field
                          v-model="skill"
                          label="Skill Level"
                          required
                        ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                        <v-text-field
                            v-model="username"
                            name="username"
                            label="Username"
                            type="text"
                        ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                        <v-text-field
                            v-model="password"
                            name="password"
                            label="Password"
                            type="password"
                        ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                        <v-text-field
                            v-model="verifyPassword"
                            name="verifyPassword"
                            label="Verify Password"
                            type="password"
                        ></v-text-field>
                        </v-col>
                    </v-row>
                  </v-form>
                  </v-card-text>
                  <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="signUp()" elevation="0" color="secondary"> <span style="color:#333;">Sign Up</span> </v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
      </v-container>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../plugins/firebase'
import { doc, setDoc } from "firebase/firestore"; 

export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      phone: "",
      position: "",
      number: "",
      password: '',
      verifyPassword: '',
      skill: ''
    }
  },
  methods: {
    async signUp() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const { uid } = userCredential.user;
          console.log(uid)
          return uid
        })
        .then(async (uid) => {
          const skater = {
            uid: uid,
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            phone: this.phone,
            position: this.position,
            number: this.number,
            skill: this.skill
          }

          try {
            await setDoc(doc(db, "skaters", uid), skater)
              .then(() => console.log('successfully added document'))
          } catch (error) {
            console.log(error)
          }
        }).catch(err => console.log(err))
    }
  }
};
</script>

<style lang="scss" scoped></style>
