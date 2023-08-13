<!-- <div>로그인</div>
<form id="login-form" action="/login" method="POST">
  <div>
    <label for="id">아이디</label>
    <input type="text" id="id" name="id" required />
  </div>
  <div>
    <label for="password">비밀번호</label>
    <input type="password" id="password" name="password" required />
  </div>
  <div>
    <button type="submit">로그인</button>
  </div>
  <div id="info" />

</form> -->
<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from "../store";

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      user$.set(user);
      window.localStorage.setItem("token", token);
    } catch (e) {
      console.error(e);
    }
  };
</script>

<div>
  {#if $user$}
    <div>{$user$?.displayName} 로그인 됨</div>
  {/if}
  <div>로그인</div>
  <button class="login-btn" on:click={loginWithGoogle}>
    <img
      class="google-img"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png"
      alt=""
    />
    <div>Google로 시작하기</div>
  </button>
</div>

<style>
  .login-btn {
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid gray;
    cursor: pointer;
    background-color: #fff;
    border-radius: 5px;
  }
  .google-img {
    width: 20px;
  }
</style>
