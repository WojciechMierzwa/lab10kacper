// app/about/layout.js

export default function AboutLayout({ children }) {
  return (
    <div className="page-about">
      <div className="about-layout">
        <h2>O mnie</h2>
        <section>{children}</section>
      </div>
    </div>
  );
}
