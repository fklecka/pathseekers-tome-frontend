<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="m-auto w-screen px-4 sm:w-400 pt-50 pb-24">
      <img
        src="../../assets/tome_logo_white.svg"
        alt=""
        @click="this.$router.push('/')"
      />
      <h2 class="text-4xl font-semibold text-font pt-50">
        Erstelle einen Account
      </h2>
      <div class="pt-12">
        <form action="#" @submit.prevent="submit">
          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Benutzername"
              class="
                w-full
                h-10
                px-5
                text-xl
                border
                email
                bg-bg
                border-orange
                text-font
              "
              v-model="form.username"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-Mail"
              class="
                w-full
                h-10
                px-5
                mt-8
                text-xl
                border
                email
                bg-bg
                border-orange
                text-font
              "
              v-model="form.email"
            />
          </div>
          <div class="relative">
            <input
              :type="pwType"
              name="password"
              id="password"
              placeholder="Passwort"
              class="
                w-full
                h-10
                px-5
                mt-8
                text-xl
                border
                password
                bg-bg
                border-orange
                text-font
              "
              v-model="form.password"
            />
            <span
              class="
                absolute
                text-xl
                border-0
                text-font
                opacity-60
                top-38
                right-5
              "
              @click="showPassword"
            >
              {{ showButton }}
            </span>
          </div>
          <div class="relative">
            <input
              :type="pwTypeConfirm"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Passwort bestätigen"
              class="
                w-full
                h-10
                px-5
                mt-8
                text-xl
                border
                password
                bg-bg
                border-orange
                text-font
              "
              v-model="form.password_confirmation"
            />
            <span
              class="
                absolute
                text-xl
                border-0
                text-font
                opacity-60
                top-38
                right-5
              "
              @click="showPasswordConfirm"
            >
              {{ showButtonConfirm }}
            </span>
          </div>
          <div class="text-lg text-orange mt-7">
            <div>
              <label for="accept" class="checkbox-class text-font">
                <input
                  type="checkbox"
                  name="accept"
                  id="accept"
                  class="form-checkbox border-orange"
                  v-model="confirm"
                />
                Ich habe die Datenschutzerklärung gelesen und akzeptiert</label
              >
            </div>
          </div>
          <div>
            <custom-button
              @click="submit()"
              class="
                w-full
                h-12
                text-xl
                font-bold
                text-white text-center
                bg-orange
                mt-7
              "
            >
              <p v-if="this.$store.state.isLoading === false">Registrieren</p>
              <p v-if="this.$store.state.isLoading === true">Bitte warten</p>
            </custom-button>
          </div>
        </form>
        <p class="bottom-4 text-lg text-center text-white opacity-50 pt-8">
          Sie haben bereits einen Account? <br />
          <router-link to="/login">
            <span class="text-orange">Login</span></router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: background-color;
  margin: 0;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid rgb(255, 255, 255, 0.87);
  border-radius: 0.15em;
  transform: translateY(0.075em);
  display: grid;
  place-content: center;
}
input[type="checkbox"]::before {
  content: "";
  width: 0.8rem;
  height: 0.8rem;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  background-color: rgb(255, 255, 255, 0.87);
  transform-origin: bottom left;
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 50%,
    0% 80%,
    20% 100%,
    50% 70%,
    80% 100%,
    100% 80%,
    70% 50%,
    100% 20%,
    80% 0%,
    50% 30%
  );
}
input[type="checkbox"]:checked::before {
  transform: scale(1);
}
.checkbox-class {
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  font-weight: 400;
}
</style>

<script>
import AuthService from "../../../services/AuthService";
import CustomButton from "../../components/CustomButton.vue";
import { useToast } from "vue-toastification";
import { mapActions } from "vuex";
export default {
  name: "register",
  components: { CustomButton },
  data() {
    return {
      pwType: "password",
      pwTypeConfirm: "password",
      showButton: "Anzeigen",
      showButtonConfirm: "Anzeigen",
      processing: false,
      confirm: false,
      form: {
        username: "test",
        email: "test@test.com",
        password: "password123",
        password_confirmation: "password123",
      },
      errors: {},
    };
  },
  methods: {
    showPassword(e) {
      e.preventDefault();
      if (this.pwType === "password") {
        this.pwType = "text";
        this.showButton = "Verstecken";
      } else {
        this.pwType = "password";
        this.showButton = "Anzeigen";
      }
    },
    showPasswordConfirm(e) {
      e.preventDefault();
      if (this.pwTypeConfirm === "password") {
        this.pwTypeConfirm = "text";
        this.showButtonConfirm = "Verstecken";
      } else {
        this.pwTypeConfirm = "password";
        this.showButtonConfirm = "Anzeigen";
      }
    },

    ...mapActions({
      getUser: "auth/getUser",
    }),

    async submit() {
      const toast = useToast();
      if (this.confirm) {
        try {
          this.$store.state.isLoading = true;
          const response = await AuthService.register(
            this.$config.apiUrl,
            this.form
          );
          console.log(response);
          if (response) {
            AuthService.setCookie(response);
            const config = {
              apiUrl: this.$config.apiUrl,
              headers: {
                headers: {
                  Authorization: AuthService.getFullToken(),
                },
              },
            };
            this.getUser(config);
            toast.success("Registrierung erfolgreich");
            this.$router.replace({ name: "CharacterOverview" });
          }
        } catch (e) {
          for (let error of e.errors) {
            toast.error(error);
          }
        } finally {
          this.$store.state.isLoading = false;
        }
      } else {
        toast.error(
          "Bitte akzeptiere die Datenschutzerklärung um fortzufahren"
        );
      }
    },
  },
};
</script>
