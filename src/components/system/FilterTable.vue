<template>
    <q-tr class="col-12">
        <q-th align="left">
            <q-checkbox v-model="selectedAll" @click="$emit('selectedAll', selectedAll)" />
        </q-th>
        <q-th v-for="(item, index) in columns" :key="index" :align="item.align" class="q-py-lg"
            :auto-width="item.field == 'id' ? false : undefined"
            :style="item.field == 'id' ? 'width: 120px !important;' : '' "
            v-show="vcolumn.filter((v) => v == item.name).length > 0">
            <div class="q-pt-md q-mb-sm cursor-pointer" @click="setSortBy(item.name)">{{ item.label }} <span>
                    <q-icon name="sort" /></span>
                <span style="font-size: 6px;" v-if="item.name == sortByColumn">{{ sortBy }}</span>
            </div>
            <div class="q-pb-sm">
                <q-input dense input-style="padding:0" outlined="" v-model="filterValue.query[item.name].value"
                    @update:model-value="() => updateValue()" />
            </div>
        </q-th>
    </q-tr>
</template>
<script>
export default {
    props: [
        'columns',
        'vcolumn',
        'modelValue',
        'visibilitiColumns'
    ],
    created() {
        let filterKey = { query: {} }
        this.columns.forEach((element) => {
            filterKey.query[element.name] = {}
            filterKey.query[element.name]['value'] = null
            filterKey.query[element.name]['type'] = element && element.type ? element.type : null
        });
        this.filterValue = filterKey


    },
    data() {
        return {
            filterValue: {},
            selectedAll: false,
            sortByColumn: 'id',
            sortBy: 'ASC'
        }
    },
    methods: {
        updateValue() {

            // ### Like Query 
            let endpoint = ''
            let like = []
            for (const key in this.filterValue.query) {
                if (this.filterValue.query.hasOwnProperty(key)) {
                    if (this.filterValue.query[key].value != null
                        && this.filterValue.query[key].value != ''
                        && this.filterValue.query[key].type == null) {
                        like.push(`${key}:${this.filterValue.query[key].value}`);
                    }
                }
            }
            like = like.join('|')

            // ### orderBy Query 
            let orderBy = `${this.sortByColumn}:${this.sortBy}`

            this.$emit('update:modelValue', { like, orderBy })
            this.$emit('updateEvent')
        },

        setSortBy(columnName) {
            this.sortByColumn = columnName
            this.sortBy = this.sortBy == 'ASC' ? 'DESC' : 'ASC'
            this.updateValue()

        }
    }
}
</script>
<style lang="">
    
</style>