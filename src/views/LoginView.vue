<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card color="primary" dark elevation="0">
                    <v-card-title>Login</v-card-title>
                    <v-card-text>
                        <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                        >
                        <v-text-field
                            v-model="email"
                            name="email"
                            label="Email"
                            type="text"
                            solo
                            required
                            :rules="emailRules"
                        ></v-text-field>
                        <v-text-field
                            v-model="password"
                            name="password"
                            label="Password"
                            type="password"
                            solo
                            required
                            :rules="passwordRules"
                        ></v-text-field>
                    </v-form>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn 
                        elevation="0" 
                        color="secondary" 
                        @click="login()"
                        :disabled="!valid"
                    > 
                        <span style="color:#333;">Login</span> 
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        </v-container>
</template>

<script>
export default {
    data() {
        return {
            valid: true,
            email: '',
            password: '',
            emailRules: [v => !!v || 'E-mail is required'],
            passwordRules: [v => !!v || 'Password is required']
        }
    },
    methods: {
        login() {
            if (this.email !== '' && this.password !== '') {
                const loginCreds = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch("firebaseLogin", loginCreds)
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.error--text {
    color: #ff9b9b;
}
</style>
