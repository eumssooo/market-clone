<script>
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  //     const hour = now.getHours.toString().padStart(2, "0");
  //   const minute = now.getMinutes.toString().padStart(2, "0");

  setInterval(() => now, 1000);
</script>

<div class="media-info-msg">화면 사이즈를 줄여주세요</div>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{minute}</div>
    <div class="info-bar__icons">
      <img src="assets/chart-bar.svg" alt="chart-bar" />
      <img src="assets/wi-fi.svg" alt="wi-fi" />
      <img src="assets/battery.svg" alt="battery" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__location">
      역삼1동
      <div class="menu-bar__location-icon">
        <img src="assets/chevron-down.svg" alt="chevron-down" />
      </div>
    </div>
    <div class="menu-bar__icons">
      <img src="assets/magnifying-glass.svg" alt="magnifying-glass" />
      <img src="assets/menu.svg" alt="menu" />
      <img src="assets/alert.svg" alt="alert" />
    </div>
  </div>
</header>

<main>
  <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<footer>
  <div class="footer-block">
    <div class="footer-icons">
      <div class="footer-icons__img"><img src="assets/home.svg" /></div>
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
