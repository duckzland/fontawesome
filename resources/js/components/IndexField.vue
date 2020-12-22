<template>
  <span class="fontawesome-index-icon">
    <i :class="field.value"></i>
  </span>
</template>

<script>
export default {
  props: ["resourceName", "field"],

  beforeMount() {
    const { library } = require("@fortawesome/fontawesome-svg-core");
    const far = require("@fortawesome/pro-regular-svg-icons").far;
    require("@fortawesome/fontawesome-free/js/fontawesome.js");

    library.add(far);
  },

  computed: {
    pro() {
      return this.field.pro || false;
    },
  },
};
</script>

<style>
.fontawesome-index-icon {
  font-size: 1.5em;
}

.fontawesome-index-icon svg {
  width: 1em !important;
  height: 1.5em !important;
}
</style>
