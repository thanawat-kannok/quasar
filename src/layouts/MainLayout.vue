<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>SMS</q-toolbar-title>

        <div style="max-width: 300px">
          <q-select standout v-model="schools_model" :options="schools" />
        </div>
        <div style="max-width: 300px">
          <q-select standout v-model="year_model" :options="year" />
        </div>
        <div>
          <q-select
            standout
            v-model="model"
            :options="options"
            :dense="dense"
            :options-dense="denseOpts"
          >
            <template v-slot:append>
              <q-avatar>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </q-avatar>
              <div class="md">นายธนวัฒน์ การนอก</div>
            </template>
          </q-select>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      style="background-color: darkgrey; max-width: 100px"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="miniState"
      mini-to-overlay
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
          <q-item clickable v-ripple @click="toggleLeftDrawersmall">
            <q-item-section avatar>
              <span
                class="material-icons"
                flat
                @mouseover="hello = true"
                icon-right="mail"
              >
                school
              </span>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="toggleLeftDrawersstudent">
            <q-item-section avatar>
              <span
                class="material-icons"
                flat
                @mouseover="hello = true"
                icon-right="mail"
              >
                portrait
              </span>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="toggleLeftDrawerscourse">
            <q-item-section avatar>
              <span
                class="material-icons"
                flat
                @mouseover="hello = true"
                icon-right="mail"
              >
                menu_book
              </span>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <span
                class="material-icons"
                flat
                @mouseover="hello = true"
                icon-right="mail"
              >
                star_border
              </span>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <span
                class="material-icons"
                flat
                @mouseover="hello = true"
                icon-right="mail"
              >
                work
              </span>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <span class="material-icons"> settings </span>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      v-model="leftDrawersmallOpen"
      style="margin-left: 51px; background-color: LightGray"
      class="fit"
    >
      <q-list padding>
        <q-item-label header> ปีการศึกษา ชั้นปี </q-item-label>
        <q-item clickable v-ripple>
          <span class="material-icons"> play_arrow </span>

          <q-item-section avatar> ปีการศึกษา</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <span class="material-icons"> play_arrow </span>

          <q-item-section avatar> จัดห้องเรียน </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <!-- นักเรียน -->
    <q-drawer
      v-model="leftDrawerstudentOpen"
      style="margin-left: 51px; background-color: LightGray"
      class="fit"
    >
      <q-list padding>
        <q-item-label header> ทะเบียนนักเรียน</q-item-label>
        <q-item clickable v-ripple>
          <span class="material-icons"> play_arrow </span>

          <q-item-section avatar> นักเรียนปัจจุบัน</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <span class="material-icons"> play_arrow </span>

          <q-item-section avatar> นักเรียนสมัครใหม่ </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <!-- หลักสูตร -->
    <q-drawer
      v-model="leftDrawercourseOpen"
      style="margin-left: 51px; background-color: LightGray; max-width: 170px"
      class="fit"
    >
      <q-list padding>
        <q-item-label header> หลักสูตร</q-item-label>
        <q-item clickable v-ripple to="/subject">
          <span class="material-icons"> play_arrow </span>

          <q-item-section avatar> วิชา</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <span class="material-icons"> play_arrow </span>

          <q-item-section avatar> กลุ่มสาระการเรียนรู้ </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <span class="material-icons"> play_arrow </span>

          <q-item-section avatar> กิจกรรมพัฒนาผู้เรียน </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <span class="material-icons"> play_arrow </span>

          <q-item-section avatar> หลักสูตรแผนการเรียน </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar> ดัชนีชี้วัด </q-item-section>

          <span class="material-icons"> arrow_forward_ios </span>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar> ตารางเรียน/สอน </q-item-section>

          <span class="material-icons"> arrow_forward_ios </span>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar> เกณฑ์ประเมินผล </q-item-section>
          <span class="material-icons"> arrow_forward_ios </span>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
// import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "จัดการผู้ใช้",
    caption: "",
    icon: "person",
    link: "",
  },
  {
    title: "สิทธิ์โปรแกรม",
    caption: "",
    icon: "send",
    link: "",
  },
  {
    title: "จัดการผู้ใช้",
    caption: "",
    icon: "person",
    link: "",
  },
  {
    title: "สิทธิ์โปรแกรม",
    caption: "",
    icon: "send",
    link: "",
  },
  {
    title: "จัดการผู้ใช้",
    caption: "",
    icon: "person",
    link: "",
  },
  {
    title: "สิทธิ์โปรแกรม",
    caption: "",
    icon: "send",
    link: "",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const leftDrawersmallOpen = ref(false);
    const leftDrawerstudentOpen = ref(false);
    const leftDrawercourseOpen = ref(false);
    return {
      schools_model: ref(null),
      year_model: ref(null),
      essentialLinks: linksList,
      leftDrawerOpen,
      leftDrawersmallOpen,
      leftDrawerstudentOpen,
      leftDrawercourseOpen,
      link: ref("inbox"),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleLeftDrawersmall() {
        leftDrawersmallOpen.value = !leftDrawersmallOpen.value;
      },
      toggleLeftDrawersstudent() {
        leftDrawerstudentOpen.value = !leftDrawerstudentOpen.value;
      },
      toggleLeftDrawerscourse() {
        leftDrawercourseOpen.value = !leftDrawercourseOpen.value;
      },
      options: ["ออกจากระบบ"],
      schools: ["โรงเรียนประทาย"],
      year: ["ปีการศึกษา 2565"],
      drawer: ref(true),
      drawersmall: ref(true),
      drawersmall2: ref(true),
      miniState: ref(true),
    };
  },
});
</script>

<style lang="sass">
.my-menu-link
  color: white
  background: #F2C037
</style>
