import BackTop from "components/content/backTop/backTop"
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {

    backTop() {
      this.$refs.scroll.scrollTop(0, 0);
    },
  }
}
