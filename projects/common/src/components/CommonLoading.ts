export class CommonLoading {
  private readonly loading: HTMLDivElement;
  private readonly el: string = `
    <div class="modal-loading flex relative">
      <span class="l-1 letter">L</span>
      <span class="l-2 letter">o</span>
      <span class="l-3 letter">a</span>
      <span class="l-4 letter">d</span>
      <span class="l-5 letter">i</span>
      <span class="l-6 letter">n</span>
      <span class="l-7 letter">g</span>
      <span class="l-8 letter">.</span>
      <span class="l-9 letter">.</span>
      <span class="l-10 letter">.</span>
    </div>
  `;

  constructor() {
    this.loading = this.makeLoading();
  }

  makeLoading() {
    const loading = document.createElement('div');
    loading.className =
      'dialog-container flex justify-center items-center show modal-loading';
    loading.innerHTML = this.el;

    return loading;
  }

  show() {
    document.body.appendChild(this.loading);
  }

  hide() {
    document.body.removeChild(this.loading);
  }
}
