class SekeletonLoader extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'closed' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
        <style>
            .sekeleton__card {
                position: relative;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                overflow: hidden;
                height: 500px;
            }

            .sekeleton__thumbnail{
                width: 100%;
                height: 50%;
            }

            .title__thumbnail {
                position: absolute;
                height: 30px;
                width: 125px;
                top: 0;
                right: 0;
                border-radius: 1em 0 0 1em;
                box-shadow: 0 8px 8px 0 ivory;
            }

            .sekeleton__content {
                padding: 0.5em 2em 2em 2em ;
                background-color: white;
                height: 50%;
            }

            .title.loading {
                width: 50%;
                height: 30px;
                margin-top: 20px;
            }

            .description.loading {
                height: 60%;
                margin-top: 30px;
            }

            .loading {
                background-color: #e2e2e2;
                position: relative;
            }
            
            .loading::before {
                display: block;
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 150px;
                background: linear-gradient(to right, transparent 0%, white 50%, transparent 100%);
                animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
            }
            
            @keyframes load {
                from {
                    left: -50px;
                }
                to {
                    left: 100%;
                }
            }
        </style>
        <article class="sekeleton__card">
            <div class="sekeleton__thumbnail loading">
                <p class="title__thumbnail"></p>
            </div>
            <div class="sekeleton__content">
                <div class="title loading"></div>
                <p class="description loading"></p>
            </div>
        </article>`;
  }
}

if (!customElements.get('sekeleton-loader')) customElements.define('sekeleton-loader', SekeletonLoader);
