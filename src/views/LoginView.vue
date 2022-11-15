<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card color="primary" dark elevation="0">
                    <v-card-title>Login</v-card-title>
                    <v-card-text>
                    <v-form>
                        <v-text-field
                            v-model="email"
                            name="email"
                            label="Email"
                            type="text"
                        ></v-text-field>
                        <v-text-field
                            v-model="password"
                            name="password"
                            label="Password"
                            type="password"
                        ></v-text-field>
                    </v-form>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn elevation="0" color="secondary" @click="login()"> <span style="color:#333;"></span> Login</v-btn>
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
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            const loginCreds = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch("firebaseLogin", loginCreds)
        }
    }
};
</script>

<style lang="scss" scoped></style>
