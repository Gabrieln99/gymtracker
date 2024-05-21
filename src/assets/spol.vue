<template>
  <div class="container">
    <div class="gornji_text">
      <div class="zabold">Tell Us About Yourself</div>
      <div class="text">
        To give you a better experience and results<br />
        we need to know your gender
      </div>
    </div>

    <div class="sredina_icone text-center">
      <div class="circle my-5 m-auto okvir rounded-circle">
        <img
          src="@/components/male-symbol-svgrepo-com.png"
          class="rounded-circle sredina"
        />
      </div>
      <div class="circle2 m-auto okvir rounded-circle">
        <img
          src="@/components/female-1363-svgrepo-com.png"
          class="rounded-circle sredina"
        />
      </div>
    </div>
  </div>
</template>

<style>
.container {
  background-color: rgb(225, 225, 225);
}
.gornji_text {
  text-align: center; /* Poravnanje teksta u centru */
  padding-top: 5vh; /* Odmak od vrha ekrana */
}
.zabold {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}
.okvir {
  width: 200px;
  height: 200px;
  display: flex; /* Koristimo flexbox */
  justify-content: center; /* Centriranje sadržaja horizontalno */
  align-items: center; /* Centriranje sadržaja vertikalno */
}
.okvir img {
  width: 100px;
  height: auto;
  object-fit: cover;
}
.circle {
  width: 200px; /* Postavljanje veličine kruga */
  height: 200px; /* Postavljanje veličine kruga */
  border-radius: 50%; /* Postavljanje oblika u krug */
  background-color: #6842ff; /* Boja pozadine */
}
.circle2 {
  width: 200px; /* Postavljanje veličine kruga */
  height: 200px; /* Postavljanje veličine kruga */
  border-radius: 50%; /* Postavljanje oblika u krug */
  background-color: #a8a8a8; /* Boja pozadine */
}
</style>

<!--
      <div class="container">
    <div class="gornji_text">
      <div class="zabold">Tell Us About Yourself</div>
      <div class="text">
        To give you a better experience and results<br />
        we need to know your gender
      </div>
    </div>

    <div class="sredina_icone text-center">
      <div class="circle my-5 m-auto okvir rounded-circle">
        <img
          src="@/components/female-1363-svgrepo-com.png"
          class="rounded-circle sredina"
        />
      </div>
      <div class="circle m-auto">
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>

<style>
.container {
  background-color: rgb(225, 225, 225);
}
.gornji_text {
  text-align: center; /* Poravnanje teksta u centru */
  padding-top: 5vh; /* Odmak od vrha ekrana */
}
.zabold {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}
.okvir {
  background-color: brown;
  width: 200px;
  height: 200px;
}
.okvir img {
  width: 100px;
  height: auto;
  object-fit: cover;
}
/*
.circle {
  width: 100%; 
  height: 100px; 
  border-radius: 50%; 
  background-color: #6842ff; 
}   
*/
</style>
-->
