<template>
  <q-layout view="hHh Lpr lFf">
    <q-page-container class="bg-grey-2">
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <div class="col-md-12 col-xs-12">
                  <center>
                    <i
                      class="material-icons text-green-10"
                      style="
                        border-radius: 100px;
                        background: #fff;
                        font-size: 100px;
                        margin-top: -35px;

                        border: solid #fff 2px;
                      "
                      >account_circle</i
                    >
                  </center>
                  <div class="q-pa-md">
                    <!-- <div
                      class="text-h6 q-pb-md text-blue-8 text-center text-weight-bolder"
                    >
                      เข้าสู่ระบบ
                    </div> -->
                    <q-form
                      class="q-gutter-md"
                      @submit="onSubmit"
                      @reset="onReset"
                    >
                      <q-input
                        filled
                        v-model="name"
                        label="Username"
                        lazy-rules
                      />

                      <q-input
                        filled
                        type="password"
                        v-model="password"
                        label="Password"
                        lazy-rules
                      />
                      <center>
                        <div class="">
                          <q-btn label="ยกเลิก" type="reset" color="red" />
                          <q-btn
                            label="เข้าสู่ระบบ"
                            type="submit"
                            color="primary"
                            class="q-ma-md"
                          />
                        </div>
                      </center>
                    </q-form>
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "q-Login",

  data() {
    return {
      name: null,
      password: null,
    };
  },
  methods: {
    onSubmit() {
      console.log("click submit");
      this.$router.push("/main");
    },
    onReset() {
      this.name = null;
      this.password = null;
    },
  },
});
</script>
