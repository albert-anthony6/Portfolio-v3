<template>
  <footer class="footer">
    <div class="footer-left">
      <a href="https://www.linkedin.com/in/avaldes21/" target="_blank"
        ><i class="fa fa-linkedin linkedin-link"
      /></a>
      <a href="https://github.com/albert-anthony6" target="_blank"
        ><i class="fa fa-github github-link"
      /></a>
    </div>
    <div class="footer-right">
      <p>Phone: <strong>901-265-2710</strong></p>
      <p>Email: <strong>valdesalbert21@gmail.com</strong></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: $black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 13vw;
  .linkedin-link,
  .github-link {
    background-color: $primary;
    border-radius: 50%;
    font-size: 1.8rem;
    padding: 0.8rem 1rem;
    cursor: pointer;
  }
  .linkedin-link {
    margin-right: 0.5rem;
  }
  .footer-right {
    text-align: right;
  }
}
</style>
