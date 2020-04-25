// const page = document.querySelector(".page");
// const popup = document.querySelector(".popup");
// const popupColorInput = document.querySelector(".popup__color-input");
// let gridContainerItem;

// page.addEventListener("click", (e) => {
//   if (e.target.classList.contains("grid-container__item")) {
//     popup.style.display = "block";
//     gridContainerItem = e.target;
//   }
//   if (e.target.classList.contains("popup__close")) {
//     popup.style.display = "none";
//   }
//   if (e.target.classList.contains("popup__btn")) {
//     gridContainerItem.style.backgroundColor = popupColorInput.value;
//     popup.style.display = "none";
//   }
// });

class BackgroundColor {
  constructor(
    page,
    popup,
    popupColorInput,
    classOfgridContainerItem,
    classOfPopupClose,
    classOfPopupBtn
  ) {
    this.page = page;
    this.popup = popup;
    this.popupColorInput = popupColorInput;
    this.gridContainerItem;
    this.classOfgridContainerItem = classOfgridContainerItem;
    this.classOfPopupClose = classOfPopupClose;
    this.classOfPopupBtn = classOfPopupBtn;
    this.handlerEvent = this.handlerEvent();
  }

  handlerEvent() {
    this.page.addEventListener("click", (e) => {
      if (e.target.classList.contains(this.classOfgridContainerItem)) {
        this.popup.style.display = "block";
        this.gridContainerItem = e.target;
      }
      if (e.target.classList.contains(this.classOfPopupClose)) {
        this.popup.style.display = "none";
      }
      if (e.target.classList.contains(this.classOfPopupBtn)) {
        this.gridContainerItem.style.backgroundColor = this.popupColorInput.value;
        this.popup.style.display = "none";
      }
    });
  }
}

const backgroundColor = new BackgroundColor(
  document.querySelector(".page"),
  document.querySelector(".popup"),
  document.querySelector(".popup__color-input"),
  "grid-container__item",
  "popup__close",
  "popup__btn"
);


