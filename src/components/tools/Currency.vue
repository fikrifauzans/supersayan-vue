<template>
  <q-field :label="label" :dense="dense === false ? false : true" :model-value="modelValue"
    :rules="required == '' ? [(val) => !!val || 'Field is required'] : false" outlined :prefix="prefix"
    :class="`q-absolute_label col-12 col-sm-6 col-md-${col} q-px-xs q-mb-lg`" :readonly="readonly == ''"
    :color="color ? color : 'primary'">

    <template v-slot:control="{ id, floatingLabel }">
      <money :id="id" class="q-field__input text-right" :model-value="modelValue" v-bind="moneyFormatForComponent"
        v-show="floatingLabel" @update:model-value="(value) => {
          if (max && parseInt(value) >= max) $emit('update:modelValue', max)
          else { $emit('update:modelValue', parseInt(value)); $emit('updateEvent'); }
        }
          " :readonly="readonly == ''" />
    </template>
  </q-field>
</template>
<script>
import { Money3Component } from "v-money3";
export default {
  props: [
    "label",
    "type",
    "dense",
    "col",
    "modelValue",
    "disabled",
    "readonly",
    "currency",
    "prefix",

    "color",
    "max",
    "topLabel",
  ],
  components: { money: Money3Component },
  name: "InputText",
  data() {
    return {
      text: null,
      price: null,
      moneyFormatForComponent: {
        thousands: ",",
        precision: 0,
        masked: false,
      },
    };
  },
  watch: {
    modelValue(value) {

    }
  }
};
</script>
<style></style>
