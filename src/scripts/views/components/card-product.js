import lazyLoad from '../../utils/lazy-load';
import '../../../styles/component/card-product.css';

class CardProduct extends HTMLElement {
  connectedCallback() {
    this.render();
    lazyLoad();
  }

  set product(product) {
    this._product = product;
    this.render();
  }

  render() {
    this.innerHTML = `
                        <div class="card__product">
                            <img data-src="images/menu-template.png" alt="${this._product.name}" class="lozad">
                            <h3>${this._product.name}</h3>
                        </div>`;
  }
}

if (!customElements.get('card-product')) customElements.define('card-product', CardProduct);
