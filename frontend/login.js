const form = document.getElementById("login-form");

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));

  formData.set("password", sha256Password);

  console.log(formData.get("password"));

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  const accessToken = data.access_token;
  window.localStorage.setItem("token", accessToken);
  alert("로그인에 성공했습니다.");
  window.location.pathname = "/";

  //   const btn = document.createElement("button");
  //   btn.innerText = "상품 보기";
  //   btn.addEventListener("click", async () => {
  //     const res = await fetch("/items", {
  //       // 엑세스토큰을 넣어서 서버에 요청
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   });
  //   infoDiv.appendChild(btn);
};

form.addEventListener("submit", handleSubmit);
