<template>
  <div class="">
    <q-layout view="hHh Lpr lff">
      <q-header elevated>
        <q-toolbar>
          <q-btn
            flat
            round
            dense
            icon="menu"
            class="q-mr-sm"
            @click="drawer = !drawer"
          />
          <q-separator dark vertical inset />
          <q-btn stretch flat label="SMS" />

          <q-space />

          <div class="" style="width: 150px">
            <q-select filled label="Filled" />
          </div>
          <div class="" style="width: 150px">
            <q-select filled label="Filled" />
          </div>

          <q-separator dark vertical />
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
          <q-btn-dropdown stretch flat label="นายธนวัฒน์ การนอก">
            <q-list>
              <!-- <q-item-label header>Folders</q-item-label> -->
              <q-item clickable to="/">
                <q-item-section avatar>
                  <q-avatar icon="logout" color="red" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>LOGOUT</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>
      </q-header>

      <div>
        <q-drawer
          v-model="drawer"
          show-if-above
          :mini="!drawer"
          :width="250"
          :breakpoint="500"
          bordered
          class="bg-grey-2"
        >
          <q-splitter v-model="splitterModel" style="height: 100%">
            <template v-slot:before>
              <q-tabs
                v-model="tab"
                vertical
                class="bg-grey-4"
                active-class="my-menu-link"
                active-color="black"
                indicator-color="transparent"
              >
                <q-tab name="school" icon="school" label="" />
                <q-tab name="account_box" icon="account_box" label="" />
                <q-tab name="menu_book" icon="menu_book" label="" />
                <q-tab name="grade" icon="grade" label="" />
                <q-tab name="work" icon="work" label="" />
                <q-tab name="emoji_events" icon="emoji_events" label="" />
                <q-tab name="checklist" icon="checklist" label="" />
                <q-tab name="equalizer" icon="equalizer" label="" />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <q-separator stretch flat />
                <q-tab name="settings" icon="settings" label="" stretch flat />
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="tab"
                animated
                swipeable
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
                class="bg-grey-2"
              >
                <q-tab-panel name="school" class="no-padding">
                  <q-list>
                    <q-expansion-item
                      group="somegroup"
                      label="ปีการศึกษา ชั้นปี"
                      default-opened
                    >
                      <q-item clickable v-ripple>
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar> ปีการศึกษา</q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar> จัดห้องเรียน </q-item-section>
                      </q-item>
                    </q-expansion-item>
                  </q-list>
                </q-tab-panel>
                <!-- ทะเบียนนักเรียน ทะเบียนบุคลากร -->
                <q-tab-panel name="account_box" class="no-padding">
                  <q-list>
                    <q-expansion-item
                      group="somegroup"
                      label="ทะเบียนนักเรียน"
                      default-opened
                    >
                      <q-item clickable v-ripple>
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar>
                          นักเรียนปัจจุบัน</q-item-section
                        >
                      </q-item>

                      <q-item clickable v-ripple>
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar>
                          นักเรียนสมัครใหม่
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-ripple>
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar>
                          นักเรียนย้ายเข้า/ย้ายออก/ลาออก
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-ripple>
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar>
                          นักเรียนประจำห้อง
                        </q-item-section>
                      </q-item>
                    </q-expansion-item>
                  </q-list>

                  <q-list>
                    <q-expansion-item group="somegroup" label="ทะเบียนบุคลากร">
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar> บุคคลปัจจุบัน</q-item-section>
                      </q-item>

                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar> บุคคลสมัครใหม่ </q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar>
                          บุคคลย้ายเข้า/ย้ายออก/ลาออก
                        </q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar> ผังองค์กร </q-item-section>
                      </q-item>
                    </q-expansion-item>
                  </q-list>
                </q-tab-panel>
                <!-- หลักสูตร -->
                <q-tab-panel name="menu_book" class="no-padding">
                  <q-list>
                    <q-expansion-item
                      group="somegroup"
                      label="หลักสูตร"
                      default-opened
                    >
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                        to="/subject"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar> วิชา</q-item-section>
                      </q-item>

                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                        to="/group"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar>
                          กลุ่มสาระการเรียนรู้
                        </q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                        to="/student_activities"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar>
                          กิจกรรมพัฒนาผู้เรียน
                        </q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                        to="/course_of_study"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar>
                          หลักสูตรแผนการเรียน
                        </q-item-section>
                      </q-item>
                    </q-expansion-item>
                  </q-list>

                  <!-- ดัชนีชี้วัด -->
                  <q-list>
                    <q-expansion-item group="somegroup" label="ดัชนีชี้วัด">
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >คุณลักษณะอันพึงประสงค์</q-item-section
                        >
                      </q-item>
                    </q-expansion-item>
                  </q-list>

                  <!-- ตารางเรียน/สอน -->
                  <q-list>
                    <q-expansion-item group="somegroup" label="ตารางเรียน/สอน">
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar>ตารางเรียน</q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar>ตารางสอบ</q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >ปฏิทินการเรียนการสอน</q-item-section
                        >
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar>ตารางกิจกรรม</q-item-section>
                      </q-item>
                    </q-expansion-item>
                  </q-list>

                  <!-- เกณฑ์ประเมินผล -->
                  <q-list>
                    <q-expansion-item group="somegroup" label="เกณฑ์ประเมินผล">
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar>ระดับผลดการเรียน</q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >อ่านคิดสิเคราะห์เขียน</q-item-section
                        >
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >คุณลักษณะอันพึงประสงค์</q-item-section
                        >
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >ประเภทการเข้าเรียน</q-item-section
                        >
                      </q-item>
                    </q-expansion-item>
                  </q-list>
                </q-tab-panel>

                <q-tab-panel name="grade" class="no-padding">
                  <q-list>
                    <q-list>
                      <q-expansion-item
                        group="somegroup"
                        label="รายงานผลการเรียน"
                        default-opened
                      >
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >รายงานผลการเรียน/สอบ</q-item-section
                          >
                        </q-item>

                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>
                            คะแนนกิจกรรมพัฒนาผู้เรียน
                          </q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>
                            คะแนนคุณลักษณะอันพึงประสงค์
                          </q-item-section>
                        </q-item>
                      </q-expansion-item>
                    </q-list>

                    <!-- ดัชนีชี้วัด -->
                    <q-list>
                      <q-expansion-item group="somegroup" label="แจ้งผลสอบ">
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>ผลคะแนน</q-item-section>
                        </q-item>

                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >รายชื่อนักเรียน มส</q-item-section
                          >
                        </q-item>

                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >รายชื่อนักเรียนไม่ผ่าน</q-item-section
                          >
                        </q-item>

                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>ผลคะแนนสอบซ่อม</q-item-section>
                        </q-item>
                      </q-expansion-item>
                    </q-list>

                    <!-- ตารางเรียน/สอน -->
                    <q-list>
                      <q-expansion-item
                        group="somegroup"
                        label="ออกหลักฐานการศึกษา"
                      >
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>ปพ.1</q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>ปพ.2</q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>ปพ.3</q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>ปพ.4</q-item-section>
                        </q-item>

                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>ปพ.5</q-item-section>
                        </q-item>

                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>ปพ.6</q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>ปพ.7</q-item-section>
                        </q-item>
                      </q-expansion-item>
                    </q-list>
                  </q-list>
                </q-tab-panel>

                <!-- work -->

                <q-tab-panel name="work" class="no-padding">
                  <q-list>
                    <q-list>
                      <q-expansion-item
                        group="somegroup"
                        label="สินทรัพย์ ครุภัณฑ์"
                        default-opened
                      >
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >ทะเบียนสินทรัพย์</q-item-section
                          >
                        </q-item>
                      </q-expansion-item>
                    </q-list>
                  </q-list>
                </q-tab-panel>

                <!-- ผลงานและรางวัล -->
                <q-tab-panel name="emoji_events" class="no-padding">
                  <q-list>
                    <q-list>
                      <q-expansion-item
                        group="somegroup"
                        label="ผลงานและรางวัล"
                        default-opened
                      >
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>รางวัลโรงเรียน</q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>รางวัลบุคคล</q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>รางวัลนักเรียน</q-item-section>
                        </q-item>
                      </q-expansion-item>
                    </q-list>
                  </q-list>
                </q-tab-panel>

                <!-- ประเมินสมรรถนะผู้เรียน -->
                <q-tab-panel name="checklist" class="no-padding">
                  <q-list>
                    <q-list>
                      <q-expansion-item
                        group="somegroup"
                        label="ประเมินสมรรถนะผู้เรียน"
                        default-opened
                      >
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >สมรรถนะผู้เรียน</q-item-section
                          >
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >ผลประเมินโดยเพื่อน</q-item-section
                          >
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >ผลประเมินโดยครู</q-item-section
                          >
                        </q-item>
                      </q-expansion-item>
                    </q-list>
                    <q-list>
                      <q-expansion-item
                        group="somegroup"
                        label="งานครูประจำชั้น"
                      >
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >นักเรียนมา ลา ขาด</q-item-section
                          >
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >ประเมินคุณลักษณะอันพึงประสงค์</q-item-section
                          >
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >ประเมินอ่าน คิด วิเคราะห์ เขียน</q-item-section
                          >
                        </q-item>
                      </q-expansion-item>
                    </q-list>
                    <q-list>
                      <q-expansion-item group="somegroup" label="งานครูผู้สอน">
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>ตารางสอน</q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >บันทึกเวลาเรียน</q-item-section
                          >
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >บันทึกผลการเรียน</q-item-section
                          >
                        </q-item>
                      </q-expansion-item>
                    </q-list>
                  </q-list>
                </q-tab-panel>

                <!-- จัดการเรียนการสอน -->
                <q-tab-panel name="equalizer" class="no-padding">
                  <q-list>
                    <q-list>
                      <q-expansion-item
                        group="somegroup"
                        label="จัดการเรียนการสอน"
                        default-opened
                      >
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>จำนวนนักเรียน</q-item-section>
                        </q-item>
                      </q-expansion-item>
                    </q-list>
                    <q-list>
                      <q-expansion-item
                        group="somegroup"
                        label="ข้อมูลนักเรียน"
                      >
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>ผลการเรียน</q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >นักเรียนรับเข้า จบออก ลาออก</q-item-section
                          >
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>ทุนการศึกษา</q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >เด็กพิเศษเรียนรวม</q-item-section
                          >
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >ความสามารถพิเศษ</q-item-section
                          >
                        </q-item>
                      </q-expansion-item>
                    </q-list>
                    <q-list>
                      <q-expansion-item group="somegroup" label="ครู บุคลากร">
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>จำนวนบุตลากร</q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >ข้อมูลทะเบียนบุคลากร</q-item-section
                          >
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >บันทึกผลการเรียน</q-item-section
                          >
                        </q-item>
                      </q-expansion-item>
                    </q-list>
                  </q-list>

                  <q-list>
                    <q-expansion-item
                      group="somegroup"
                      label="สำนักการศึกษา ศาสนา และวัฒนรรม"
                    >
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >ประเพณี ศิลปะ และวัฒนธรรม</q-item-section
                        >
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >แต่งตั้งคณะกรรมการ</q-item-section
                        >
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >ปฏิทินการปฏิบัติงาน</q-item-section
                        >
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >ผลงาน กิจกรรมโครงการ</q-item-section
                        >
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >พัสดุและทรัพย์สิน</q-item-section
                        >
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >งบประมาณและแผนพัฒนา</q-item-section
                        >
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >ประกันคุณภาพการศึกษา</q-item-section
                        >
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar>จัดอบรมครู</q-item-section>
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >คูนย์พัฒนาวิชาการ</q-item-section
                        >
                      </q-item>
                      <q-item
                        clickable
                        v-ripple
                        @click="link = 'inbox'"
                        active-class="my-menu-link1"
                      >
                        <span class="material-icons"> play_arrow </span>

                        <q-item-section avatar
                          >รางวัลและผลงานโรงเรียน</q-item-section
                        >
                      </q-item>
                    </q-expansion-item>
                  </q-list>
                </q-tab-panel>

                <!-- การตั้งค่า -->
                <q-tab-panel name="settings" class="no-padding">
                  <q-list>
                    <q-list>
                      <q-expansion-item
                        group="somegroup"
                        label="การตั้งค่า"
                        default-opened
                      >
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >รายละเอียดโรงเรียน</q-item-section
                          >
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar
                            >อาคาร และ ห้องเรียน</q-item-section
                          >
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          @click="link = 'inbox'"
                          active-class="my-menu-link1"
                        >
                          <span class="material-icons"> play_arrow </span>

                          <q-item-section avatar>ผู้ใช้งาน</q-item-section>
                        </q-item>
                      </q-expansion-item>
                    </q-list>
                  </q-list>
                </q-tab-panel>
              </q-tab-panels>
            </template>
          </q-splitter>
        </q-drawer>
      </div>
      <q-page-container class="bg-grey-2">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const miniState = ref(true);
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      drawer: ref(false),
      miniState,
      tab: ref("school"),
      splitterModel: ref(20),

      toolbar: ref(false),
      link: "inbox",

      toggleLeftDrawer(e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false;

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation();
        }
      },
      drawerClick(e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false;

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation();
        }
      },
    };
  },
};
</script>

<style lang="sass">
.my-menu-link
  background: $grey-2
</style>
<style lang="sass">
.my-menu-link1
  background: $blue-2
</style>
