<template>
  <div>
    <q-card   :class="`fit bg-transparent q-px-md shadow-1`">
      <div class="row col-12">

        <div :class="disableShadow == ''
          ? 'col-12 content-form bg-white'
          : 'col-12  content-form bg-white'
          ">
          <div class="row  q-pa-md col-12">
            <div class="text-bold text-h6 text-dark q-mb-lg " v-if="title">
              {{ title }}
            </div>
            <div class="col-12 row">
              <slot />

            </div>
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>
<script>
export default {
  props: ["title", "col", "icon", "disableShadow"],
};
</script>
<style lang="scss">
.content-form {
  border-radius: 20px;
  padding: 10px;
}
</style>
