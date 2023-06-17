<template>
  <div>
    <s-loading :load="loading" />
    <s-drawer wrapCard @refresh="refresh" :Meta="Meta" @update:modelValue="refresh" :table="Meta.table">
      <q-table virtual-scroll class="q-my-sm" :rows="table.rows" :columns="table.columns" row-key="id"
        selection="multiple" v-model:selected="table.selected" v-model:pagination="table.pagination"
        :style="$Static.table.height()" :dense="$Static.table.dense()" :flat="$Static.table.flat()"
        :color="$Static.table.color()" :rows-per-page-label="$Static.table.rowPerPageLabel()"
        :rows-per-page-options="$Static.table.rowPerPageOption()" :square="$Static.table.square()"
        :bordered="$Static.table.bordered()" binary-state-sort :visible-columns="table.visibleColumns" @request="getData"
        :loading="loading" :filter="table.search" :separator="$Static.table.separator()">
        <template v-slot:top>
          <s-top-table :Meta="Meta" :table="table" v-model="table.search" @delete="daleteData" :trash="trash"
            @trash="setTrash" @restore="restoreData" @add="addData" @seachReset="table.search = ''"
            @updateVisibilityColumn="(val) => table.visibleColumns = val"></s-top-table>
        </template>
        <template v-slot:header>
          <s-filter-table :vcolumn="table.visibleColumns" :columns="table.columns" @updateEvent="getData"
            v-model="filter.query" @selectedAll="(val) => table.selected = val ? table.rows : []" />
        </template>
        <template v-slot:body-cell-id="props">
          <q-td v-if="trash == true"> </q-td>
          <s-table-option v-else @show="detail(props.key)" @edit="edit(props.key)" :Meta="Meta" />
        </template>
      </q-table>
    </s-drawer>
  </div>
</template>
<script>

import Meta from "./meta"

export default {
  name: Meta.name,

  data() {
    return {
      Meta,
      table: Meta.table,
      loading: false,
      modal: false,
      trash: false,
      filter: {
        value: false,
        query: { like: '', orderBy: '' },
        visibleColumns: []
      },
    }
  },
  created() {
    this.table = this.$Handle.structureTable(
      this.table.columns(this.$Help, this.$Lang, this.Static)
    )
    if (this.$route.query.trash) this.trash = JSON.parse(this.$route.query.trash)
    if (this.$route.query.search) this.trash = JSON.parse(this.$route.query.search)
    if (this.$route.query.page) this.table.pagination = { ...this.$route.query }
    this.refresh()
  },
  methods: {
    refresh() {
      this.getData()
    },

    getData(props) {
      this.loading = true
      if (props) this.table.pagination = props.pagination
      let { page, rowsPerPage, sortBy, descending } = { ...this.table.pagination }
      let endpoint = this.Meta.module + "?table="
      endpoint += this.trash ? "&trash=true" : ""
      endpoint += "&like=" + this.filter.query.like
      endpoint += "&order=" + this.filter.query.orderBy
      endpoint += "&page=" + page
      endpoint += "&limit=" + rowsPerPage
      if (this.table.search) endpoint += "&search=" + this.table.search
      this.$api.get(
        endpoint,
        (data, status, message, full) => {
          if (status == 200) {
            this.table.rows = data.data.filter((val) =>
              this.trash && this.table.search ? val.deleted_at !== null : val
            )
            this.table.pagination.rowsNumber = this.table.search
              ? this.table.rows.length
              : data.total
            this.table.pagination.page = data.current_page
            this.table.pagination.rowsPerPage = data.per_page
            this.loading = false
          }
        },
        (e) => { }
      )
      this.$router.replace({ query: { ...this.table.pagination, search: this.table.search, trash: this.trash, }, })
    },
    async daleteData() {
      this.loading = true
      await this.table.selected.forEach((val) => {
        let endpoint = this.Meta.module
        endpoint += this.trash == true ? "/force/" : "/"
        endpoint += val.id
        this.$api.delete(endpoint, (data, status, message, full) => {
          this.$Handle.successMessage(message)
          this.table.selected = []
          this.refresh()
        })
      })
    },
    async restoreData() {
      this.loading = true
      await this.table.selected.forEach((val) => {
        let endpoint = this.Meta.module
        endpoint += "/restore/"
        endpoint += val.id
        this.$api.put(endpoint, val, (data, status, message, full) => {
          this.$Handle.successMessage(message)
          this.table.selected = []
          this.refresh()
        })
      })
    },
    setTrash() {
      this.trash = JSON.parse(this.trash)
      this.trash = !this.trash
      this.table.selected = []
      this.table.search = null
      this.table.pagination.page = 1
      this.table.pagination.rowsNumber = 1
      this.refresh()

    },
    detail(id) { this.$router.push({ params: { id }, name: "view-" + this.Meta.module, query: { ...this.$route.query } }) },

    edit(id) { this.$router.push({ params: { id }, name: "edit-" + this.Meta.module, query: { ...this.$route.query } }) },

    addData() { this.$router.push({ name: "add-" + this.Meta.module, query: { ...this.$route.query } }) },

    setFilter() {
      this.filter.value = true
      // this.left = !this.left
    },
  },
}
</script>
