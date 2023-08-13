<script>
  import Footer from "../components/Footer.svelte";
  import { user$ } from "../store";

  const logout = () => {
    user$.set(null);
    localStorage.removeItem("token");
  };
</script>

<div>나의 당근</div>
<button on:click={logout}> 로그아웃 </button>

<Footer location="my" />

<style>
  button {
    border: none;
    background-color: #fe6f0f;
    color: white;
    padding: 10px 15px;
    border-radius: 25px;
    font-size: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
    transition: all 1s ease-in-out;
    text-decoration: none;
  }
</style>
