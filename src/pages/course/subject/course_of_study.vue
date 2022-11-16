<template>
  <q-page class="q-pa-sm" style="min-height: 100vh">
    <q-card>
      <q-card-section class="row q-pa-md">
        <q-btn
          color="primary"
          icon="add"
          label="เพิ่มหลักสูตรแผนการเรียน"
          style="max-width: 300px"
          to="/add_subject"
        />
      </q-card-section>
      <q-card-section class="row q-pa-md">
        <q-input
          square
          standout
          v-model="text"
          label="หลักสูตร"
          style="max-width: 300px"
        />
        <q-input
          square
          standout
          class="q-ml-md"
          v-model="text"
          label="หน่วยกิจกรรม"
          style="max-width: 300px"
        />
        <q-btn
          color="primary"
          class="on-left"
          icon="search"
          label="ค้นหา"
          style="position: absolute; right: 0"
        />
      </q-card-section>
    </q-card>

    <q-card class="q-mt-md row">
      <div id="q-app" style="width;: 100%">
        <div class="">
          <q-table
            title=""
            :rows="rows"
            :columns="columns"
            row-key="name"
            selection="multiple"
            v-model:selected="selected"
          >
            <template v-slot:body-cell-action="props">
              <q-td :props="props">
                <q-btn
                  size="md"
                  color="blue-3"
                  text-color="blue-8"
                  @click="props.expand = !props.expand"
                  label="แก้ไข"
                  class="q-mr-sm"
                ></q-btn>
                <q-btn
                  size="md"
                  outline
                  color="red-8"
                  text-color="red-8"
                  @click="props.expand = !props.expand"
                  label="ลบ"
                ></q-btn>
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";

const columns = [
  {
    name: "number",
    required: true,
    label: "ลำดับ",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "code",
    align: "center",
    label: "รหัส",
    field: "code",
    sortable: true,
  },
  {
    name: "name_subject",
    label: "ชื่อวิชา",
    field: "name_subject",
    sortable: true,
  },
  { name: "group", label: "กลุ่มสาระ", field: "group" },
  { name: "type", label: "ประเภท", field: "type" },
  { name: "sodium", label: "หน่วยกิจ", field: "sodium" },
  {
    name: "period",
    label: "คาบ/สัปดาห์",
    field: "period",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "class",
    label: "ระดับชั้น",
    field: "class",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "sector",
    label: "ภาค",
    field: "sector",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "status",
    label: "สถานะ",
    field: "status",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  { name: "action", label: "", field: "action" },
];
const rows = [
  {
    name: "1",
    code: "n101",
    name_subject: "ภาษาไทย 1",
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
];
export default {
  name: "Subject-",
  setup() {
    const selected = ref([]);
    return {
      selected,
      columns,
      rows,
      getSelectedString() {
        return selected.value.length === 0
          ? ""
          : `${selected.value.length} record${
              selected.value.length > 1 ? "s" : ""
            } selected of ${rows.length}`;
      },
    };
  },
};
</script>
<style lang="sass">
edit
  color: $red-1
  background-color: $grey-5
</style>
