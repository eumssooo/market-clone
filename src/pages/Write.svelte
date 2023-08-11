<script>
  import { getDatabase, ref, push } from "firebase/database";
  import Footer from "../components/Footer.svelte";
  import {
    getStorage,
    ref as refImage,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";

  let title;
  let price;
  let description;
  let place;
  let files;

  const db = getDatabase();
  const storage = getStorage();

  function writeUserData(imgUrl) {
    push(ref(db, "items/"), {
      title,
      price,
      description,
      place,
      insertAt: new Date().getTime(),
      imgUrl,
    });
    alert("글쓰기 완료");
    window.location.hash = "/";
  }

  const storageRef = refImage(storage, "/images" + name);
  console.log();
  // uploadBytes(storageRef, file).then((snapshot) => {
  //   console.log('Uploaded a blob or file!');
  // });

  const uploadFile = async () => {
    const file = files[0];
    const name = file.name;
    const imgRef = refImage(storage, "/images" + name);
    const res = await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);
    return url;
  };

  const handleSubmit = async () => {
    const url = await uploadFile();
    writeUserData(url);
  };
</script>

<form id="write-form" on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="">이미지</label>
    <input type="file" bind:files id="image" name="image" />
  </div>
  <div>
    <label for="">제목</label>
    <input type="text" id="title" name="title" bind:value={title} />
  </div>
  <div>
    <label for="">가격</label>
    <input type="number" id="price" name="price" bind:value={price} />
  </div>
  <div>
    <label for="">설명</label>
    <input
      type="text"
      id="description"
      name="description"
      bind:value={description}
    />
  </div>
  <div>
    <label for="">장소</label>
    <input type="text" id="place" name="place" bind:value={place} />
  </div>
  <div>
    <button class="write-submit-btn" type="submit">제출</button>
  </div>
</form>
<Footer location="write" />

<style>
  .write-submit-btn {
    background-color: tomato;
    margin: 10px;
    border-radius: 10px;
    border: none;
    padding: 5px 12px;
    color: #fff;
    cursor: pointer;
  }
</style>
