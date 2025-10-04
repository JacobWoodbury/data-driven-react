export default function Entry({img, location, name, date, content, mapLink}){
    return(
        <>
        
        <article className = "journal-entry">
            <div className="main-img-container">
                <img
                    className="main-image"
                    src ={img.src}
                    alt={img.alt}
                />
            </div>
        

        
        <section class= "article-right">
             <img id = "marker" src="./marker.png" alt = "location marker"/>
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