<script>

import articles from "../store/modules/articles";

export default {
  computed: {
    articles() {
      return articles
    }
  },

  props: {
    cat: Object
  },
  methods: {
  },
}
</script>

<template>
<h3>
  {{ articles.heading}}
</h3>
</template>

