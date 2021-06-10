export default class Collapse {
  constructor(container, btnText, text) {
    this.container = container;
    this.btnText = btnText;
    this.text = text;
  }

  bindToDOM() {
    const item = document.createElement('div');
    item.classList.add('collapse__item');

    item.innerHTML = `
      <div class="collapse-item__container">
        <button class="collapse-item__btn">${this.btnText}</button>
        <div class="collapse-item__text">
          <p>${this.text}</p>
        </div>
      </div>
      <button class="collapse-item__copy">Copy</button>
    `;
    this.container.appendChild(item);

    const btn = item.querySelector('.collapse-item__btn');
    btn.addEventListener('click', this.onClick.bind(this));
  }

  onClick(e) {
    const { target } = e;
    target.classList.toggle('collapse-item__btn--active');

    this.content = target.nextElementSibling;
    this.content.style.maxHeight = target.classList.contains('collapse-item__btn--active') ? `${this.content.scrollHeight}px` : 0;
  }
}
