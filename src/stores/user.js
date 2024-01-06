import { auth, usersCollection } from '@/includes/firebase'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(values) {
      await auth.createUserWithEmailAndPassword(values.email, values.password)

      await usersCollection.add({
        email: values.email,
        name: values.name,
        age: values.age,
        country: values.country
      })

      // this authenticates user to the application
      this.userLoggedIn = true
    },

    async authenticate(values){
      await auth.signInWithEmailAndPassword(values.email, values.password)

       this.userLoggedIn = true
    }
  }
})
