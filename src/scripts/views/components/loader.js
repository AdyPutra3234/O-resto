class LoaderAnimation extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'closed' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
                        <style>
                            .lds-dual-ring {
                                width: 80px;
                                height: 80px;
                                margin: 30vh auto;
                            }
                            .lds-dual-ring:after {
                                content: " ";
                                display: block;
                                width: 64px;
                                height: 64px;
                                margin: 8px;
                                border-radius: 50%;
                                border: 6px solid #fff;
                                border-color: #ffA500 transparent #32cd32 transparent;
                                animation: lds-dual-ring 1.2s linear infinite;
                            }
                            @keyframes lds-dual-ring {
                                0% {
                                transform: rotate(0deg);
                                }
                                100% {
                                transform: rotate(360deg);
                                }
                            }
                        </style>
                        
                        <div class="lds-dual-ring"></div>`;
  }
}

customElements.define('loader-animation', LoaderAnimation);
