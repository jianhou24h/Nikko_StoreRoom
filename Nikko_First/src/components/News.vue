<template id="news">
<div>
  <h1>Today NEWS</h1>
  <div>
    <ul>
      <a><router-link to="/btc">比特币</router-link></a><br>
      <a><router-link to="/lth">莱特币</router-link></a><br>
      <a><router-link to="/eth">以太坊</router-link></a>
    </ul>
  </div>
  <p>THE TIMES OF MYDAPP</p>
</div>
</template>
<script>
export default {
  '/news': 'News'
}
</script>
