<template>
  <panel-item :field="field">
    <span slot="value" class="fontawesome-index-icon">
      <i :class="field.value"></i>
    </span>
  </panel-item>
</template>

<script>
export default {
  props: ["resource", "resourceName", "resourceId", "field"],

  beforeMount() {
    const { library } = require("@fortawesome/fontawesome-svg-core");
    const fab = require("@fortawesome/free-brands-svg-icons").fab;
    const far = require("@fortawesome/free-regular-svg-icons").far;
    require("@fortawesome/fontawesome-free/js/fontawesome.js");

    library.add(far, fab);
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
  width: 1.5em;
  height: 1.5em;
}
</style>
