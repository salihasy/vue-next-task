<template>
  <paginate
    v-show="pageData.totalPages>1"
    v-model="page"
    :page-count="pageData.totalPages"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
  >
  </paginate>   
</template>

<script>
  import {mapState} from "vuex";
  import Paginate from 'vuejs-paginate-next';
  export default {
    name: "Pagination",
    components: {
      paginate: Paginate,
    },
    methods: {
      clickCallback (pageNum) {
        this.$store.dispatch('getEvents', {
        key: this.searchKeyword,   
        page : this.page
        })
      }
    },
    computed: mapState([
    'pageData', 'searchKeyword'
  ])
  }
</script>

<style lang="css">
  /* Adopt bootstrap pagination stylesheet. */
  @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

  /* Write your own CSS for pagination */
  .pagination {
      flex-direction: row;
      justify-content: center;
      background-color: #c7f3c7;
  }
  .page-item {
      
  }
</style>
