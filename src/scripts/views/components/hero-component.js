import '../../../styles/component/hero-component.css';

class HeroComp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                    <div class="hero">
                        <picture>
                            <source media="(max-width: 600px)" srcset="./images/hero-image-small.jpg">
                            <img 
                                src="./images/hero-image-large.jpg" 
                                alt="meet and enjoy"></img>
                        </picture>
                        <div class="hero__inner">
                            <h1 class="hero__title">Meet and Enjoy</h1>
                            <p class="hero__tagline">Enjoy your days with family and friends in the best restaurant</p>
                        </div>
                    </div>`;
  }
}

if (!customElements.get('hero-comp')) customElements.define('hero-comp', HeroComp);
