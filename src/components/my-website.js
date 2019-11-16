import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class Website extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>2. What can I do for you?</h2>
        <p>My services are for businesses who want to grow towards future needs of their clients.</p>
      </section>
      <section>
        <h3>Interim Data Science</h3>
        <p>Within your company I can participate in data related projects, experiment with on going stuff or kickstart something new that the business wants to scale up quickly. Usually from 3 months up to 2 years. Paid by the hour, you can use my knowledge, experience and skills for your business.</p>
        <h4>Dashboards</h4>
        <p>Whether it's with Tableau, Power BI, R Shiny or old fashion Excel I can help you out to get insights in the running business or special details of your company.</p>
        <p>I create clean, user-friendly dashboards. That will give you new insights which don't only look back but also give some insight in future possibilities.</p>
        <h4>Predictive Analitics and Machine learning models</h4>
        <p></p>
        <h4>Analysis</h4>
        <p></p>
      </section>
    `;
  }

  static get properties() { return {} }
}

window.customElements.define('my-website', Website);
