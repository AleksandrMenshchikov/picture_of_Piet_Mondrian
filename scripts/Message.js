class Message {
  constructor(page, classOfmessageBtn, message) {
    this.page = page;
    this.classOfmessageBtn = classOfmessageBtn;
    this.message = message;
    this.handlerEvent = this.handlerEvent();
  }
  handlerEvent() {
    this.page.addEventListener("click", (e) => {
      if (e.target.classList.contains(this.classOfmessageBtn)) {
        this.message.style.display = "none";
      }
    });
  }
}

const message = new Message(
  document.querySelector(".page"),
  "message__btn",
  document.querySelector(".message")
);