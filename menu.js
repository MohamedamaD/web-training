var isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
var exitIcons = document.querySelectorAll("i.exit-icon");
var addItem = document.querySelector(".add-item");
var exit = document.querySelector("i.exit");
var overlay = document.querySelector(".overlay");
var addMenu = document.querySelector(".add-menu");
var addForm = document.querySelector(".add-form");

exitIcons.forEach((el) => {
  el.addEventListener("click", (ev) => {
    el.parentNode.style = "display:none;";
  });
});

addItem.addEventListener("click", (ev) => {
  overlay.classList.add("active");
  addMenu.classList.add("active");
});
exit.addEventListener("click", (ev) => {
  overlay.classList.remove("active");
  addMenu.classList.remove("active");
});

if (isAdmin) {
  exitIcons.forEach((el) => {
    el.classList.add("active");
  });
  addItem.classList.add("active");
} else {
  exitIcons.forEach((el) => {
    el.classList.remove("active");
  });
  addItem.classList.add("active");
}

addForm.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const photoInput = addForm.querySelector("#photo").files[0];
  const textInput = addForm.querySelector("#text").value;
  const priceInput = addForm.querySelector("#price").value;

  const reader = new FileReader();
  reader.onload = function (e) {
    const card = `
      <div class="box-child">
                        <i class="bx bx-x exit-icon active"></i>
                        <div class="img-box">
                            <img src=${e.target.result} alt="">
                        </div>
                        <div class="text-box">
                            <h1>${textInput}</h1>
                            <p>${priceInput}$</p>
                        </div>
                    </div>
      `;
    document.querySelector(".box-parent").insertAdjacentHTML("beforeend", card);
    overlay.classList.remove("active");
    addMenu.classList.remove("active");
    document
      .getElementsByClassName("exit-icon")
      [
        document.getElementsByClassName("exit-icon").length - 1
      ].addEventListener("click", () => {
        document.getElementsByClassName("exit-icon")[
          document.getElementsByClassName("exit-icon").length - 1
        ].parentNode.style = "display:none;";
      });

    // exitIcons = document.querySelectorAll("i.exit-icon");
    // exitIcons.forEach((el) => {
    //   el.addEventListener("click", (ev) => {
    //     el.parentNode.style = "display:none;";
    //   });
    // });
  };

  reader.readAsDataURL(photoInput);
  addForm.reset();
});
