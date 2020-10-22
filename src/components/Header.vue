<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/webapp">WeatherApp</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/webapp/home">Main Page</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/webapp/settings">Settings</router-link>
          </li>        
        </ul>
        
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>