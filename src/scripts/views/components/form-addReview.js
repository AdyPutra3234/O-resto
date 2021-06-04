import '../../../styles/component/form-addReview.css';

class FormAddReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set submit(action) {
    this._clickEventSubmit = action;
    this.render();
  }

  set cancle(action) {
    this._clickEventCancle = action;
    this.render();
  }

  set restaurantId(id) {
    this._restaurantId = id;
    this.render();
  }

  get restaurantId() {
    return this._restaurantId;
  }

  get name() {
    return this.querySelector('input#name').value;
  }

  get review() {
    return this.querySelector('textarea#text-review').value;
  }

  render() {
    this.innerHTML = `
                        <div class="form-wrapper">
                            <h3>Add Review</h3>
                            <form>
                                <label for="name">Name</label>
                                <input type="text" placeholder="input your name" id="name" tabindex="7"/>
                                <label for="text-review">Review</label>
                                <textarea id="text-review" rows="4" cols="5" placeholder="Input your felling's" tabindex="8"></textarea>                                <div class="form-button__wrapper">
                                  <Button id="submit" tabindex="9">Submit</button>
                                  <Button id="cancel" tabindex="10">Cancel</button>
                                </div>
                            </form>
                        </div>`;

    this.querySelector('#submit').addEventListener('click', this._clickEventSubmit);
    this.querySelector('#cancel').addEventListener('click', this._clickEventCancle);
  }
}

customElements.define('form-addreview', FormAddReview);
