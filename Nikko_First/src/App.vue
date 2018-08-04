<template>
  <div id="app">
    <div>
        <h2>My DApp Store</h2>
    </div>
    <div>
      <di>
        <router-view></router-view>
      </di>
    </div>
    <div>
      <div class="bXwYKp">
        <div @click="openMask" align="center">blueBird</div>
        <dialog-bar v-model="sendVal" type="blueBird" title="blueBird" content="blueBird" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Delete"></dialog-bar>
      </div>
      <div class="bXwYKp">
        <div @click="openMask" align="center">Stellarball</div>
        <dialog-bar v-model="sendVal" type="danger" title="Stellarball" content="Stellarball" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Delete"></dialog-bar>
      </div>
      <div class="bXwYKp">
        <a><router-link to="/news">NEWS</router-link></a>
      </div>
    </div>
  </div>
</template>

<script>
import dialogBar from './components/dialog.vue'
export default {
  components: {
    'dialog-bar': dialogBar
  },
  data () {
    return {
      sendVal: false
    }
  },
  methods: {
    openMask (index) {
      this.sendVal = true
    },
    clickCancel () {
      console.log('点击了取消')
    },
    clickDanger () {
      console.log('这里是danger回调')
    },
    clickConfirm () {
      console.log('点击了confirm')
    }
  }
}

</script>

<style lang="less" scoped>
  .bXwYKp {
    cursor: pointer;
    display: flex;
    margin-bottom: 25px;
    box-shadow: rgba(192, 100, 239, 0.06) 0px 10px 25px 0px, rgba(0, 0, 0, 0.07) 0px 4px 12px 0px;
    background: rgb(255, 255, 255);
    padding: 25px;
    border-radius: 10px;
    text-align: center;
  }

  .eQHybn {
    font-size: 22px;
    font-weight: 700;
    color: rgb(0, 0, 0);
    margin: 0px 0px 10px;
  }

  p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }

  .gLJjKa {
    margin-right: 30px;
  }

  .ciFgqm {
    height: 128px;
    position: relative;
    width: 128px;
    border-radius: 8px;
    overflow: hidden;
  }
  div {
    display: block;
  }
</style>
