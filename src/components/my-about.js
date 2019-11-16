import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class About extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>3. About me</h2>
        <p>I’m an enthusiastic data scientist that combines the best of two worlds. I use data science to guide the way, but with a designer's heart and always with end-users in mind. With my great variety of tools, I create the optimal solution for my clients. Whether this is a dashboard that gives you a snapshot overview of what’s going on in your business, a machine learning model that shows you what the future will bring or an innovative product to move your company forward. I got you covered! Are you ready to skyrocket? Let’s take a ride!</p>
      </section>
    `;
  }
}

window.customElements.define('my-about', About);
