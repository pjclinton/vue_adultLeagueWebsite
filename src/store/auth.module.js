import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../plugins/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { signOut } from "firebase/auth";
import router from "../router/index";


  const state = {
    user: null,
    userProfile: null,
  }

  const mutations = {
    async GET_USER_PROFILE(state) {
      const docRef = doc(db, "skaters", state.user.uid);
      const docSnap = await getDoc(docRef);
      state.userProfile = docSnap.data();
    },
    async SAVE_USER_PROFILE(state, profile) {
      await setDoc(doc(db, "skaters", state.user.uid), profile)
        .then(() => console.log("profile saved"))
        .catch((err) => console.log(err));
    },
    FIREBASE_SIGNUP(state, loginCreds) {
      createUserWithEmailAndPassword(
        auth,
        loginCreds.email,
        loginCreds.password
      ).then((userCredential) => {
        state.user = userCredential.user;
        const profile = {
          firstname: loginCreds.firstname,
          lastname: loginCreds.lastname,
          username: loginCreds.username,
          email: loginCreds.email,
          phone: loginCreds.phone,
          position: loginCreds.position,
          number: loginCreds.number,
          league: loginCreds.league
        }
        return profile;
      }).then((profile) => {
        console.log({profile})
        this.dispatch('saveUserProfile', profile);
        router.push("/");
      });
    },
    FIREBASE_LOGIN(state, loginCreds) {
      signInWithEmailAndPassword(
        auth,
        loginCreds.email,
        loginCreds.password
      ).then((userCredential) => {
        state.user = userCredential.user;
        router.push("/");
      });
    },
    FIREBASE_SIGNOUT(state) {
      signOut(auth)
        .then(() => {
          state.user = null;
          state.userProfile = null;
        })
        .catch((err) => console.log(err.message));
    },
  }

  const actions = {
    getUserProfile({ commit }) {
      commit("GET_USER_PROFILE");
    },
    saveUserProfile({ commit }, profile) {
      commit("SAVE_USER_PROFILE", profile);
    },
    firebaseSignup({ commit }, loginCreds) {
      commit("FIREBASE_SIGNUP", loginCreds);
    },
    firebaseLogin({ commit }, loginCreds) {
      commit("FIREBASE_LOGIN", loginCreds);
    },
    firebaseLogout({ commit }) {
      commit("FIREBASE_SIGNOUT");
    },
  }

  export default {
    state,
    mutations,
    actions,
  }