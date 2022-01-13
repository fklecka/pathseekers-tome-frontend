<template>
  <div class="pb-36 overflow-y-scroll sheet md:w-758 xl:w-auto mt-3">
    <confirm-modal
      v-if="deleteConfirm"
      @close="this.deleteConfirm = false"
      @confirm="deleteCharacter()"
    >
      <template v-slot:text>Möchtest du den Charakter löschen?</template>
      <template v-slot:confirm>Charakter löschen</template>
    </confirm-modal>
    <div>
      <sheet-menu
        @delete="this.deleteConfirm = true"
        @save="this.saveCharacter"
      />
      <div class="inline-block xl:flex gap-3">
        <attribute :passedAttributes="this.character.attributes" />
        <div>
          <bewegungsraten />
          <charaktereigenschaften />
        </div>
      </div>
      <div class="flex flex-col justify-between xl:flex-row gap-3">
        <div class="flex flex-col">
          <rettungswuerfe />
          <kampfmanoever />
        </div>

        <div>
          <angriff />
          <ruestungsklasse-1 />
        </div>
      </div>
      <div class="flex flex-col xl:flex-row gap-3"></div>
      <div>
        <ruestungsklasse-2 />
        <div>
          <div class="flex flex-col xl:flex-row gap-3">
            <div>
              <fertigkeiten />
            </div>
            <div class="w-full">
              <waffen />
              <ruestungsgegenstaende />
              <sprachen />
              <talente />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Angriff from "../components/charactersheet/Angriff.vue";
import Attribute from "../components/charactersheet/Attribute.vue";
import Bewegungsraten from "../components/charactersheet/Bewegungsraten.vue";
import Charaktereigenschaften from "../components/charactersheet/Charaktereigenschaften.vue";
import Fertigkeiten from "../components/charactersheet/Fertigkeiten.vue";
import Kampfmanoever from "../components/charactersheet/Kampfmanoever.vue";
import Rettungswuerfe from "../components/charactersheet/Rettungswuerfe.vue";
import Ruestungsgegenstaende from "../components/charactersheet/Ruestungsgegenstaende.vue";
import Ruestungsklasse1 from "../components/charactersheet/Ruestungsklasse1.vue";
import Ruestungsklasse2 from "../components/charactersheet/Ruestungsklasse2.vue";
import Sprachen from "../components/charactersheet/Sprachen.vue";
import Talente from "../components/charactersheet/Talente.vue";
import Waffen from "../components/charactersheet/Waffen.vue";

import { mapGetters } from "vuex";
import ConfirmModal from "../components/ConfirmModal.vue";
import { useToast } from "vue-toastification";
import CharacterService from "../../services/CharacterService";
import AuthService from "../../services/AuthService";
import SheetMenu from "../components/charactersheet/Menu.vue";

export default {
  data: () => {
    return {
      deleteConfirm: false,
    };
  },
  components: {
    SheetMenu,
    Attribute,
    Bewegungsraten,
    Charaktereigenschaften,
    Rettungswuerfe,
    Angriff,
    Kampfmanoever,
    Ruestungsklasse1,
    Ruestungsklasse2,
    Fertigkeiten,
    Waffen,
    Ruestungsgegenstaende,
    Sprachen,
    Talente,
    ConfirmModal,
  },
  computed: {
    ...mapGetters({
      character: "charactersheetData",
    }),
  },
  methods: {
    async deleteCharacter() {
      const toast = useToast();
      this.$store.state.isLoading = true;
      const config = {
        headers: {
          headers: {
            Authorization: AuthService.getFullToken(),
          },
        },
      };
      try {
        const response = await CharacterService.deleteCharacter(
          this.$config.apiUrl,
          this.character.id,
          config
        );
        if (response.success) {
          this.$router.replace({ name: "CharacterOverview" });
          toast.success(response.success);
        } else if (response.error) {
          toast.error(response.error);
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.$store.state.isLoading = false;
      }
    },
    async saveCharacter() {
      const toast = useToast();
      this.$store.state.isLoading = true;
      const config = {
        headers: {
          headers: {
            Authorization: AuthService.getFullToken(),
          },
        },
      };
      try {
        const response = await CharacterService.updateCharacter(
          this.$config.apiUrl,
          this.character,
          config
        );
        if (response.success) {
          this.saved = true;
          toast.success(response.success);
        } else if (response.error) {
          toast.error(response.error);
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.$store.state.isLoading = false;
      }
    },
  },
};
</script>

<style>
.sheet {
  border: 3px inset #565d66;
}
hr {
  border: 1px inset #a7a7a7;
}
</style>
