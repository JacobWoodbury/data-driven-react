export default function Entry({entry}) {
    const {img, country: location, title: name, dates: date, text: content, googleMapsLink: mapLink } = entry
  return (
    <>
      <article className="journal-entry">
        <div className="main-img-container">
          <img className="main-image" src={img.src} alt={img.alt} />
        </div>

        <section class="article-right">
          <img id="marker" src="./marker.png" alt="location marker" />
          <span>{location}</span>
          <a href={mapLink}>View on Google Maps</a>
          <h1>{name}</h1>
          <h4>{date}</h4>
          <p>{content}</p>
        </section>
      </article>
    </>
  )
}
