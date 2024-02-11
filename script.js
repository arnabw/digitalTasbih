// Subhan Allah
const subhanAllahTxt = document.getElementById("subhanAllahText");
const subhanAllahIncreaseBtn = document.getElementById("subhanAllahIncrease");
const subhanAllahDecreaseBtn = document.getElementById("subhanAllahDecrease");
const subhanAllahReset = document.getElementById("subhanAllahReset");

// Alhamdulilah
const AlhamdulilahTxt = document.getElementById("AlhamdulilahText");
const AlhamdulilahIncreaseBtn = document.getElementById("AlhamdulilahIncrease");
const AlhamdulilahDecreaseBtn = document.getElementById("AlhamdulilahDecrease");
const AlhamdulilahReset = document.getElementById("AlhamdulilahReset");

//Allahuakber
const AllahuakberTxt = document.getElementById("AllahuakberText");
const AllahuakberIncreaseBtn = document.getElementById("AllahuakberIncrease");
const AllahuakberDecreaseBtn = document.getElementById("AllahuakberDecrease");
const AllahuakberReset = document.getElementById("AllahuakberReset");

//Reset
const allReset = document.getElementById("allRest");

let subhanAllahCount = 0;
let AlhamdulilahCount = 0;
let AllahuakberCount = 0;

// Subhan Allah
subhanAllahIncreaseBtn.addEventListener("click", function () {
  if (subhanAllahCount === 33)
    return alert("Subhan Allah Complete. Please Fill-up another one");

  subhanAllahTxt.innerText = subhanAllahCount += 1;
});

subhanAllahDecreaseBtn.addEventListener("click", function () {
  if (subhanAllahCount === 0) return alert("You can't added negative value");

  subhanAllahTxt.innerText = subhanAllahCount -= 1;
});

subhanAllahReset.addEventListener("click", function () {
  if (subhanAllahCount === 0)
    return alert("You can't reset before increase value");

  subhanAllahTxt.innerText = 0;
  subhanAllahCount = 0;
});

// Alhamdulilah
AlhamdulilahIncreaseBtn.addEventListener("click", function () {
  if (AlhamdulilahCount === 33)
    return alert("Alhamdulilah Complete. Please Fill-up another one");

  AlhamdulilahTxt.innerText = AlhamdulilahCount += 1;
});

AlhamdulilahDecreaseBtn.addEventListener("click", function () {
  if (AlhamdulilahCount === 0) return alert("You can't added negative value");

  AlhamdulilahTxt.innerText = AlhamdulilahCount -= 1;
});

AlhamdulilahReset.addEventListener("click", function () {
  if (AlhamdulilahCount === 0)
    return alert("You can't reset before increase value");

  AlhamdulilahTxt.innerText = 0;
  AlhamdulilahCount = 0;
});

// Allahuakber
AllahuakberIncreaseBtn.addEventListener("click", function () {
  if (AllahuakberCount === 34)
    return alert("Allahuakber Complete. Please Fill-up another one");

  AllahuakberTxt.innerText = AllahuakberCount += 1;
});

AllahuakberDecreaseBtn.addEventListener("click", function () {
  if (AllahuakberCount === 0) return alert("You can't added negative value");

  AllahuakberTxt.innerText = AllahuakberCount -= 1;
});

AllahuakberReset.addEventListener("click", function () {
  if (AllahuakberCount === 0)
    return alert("You can't reset before increase value");

  AllahuakberTxt.innerText = 0;
  AllahuakberCount = 0;
});

//Reset
allReset.addEventListener("click", function () {
  if (
    AllahuakberCount === 0 &&
    AlhamdulilahCount === 0 &&
    subhanAllahCount === 0
  )
    return alert("You can't reset before increase value");

  AllahuakberTxt.innerText = 0;
  AllahuakberCount = 0;
  AlhamdulilahTxt.innerText = 0;
  AlhamdulilahCount = 0;
  subhanAllahTxt.innerText = 0;
  subhanAllahCount = 0;
});
