<template>
  <div>
    <s-loading :load="loading" />
    <s-drawer @refresh="refresh" :useModal="useModal" form detail :Meta="Meta" @back="back">
      <div class="row">
        <div class="row col-12">
          <s-form class="q-px-md py-sm q-mt-lg col-6">
            <div class="col-12">
              <div class="text-bold">Users</div>
              <t-list :list="mainList" />
            </div>
            <div class="col-12">
              <div class="text-bold q-mt-md">Roles</div>
              <t-list :list="roleList" />
            </div>
          </s-form>
        </div>
      </div>
    </s-drawer>
  </div>
</template>

<script>
import Meta from "./meta"

export default {
  name: Meta.name + 'Detail',
  props: ["modal", "id", "submitOnModal"],
  created() {
    this.$Handle.loadingStart()
    if (this.modal && this.modal.show === true) this.useModal = true
    if (this.$route.params.id) {
      this.param = this.$route.params.id ? this.$route.params.id : null
    }
    if (this.id) this.param = this.id ? this.id : null
    if (this.param) this.findId(this.param)
    else this.$Handle.loadingStop()
  },
  data() {
    return {
      Meta,
      useModal: false,
      model: Meta.model,
      mainList: null,
      roleList:null,
      loading: false,
      param: null,
      setup: {
        destroy: ["id", "deleted_at", "created_at", "updated_at", "role_id", 'is_customer', 'avatar_id', 'created_by', 'updated_by' ,'school' ,'role' ,'avatar' ,'class' ,'class_id' ,'class_id' ,'school_id' ,'deleted_by'],
        money: [],
        date: [],
      },
    }
  },

  watch: {},
  methods: {
    findId(id) {
      let endpoint = Meta.module + "/" + id
      this.$api.get(endpoint, (data, status, message, full) => {
        if (status == 200) {
          // data.class_name = data.class.name
          let dataList = {
            ...data,
            school_name: data.school && data.school.name ? data.school.name : '',
            class_name: data.class && data.class.name ? data.class.name : '',

          }
  
          this.mainList = this.$Help.transformList(dataList, this.setup)
          this.roleList = this.$Help.transformList(dataList.role, {destroy:['master_menu_id' ,'master_menu' ,'permission_access_index' ,'updated_by']})

          this.$Handle.loadingStop()
        }
      })
    },
    back() {
      if (this.useModal == true) this.$emit("closeModal")
      else
        return this.$router.push({ name: Meta.module, query: { ...this.$route.query } })
    },
  },
}
</script>
