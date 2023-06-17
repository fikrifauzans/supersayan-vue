<template>
  <div class="col-12 row q-mb-md relative-position">
    <div :class="$q.screen.lt.md ? 'row col-12 justify-end items-start' : 'row col-12 justify-between items-start'">
      <div :class="$q.screen.lt.md ? 'row   col-12 relative-position' : 'row   '">
        <q-item :class="$q.screen.lt.md ? 'q-pa-none text-dark col-12' : 'q-pa-none text-dark'" color="primary" v-ripple>
          <q-item-section>
            <!-- <q-item-label caption>{{ Meta ? Meta.module_name : "" }}</q-item-label> -->
            <q-item-label class="text-h6 text-bold q-mt-sm">Tabel {{ title ? title : Meta ? Meta.name : "" }}
            </q-item-label>
            <div>
              <slot name="description" />
              <div class="top-table-description">
                {{ description ? description : Meta ? Meta.description : "" }}
              </div>
            </div>
            <div class="row items-center">
              <!-- Add  -->
              <div :class="$q.screen.lt.md ? 'q-mt-md  ' : 'q-mt-md'">
                <t-button v-if="!Meta.hide_add &&
                  this.$Handle.checkPermission(Meta.module + '-store')
                " :label="$q.screen.lt.md ? 'Tambah' : `Tambah ${Meta.name}`" size="md" icon="add" active="true"
                  :class="$q.screen.lt.md ? 'absolute-top-right' : ''" @click="$emit('add')" />
              </div>
            </div>
          </q-item-section>
        </q-item>
        <div class="q-ml-md">
          <q-btn
            v-if="trash && table && table.selected.length > 0 && this.$Handle.checkPermission(Meta.module + '-restore')"
            icon="settings_backup_restore" size="sm" rounded round class="bg-grey q-mt-sm text-white q-mr-xs"
            @click="modalConfirm.restore = !modalConfirm.restore">
            <q-tooltip> Restore </q-tooltip>
          </q-btn>
          <!-- # DELETE  -->
          <q-btn
            v-if="!Meta.hide_delete && table && table.selected.length > 0 && this.$Handle.checkPermission(Meta.module + '-destroy')"
            icon="delete" size="sm" rounded round class="bg-negative q-mt-sm text-white"
            @click="modalConfirm.delete = !modalConfirm.delete">
            <q-tooltip v-if="trash == false"> Delete </q-tooltip>
            <q-tooltip v-else> Permanent Delete </q-tooltip>
          </q-btn>
        </div>
      </div>

      <div
        :class="$q.screen.lt.md ? ' row items-center justify-between q-mt-sm' : 'row items-center justify-between q-mt-sm'">
        <div class="row items-center relative-position">
          <!-- # SEARCH TABLE  -->
          <div>
            <!-- <q-btn-dropdown color="dark" size="md" flat icon="img:images/icons/settings.svg" menu-anchor="top left"> -->
            <div class="row q-pa-xs q-gutter-sm">

              <!-- # TRASH -->
              <div>
                <q-btn v-if="trash" noCaps unelevated="" size=xs label="Trash" color="negative" class="q-mr-md" />
                <q-btn v-if="this.$Handle.checkPermission(Meta.module + '-bin')" icon="recycling" :class="trash == true
                  ? 'bg-grey- text-primary '
                  : 'bg-primary text-white '
                " @click="getTrash" size="sm" rounded flat round>
                  <q-tooltip> Recycle Bin </q-tooltip>
                </q-btn>
              </div>

              <!-- # EXPORT  -->
              <q-btn v-if="this.$Handle.checkPermission(Meta.module + '-csv')" color="dark" round flat size="sm" rounded
                icon="archive" no-caps @click="$Handle.exportTable(table.columns, table.rows)">
                <q-tooltip> Export CSV </q-tooltip>
              </q-btn>
              <div>
                <q-btn-dropdown icon="filter_list" size="sm" unelevated="" flat color="primary">
                  <div class="column no-wrap q-pa-md">
                    <q-toggle v-for="(item, index ) in table.columns" :key="index" :label="item.label"
                      v-model="invisbleColumn[index]" :true-value="item.name"
                      @update:modelValue="() => $emit('updateVisibilityColumn', invisbleColumn)" />
                  </div>
                </q-btn-dropdown>
              </div>
            </div>

          </div>
          <div>
            <q-input outlined :model-value="modelValue" @keyup.prevent="handleKeypress" @update:modelValue="(val) => {
              $emit('update:modelValue', val);
              $emit('refresh');
            }
            " label="Search Table" dense class="q-absolute_label q-ml-sm">
              <template v-slot:append>
                <div>
                  <q-btn icon="cancel" flat v-if="modelValue != null && modelValue !== ''" @click="seachReset"
                    class="q-pa-xs" size="md" rounded />
                  <q-icon name="search" v-else />
                </div>
              </template>
            </q-input>
          </div>

        </div>
      </div>
    </div>

    <div class=" row col-12 justify-between items-center">
      <!-- MODAL CONFIRM DELETE -->
      <q-dialog v-model="modalConfirm.delete">
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-h6">
              {{ trash == true ? "Delete Permanent" : "Delete Data" }}
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none" v-if="trash == false">
            are you sure you want to delete the data ?
          </q-card-section>
          <q-card-section class="q-pt-none" v-else>
            are you sure you want to delete the data permanently ?
          </q-card-section>
          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn v-if="table && table.selected.length > 0" label="Delete" size="md" rounded square flat
              class="q-ma-xs q-px-lg bg-negative text-white" @click="deleteTirgger" />
            <q-btn v-if="table && table.selected.length > 0" label="Cancel" size="md" rounded square flat
              class="q-ma-xs q-px-lg bg-grey text-white" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="modalConfirm.restore">
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-h6">Restore Data</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            are you sure you want to restore the data ?
          </q-card-section>
          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn v-if="table && table.selected.length > 0" label="Restore" size="md" rounded square flat
              class="q-ma-xs q-px-lg bg-warning text-white" @click="restoreTrigger" />
            <q-btn v-if="table && table.selected.length > 0" label="Cancel" size="md" rounded square flat
              class="q-ma-xs q-px-lg bg-grey text-white" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>



    </div>

  </div>
</template>
<script>
export default {
  props: ["trash", "modelValue", "table", "filter", "Meta", "title"],
  created() {

    // # Ivisible Column Table 
    if (this.Meta && this.Meta.table && this.Meta.table.columns()) {
      const columns = this.Meta.table.columns()
      this.invisbleColumn = (columns.map((v) => v.name));
    }
  },
  data() {
    return {
      modalConfirm: { delete: false, restore: false },
      invisbleColumn: [],
      columns: []
    };
  },
  methods: {
    deleteTirgger() {
      this.modalConfirm.delete = false;
      this.$emit("delete");
    },
    restoreTrigger() {
      this.modalConfirm.restore = false;
      this.$emit("restore");
    },
    getTrash() {
      this.$emit("trash");
    },
    seachReset() {
      this.$emit("seachReset");
    },
    handleKeypress(event) {
      event.preventDefault();
    },
  },
};
</script>
