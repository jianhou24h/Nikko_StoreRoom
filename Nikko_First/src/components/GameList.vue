<template id="gamelist">
<div>
  <h1>game List</h1>
  <div>
    <ul>
      <a><router-link to="/lol">英雄联盟</router-link></a><br>
      <a><router-link to="/wzry">王者荣耀</router-link></a><br>
      <a><router-link to="/sc">星际争霸</router-link></a>
    </ul>
  </div>
  <p>This is the game list.</p>
</div>
</template>
<script>
export default {
  '/gamelist': 'Gamelist'
}
</script>
