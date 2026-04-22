function Marquee({ items }) {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {Array.isArray(items) && [...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-separator">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
