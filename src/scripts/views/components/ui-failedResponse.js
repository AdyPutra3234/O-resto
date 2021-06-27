class UiFailedResponse extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<p id="UiFailedResponse" 
                        style="text-align: center;
                                font-weight: bold;
                                margin-top: 15%;"
                        >😢 Failed to load content</p>`;
  }
}

if (!customElements.get('ui-failed')) customElements.define('ui-failed', UiFailedResponse);
