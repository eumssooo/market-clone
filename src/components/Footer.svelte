<script>
  export let location;
  const moveToHome = () => {
    window.location.hash = "/";
  };
</script>

<footer>
  <div class="footer-block">
    <div class="footer-icons" on:click={moveToHome}>
      <div class="footer-icons__img">
        {#if location === "home"}
          <img src="assets/home.svg" />
        {:else}
          <img src="assets/home-notfilled.svg" />
        {/if}
      </div>
      <div class="footer-icons__desc">홈</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img"><img src="assets/doc.svg" /></div>
      <div class="footer-icons__desc">동네생활</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img"><img src="assets/location.svg" /></div>
      <div class="footer-icons__desc">내 위치</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img"><img src="assets/chat.svg" /></div>
      <div class="footer-icons__desc">채팅</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img"><img src="assets/user.svg" /></div>
      <div class="footer-icons__desc">내 당근</div>
    </div>
  </div>
</footer>
