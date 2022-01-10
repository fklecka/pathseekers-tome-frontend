<template>
  <div
    class="
      bg-bg
      h-app
      z-30
      text-font
      py-12
      px-6
      text-lg
      flex flex-col
      justify-between
      relative
      shadow-right
    "
  >
    <ul>
      <li>
        <router-link :to="{ name: 'AccountOverview' }">
          <div class="flex items-center pb-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 48 48"
              class="mr-3"
              fill="#FFFFFF"
              opacity="87%"
            >
              <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z" />
            </svg>
            Kontoübersicht
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'AccountSubscriptions' }">
          <div class="flex items-center pb-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 48 48"
              class="mr-3"
              fill="#FFFFFF"
              opacity="87%"
            >
              <path
                d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H8V24h32v12zm0-20H8v-4h32v4z"
              />
            </svg>
            Abonnements
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'AccountEdit' }">
          <div class="flex items-center pb-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 48 48"
              class="mr-3"
              fill="#FFFFFF"
              opacity="87%"
            >
              <path
                d="M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"
              />
            </svg>
            Profil bearbeiten
          </div>
        </router-link>
      </li>
      <!-- <li>
        <router-link :to="{ name: 'PasswordReset' }">
          <div class="flex items-center pb-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 48 48"
              class="mr-3"
              fill="#FFFFFF"
            >
              <path
                d="M36 16h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12v4h-2c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V20c0-2.21-1.79-4-4-4zM24 34c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.2-18H17.8v-4c0-3.42 2.78-6.2 6.2-6.2 3.42 0 6.2 2.78 6.2 6.2v4z"
              />
            </svg>
            Passwort ändern
          </div>
        </router-link>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "AccountNav",
};
</script>

<style lang="scss">
.active {
  div {
    svg {
      fill: #f28241;
    }
  }
}
</style>
