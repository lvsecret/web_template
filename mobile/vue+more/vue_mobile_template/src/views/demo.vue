<!--  -->
<template>
  <div class="mica">
    <h1>taohouzi</h1>
    <button @click="getList">得到学生列表</button>
    <input type="text" v-model="phone">
    <input type="text" v-model="pass">
    <button @click="login">登录</button>
    <div class="minx">
      <h1>ppppppp</h1>
    </div>
  </div>
</template>

<script>
// import api from '@/common/request.js'
import api from "@/api/common.js";
import {sessionSetItem} from '@/common/util.js'
import phones from '@/filters/index.js'
export default {
  data() {
    return {
      phone: "",
      pass: ""
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {
    getList() {
      // api.post('/homepage/banners').then(res=>{
      //     console.log(res)
      // })
      api.getBanner().then(res => {
        // console.log(res);
        // sessionSetItem("banner",res.data)
        // console.log(phones.formatPhone(13237119871))
      });
    },

    login() {
      let params = {
        phone: this.phone,
        pass: this.pass
      };
      api.login(params).then(res => {
        console.log(res);
        sessionSetItem("LoginToken", res.data.token_sc);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mica {
  width: 300px;
  height: 300px;
  background-color: saddlebrown;
  .minx{
    color: $color-error;
    width: 100px;
  }
}
</style>
