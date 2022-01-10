<template>
  <div
    class="
      bg-bg
      h-app
      z-40
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
        <router-link :to="{ name: 'CharacterOverview' }">
          <div class="flex items-center pb-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="30px"
              viewBox="0 0 24 24"
              width="30px"
              fill="#FFFFFF"
              class="mr-2"
              opacity="87%"
            >
              <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
              <g>
                <path
                  d="M16,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8L16,3z M7,7h5v2H7V7z M17,17H7v-2h10V17z M17,13H7v-2h10 V13z M15,9V5l4,4H15z"
                />
              </g>
            </svg>
            Charaktere
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Kompendium' }">
          <div class="flex items-center pb-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="30px"
              viewBox="0 0 24 24"
              width="30px"
              fill="#FFFFFF"
              class="mr-3"
              opacity="87%"
            >
              <g><rect fill="none" height="24" width="24" /></g>
              <g>
                <g />
                <g>
                  <path
                    d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"
                  />
                  <g>
                    <path
                      d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"
                    />
                    <path
                      d="M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"
                    />
                    <path
                      d="M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            Kompendium
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Account' }">
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
                d="M6 10v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4H10c-2.21 0-4 1.79-4 4zm24 8c0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6s6 2.69 6 6zM12 34c0-4 8-6.2 12-6.2S36 30 36 34v2H12v-2z"
              />
            </svg>
            Account
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideNav",
};
</script>

<style lang="scss" scoped>
.active {
  div {
    svg {
      fill: #f28241;
    }
  }
}
</style>
