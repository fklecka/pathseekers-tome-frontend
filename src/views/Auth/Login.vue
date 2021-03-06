<template>
  <div class="w-full h-full flex justify-center items-center pb-24">
    <div class="m-auto w-screen px-4 sm:w-400 pt-50">
      <img
        src="../../assets/tome_logo_white.svg"
        alt=""
        @click="this.$router.push('/')"
      />
      <h2 class="text-4xl font-semibold text-font pt-50">
        Willkommen zurück, Abenteurer
      </h2>
      <div class="pt-12">
        <form action="#" @submit.prevent="submit">
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
                text-xl
                border
                email
                bg-bg
                border-orange
                text-font
              "
              v-model="form.email"
            />
            <span class="text-orange" v-if="this.errors.email">{{
              this.errors.email.toString()
            }}</span>
          </div>
          <div class="relative">
            <input
              :type="pwtype"
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
            <span class="text-orange" v-if="this.errors.password">{{
              this.errors.password.toString()
            }}</span>
            <span
              class="
                absolute
                text-xl
                border-0
                text-font
                opacity-60
                top-38
                right-5
                cursor-pointer
              "
              @click="showPassword"
            >
              {{ showButton }}
            </span>
          </div>
          <div
            class="flex justify-between text-lg items center text-orange mt-7"
          >
            <div>
              <label for="remember" class="checkbox-class text-font">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  class="form-checkbox border-orange"
                  v-model="form.remember"
                />
                Login merken
              </label>
            </div>
            <div class="text-orange">
              <router-link to="/forgotpassword">Passwort vergessen</router-link>
            </div>
          </div>
          <div>
            <custom-button
              @click="submit()"
              class="
                w-full
                text-xl
                font-bold
                text-white text-center
                bg-orange
                mt-7
              "
            >
              <p v-if="this.$store.state.isLoading === false">Login</p>
              <p v-if="this.$store.state.isLoading === true">Bitte warten</p>
            </custom-button>
          </div>
        </form>
        <p class="bottom-4 text-lg text-center text-white opacity-50 pt-8">
          Sie haben noch keinen Account?
          <router-link to="/register">
            <span class="text-orange">Registrieren</span></router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.password,
.email {
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 15px;
  background-origin: content-box;
  text-indent: 25px;
}
.password {
  background-image: url("../../assets/password.svg");
}
.email {
  background-image: url("../../assets/user.svg");
}

input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: background-color;
  margin: 0;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid rgb(255, 255, 255, 0.87);
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
import { mapActions } from "vuex";
import { useToast } from "vue-toastification";
export default {
  components: {
    CustomButton,
  },
  data() {
    return {
      pwtype: "password",
      showButton: "Anzeigen",
      processing: false,
      form: {
        email: "",
        password: "",
        remember: false,
      },
      errors: {},
    };
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
    }),
    showPassword(e) {
      e.preventDefault();
      if (this.pwtype === "password") {
        this.pwtype = "text";
        this.showButton = "Verstecken";
      } else {
        this.pwtype = "password";
        this.showButton = "Anzeigen";
      }
    },
    async submit() {
      const toast = useToast();
      try {
        this.$store.state.isLoading = true;
        const returnValues = await AuthService.login(
          this.$config.apiUrl,
          this.form
        );
        if (returnValues.token) {
          AuthService.setCookie(returnValues.token);
          if (returnValues.remember) {
            AuthService.setRememberToken(returnValues.remember);
          }
          const config = {
            apiUrl: this.$config.apiUrl,
            headers: {
              headers: {
                Authorization: AuthService.getFullToken(),
              },
            },
          };
          this.getUser(config);
          toast.success(returnValues.message);
          this.$router.replace({ name: "CharacterOverview" });
        }
      } catch (e) {
        if (e.errors) {
          for (let error of e.errors) {
            toast.error(error);
          }
        } else if (e.message) {
          toast.error(e.message);
        }
      } finally {
        this.$store.state.isLoading = false;
      }
    },
  },
};
</script>
