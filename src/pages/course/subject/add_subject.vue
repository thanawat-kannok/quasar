<template>
  <q-page class="q-pa-sm bg-white">
    <q-card class="">
      <div class="q-pa-md">
        <div class="row q-col-gutter-sm">
          <div class="col-6">
            <div class="col">
              <q-input filled v-model="text" stack-label :dense="dense">
                <template v-slot:before>
                  <div style="width: 200px">รหัส*</div></template
                >
              </q-input>
            </div>
          </div>
          <div class="col-6">
            <div class="col">
              <q-input filled v-model="text" stack-label :dense="dense">
                <template v-slot:before>
                  <div style="width: 200px">ชื่อวิชา*</div></template
                >
              </q-input>
            </div>
          </div>
          <div class="col-6">
            <div class="col">
              <q-input
                filled
                v-model="text"
                label="Label (stacked)"
                stack-label
                :dense="dense"
              >
                <template v-slot:before>
                  <div style="width: 200px"></div
                ></template>
              </q-input>
            </div>
          </div>
          <div class="col-6">
            <div class="col">
              <q-input
                filled
                v-model="text"
                label="Label (stacked)"
                stack-label
                :dense="dense"
              >
                <template v-slot:before>
                  <div style="width: 200px"></div
                ></template>
              </q-input>
            </div>
          </div>
          <div class="col-6">
            <div class="col">
              <q-input
                filled
                v-model="text"
                label="Label (stacked)"
                stack-label
                :dense="dense"
              >
                <template v-slot:before>
                  <div style="width: 200px"></div
                ></template>
              </q-input>
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "add_subject",
  setup() {
    return {
      step: ref(1),
      address_detail: ref({}),
      card_detail: ref({}),
    };
  },
});
</script>

<style lang="sass" scoped>
.my-content
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
</style>
