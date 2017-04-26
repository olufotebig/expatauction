<template lang="html">
  <div class="navbar">
    <div class="navbar-top">
      <span class="brand">ExpatAuction</span>
    </div>
    <div class="navbar-nav">
      <router-link to="/" exact active-class="active" class="nav-item">
        <div>
          <symbol id="icon-home" viewBox="0 0 32 32">
            <title>home</title>
            <path d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"></path>
          </symbol>
          <svg class="icon icon-home"><use xlink:href="#icon-home"></use></svg>
        </div>
      </router-link>

      <router-link to="/auctions" exact active-class="active" class="nav-item">
        <div>
          <symbol id="icon-search" viewBox="0 0 32 32">
            <title>search</title>
            <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
          </symbol>
          <svg class="icon icon-search"><use xlink:href="#icon-search"></use></svg>
        </div>
      </router-link>

      <router-link to="/seller/auctions" exact active-class="active" class="nav-item">
        <div>
          <symbol id="icon-auction" viewBox="0 0 32 32">
            <title>auction</title>
              <path d="M31.338 25.66c-.697 1.232-2.29 1.458-3.295.58-.467-.41-.71-.977-.728-1.553C23.5 22.53 20.21 19.66 17.4 16.144l-.25.283c-.075.085-.204.094-.29.02l-1.305-1.144c-.085-.074-.215-.066-.29.02l-1.243 1.42c-.15.17-.408.187-.58.038l-5.837-5.11c-.17-.15-.187-.41-.04-.58l5.585-6.37c.15-.17.41-.184.58-.035l5.837 5.11c.17.15.188.41.04.58l-1.244 1.42c-.075.085-.066.214.02.29l1.304 1.14c.085.076.094.205.02.29l-.256.29c4.18 2.59 7.48 5.48 9.79 8.696.71-.073 1.46.205 1.95.86.5.66.56 1.585.15 2.306zm-19.874-4.91l-7.532-6.596c-.594-.52-.654-1.423-.134-2.018.52-.594 1.424-.654 2.02-.134l7.53 6.596c.594.52.654 1.424.134 2.018-.52.594-1.424.654-2.018.134zm9.893-11.297l-7.532-6.596c-.594-.52-.654-1.423-.134-2.018.52-.6 1.43-.66 2.02-.14l7.53 6.6c.6.52.66 1.42.14 2.02-.52.59-1.424.65-2.02.13zm-3.087 17.22c.05.93-.688 1.696-1.606 1.696H2.004C1.09 28.37.35 27.6.4 26.67c.044-.87.825-1.522 1.697-1.522h.597c.114 0 .205-.09.205-.204v-1.53c0-.227.18-.41.41-.41h12.05c.22 0 .41.183.41.41v1.53c0 .113.09.205.2.205h.594c.872 0 1.652.65 1.7 1.52z"/>
          </symbol>
          <svg class="icon icon-auction"><use xlink:href="#icon-auction"></use></svg>
        </div>
      </router-link>

      <router-link to="/messaging" exact active-class="active" class="nav-item">
        <div>
          <symbol id="icon-envelop" viewBox="0 0 32 32">
            <title>envelop</title>
            <path d="M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461 6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488 7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447 6.58 8.447h-19.579l6.58-8.447zM19.539 17.199l8.461-9.086v15.676l-8.461-6.59z"></path>
          </symbol>
          <svg class="icon icon-envelop"><use xlink:href="#icon-envelop"></use></svg>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.navbar {
  background: #1e88e5;
  box-shadow: 0 8px 24px -6px black;
  margin-bottom: 12px;

  .navbar-top{
    padding: 10px;
    height: 36px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar-nav{
    display: flex;
    align-items: center;
    height: 56px;

    .nav-item {
      color: #fff;
      font-size: 24px;
      display: flex;
      flex: 1 1 100%;
      align-items: center;
      justify-content: center;
      height: 56px;
    }

    .nav-item.active{
      height: 52px;
      border-bottom: 4px solid #fff;
    }
  }

}

.icon{
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.navbar .brand{
  font-size: 24px;
}
</style>
