export default function PhoneMockup() {
  return (
    <article className="phone">
      <div className="notch"></div>
      <div className="screen">
        <div className="product-image"></div>
        <div className="product-card">
          <h3>Sourlittles</h3>
          <p className="brand-name">YumEarth</p>
          <p className="score">
            84/100 <span>Excellent</span>
          </p>
        </div>
        <div className="assistant-card">
          <p className="assistant-title">Olive Says:</p>
          <p>
            This product&apos;s score is impacted by the presence of processed sugars like organic
            cane sugar and organic rice syrup. It is best to enjoy treats like this in moderation.
          </p>
        </div>
      </div>
    </article>
  );
}
