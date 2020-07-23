<template>
  <div>
    Home component
    <el-row>
      <el-button type="info" @click="logout">Logout</el-button>
    </el-row>
  </div>
</template>

<script type="text/javascript">
export default {
  data: function () {
    return {
    }
  },
  methods: {
    logout: function () {
      window.sessionStorage.removeItem('vuesptoken')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
