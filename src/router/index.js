import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";

import CharacterOverview from "../views/CharacterOverview.vue";
import Kompendium from "../views/kompendium/Kompendium.vue";
import DashBoard from "../views/Dashboard.vue";
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";

import AccountOverview from "../views/account/AccountOverview.vue";
import AccountEdit from "../views/account/AccountEdit.vue";
import ResetPassword from "../views/Auth/ResetPassword.vue";
import ForgotPassword from "../views/Auth/ForgotPassword.vue";
import AccountSubscriptions from "../views/account/AccountSubscriptions.vue";

import Cookies from "../views/legal/Cookie.vue";
import Imprint from "../views/legal/Imprint.vue";
import Privacy from "../views/legal/Privacy.vue";

import CharacterTool from "../views/CharacterTool.vue";

import Charakterbogen from "../views/Charakterbogen.vue";

import Categories from "../views/kompendium/Categories.vue";

import Talents from "../views/kompendium/Talents.vue";
import Spells from "../views/kompendium/Spells.vue";
import Classes from "../views/kompendium/Classes.vue";
import Weapons from "../views/kompendium/Weapons.vue";
import Armor from "../views/kompendium/Armor.vue";

import Races from "../views/kompendium/Races.vue";
import RacesOverview from "../views/kompendium/races/RacesOverview.vue";

import Elfen from "../views/kompendium/races/Elfen.vue";
import Gnome from "../views/kompendium/races/Gnome.vue";
import HalbElfen from "../views/kompendium/races/HalbElfen.vue";
import HalbOrks from "../views/kompendium/races/HalbOrks.vue";
import Halblinge from "../views/kompendium/races/Halblinge.vue";
import Menschen from "../views/kompendium/races/Menschen.vue";
import Zwerge from "../views/kompendium/races/Zwerge.vue";

import ClassesOverview from "../views/kompendium/classes/ClassesOverview.vue";
import Barbar from "../views/kompendium/classes/Barbar.vue";
import Barde from "../views/kompendium/classes/Barde.vue";

const routes = [
  {
    path: "/dashboard",
    component: DashBoard,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
      {
        path: "/password/reset/:token",
        name: "ResetPassword",
        component: ResetPassword,
        props: true,
      },
      {
        path: "/forgotpassword",
        name: "ForgotPassword",
        component: ForgotPassword,
      },
      {
        path: "/kompendium",
        name: "Kompendium",
        component: Kompendium,
        redirect: "/kompendium/categories",
        children: [
          {
            path: "categories",
            name: "Categories",
            component: Categories,
          },
          {
            path: "talents",
            name: "Talents",
            component: Talents,
          },
          {
            path: "spells",
            name: "Spells",
            component: Spells,
          },
          {
            path: "armor",
            name: "Armor",
            component: Armor,
          },
          {
            path: "classes",
            name: "Classes",
            component: Classes,
            redirect: "/kompendium/classes/overview",
            children: [
              {
                path: "overview",
                name: "Klassenverzeichnis",
                component: ClassesOverview,
              },
              {
                path: "barbar",
                name: "Barbar",
                component: Barbar,
              },
              {
                path: "barde",
                name: "Barde",
                component: Barde,
              },
            ],
          },
          {
            path: "races",
            name: "Völker",
            component: Races,
            redirect: "/kompendium/races/overview",
            children: [
              {
                path: "overview",
                name: "Völkerverzeichnis",
                component: RacesOverview,
              },
              {
                path: "elfen",
                name: "Elfen",
                component: Elfen,
              },
              {
                path: "gnome",
                name: "Gnome",
                component: Gnome,
              },
              {
                path: "halbelfen",
                name: "HalbElfen",
                component: HalbElfen,
              },
              {
                path: "halborks",
                name: "HalbOrks",
                component: HalbOrks,
              },
              {
                path: "halblinge",
                name: "Halblinge",
                component: Halblinge,
              },
              {
                path: "menschen",
                name: "Menschen",
                component: Menschen,
              },
              {
                path: "zwerge",
                name: "Zwerge",
                component: Zwerge,
              },
            ],
          },
          {
            path: "weapons",
            name: "Weapons",
            component: Weapons,
          },
        ],
      },
      {
        path: "/characters",
        name: "CharacterOverview",
        component: CharacterOverview,
      },
      {
        path: "/charakterbogen",
        name: "Charakterbogen",
        component: Charakterbogen,
        meta: { requiresAuth: true },
      },
      {
        path: "/characters/new",
        name: "CharacterTool",
        component: CharacterTool,
        meta: { requiresAuth: true },
      },
      {
        path: "/cookies",
        name: "Cookies",
        component: Cookies,
      },
      {
        path: "/privacy",
        name: "Privacy",
        component: Privacy,
      },
      {
        path: "/imprint",
        name: "Imprint",
        component: Imprint,
      },
      {
        path: "/account",
        name: "Account",
        component: Account,
        redirect: "/account/overview",
        meta: { requiresAuth: true },
        children: [
          {
            path: "overview",
            name: "AccountOverview",
            component: AccountOverview,
          },
          {
            path: "edit",
            name: "AccountEdit",
            component: AccountEdit,
          },
          {
            path: "subscriptions",
            name: "AccountSubscriptions",
            component: AccountSubscriptions,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.getters["auth/authenticated"]) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
