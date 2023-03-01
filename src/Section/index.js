import "./style.css";

const Section = ({ header, body, extraContent }) => (
  <section className="section">
    <header className="section__header">
      <h2 className="section__title">{header}</h2>
      {extraContent}
    </header>
    <div className="section__body">{body}</div>
  </section>
);

export default Section;
