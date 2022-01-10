<template>
  <div class="bg-bg text-font fixed bottom-0 w-full py-3 z-50 shadow-top">
    <ul class="grid grid-cols-3 items-baseline place-content-between">
      <li>
        <router-link :to="{ name: 'CharacterOverview' }">
          <div class="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="36"
              viewBox="0 0 45 36"
              class="h-6"
              fill="#fffefd"
            >
              <path
                id="Icon_awesome-scroll"
                data-name="Icon awesome-scroll"
                d="M3.375,0A3.379,3.379,0,0,0,0,3.375v4.5A1.125,1.125,0,0,0,1.125,9H6.75V3.375A3.379,3.379,0,0,0,3.375,0ZM18,29.009V24.75H38.25v-18A6.757,6.757,0,0,0,31.5,0H7.846A5.571,5.571,0,0,1,9,3.375V29.25a4.5,4.5,0,0,0,5.256,4.438A4.667,4.667,0,0,0,18,29.009ZM20.25,27v2.25A6.758,6.758,0,0,1,13.5,36H37.125A7.875,7.875,0,0,0,45,28.125,1.125,1.125,0,0,0,43.875,27Z"
              />
            </svg>
            Charaktere
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Kompendium' }">
          <div class="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.5"
              height="36"
              viewBox="0 0 31.5 36"
              class="h-6"
              fill="#fffefd"
            >
              <path
                id="Icon_awesome-book"
                data-name="Icon awesome-book"
                d="M31.5,25.313V1.688A1.683,1.683,0,0,0,29.813,0H6.75A6.752,6.752,0,0,0,0,6.75v22.5A6.752,6.752,0,0,0,6.75,36H29.813A1.683,1.683,0,0,0,31.5,34.313V33.188a1.7,1.7,0,0,0-.626-1.315,15.68,15.68,0,0,1,0-5.252A1.676,1.676,0,0,0,31.5,25.313ZM9,9.422A.423.423,0,0,1,9.422,9H24.328a.423.423,0,0,1,.422.422v1.406a.423.423,0,0,1-.422.422H9.422A.423.423,0,0,1,9,10.828Zm0,4.5a.423.423,0,0,1,.422-.422H24.328a.423.423,0,0,1,.422.422v1.406a.423.423,0,0,1-.422.422H9.422A.423.423,0,0,1,9,15.328ZM26.817,31.5H6.75a2.25,2.25,0,0,1,0-4.5H26.817A25.313,25.313,0,0,0,26.817,31.5Z"
                opacity="0.87"
              />
            </svg>
            Kompendium
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Account' }">
          <div class="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="36.571"
              viewBox="0 0 32 36.571"
              class="h-6"
              fill="#fffefd"
            >
              <path
                id="Icon_awesome-user"
                data-name="Icon awesome-user"
                d="M16,18.286A9.143,9.143,0,1,0,6.857,9.143,9.142,9.142,0,0,0,16,18.286Zm6.4,2.286H21.207a12.434,12.434,0,0,1-10.414,0H9.6a9.6,9.6,0,0,0-9.6,9.6v2.971a3.429,3.429,0,0,0,3.429,3.429H28.571A3.429,3.429,0,0,0,32,33.143V30.171A9.6,9.6,0,0,0,22.4,20.571Z"
                opacity="0.87"
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
  name: "MobileNav",
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
