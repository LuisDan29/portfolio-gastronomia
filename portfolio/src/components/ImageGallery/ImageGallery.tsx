import "./ImageGallery.css";

interface GalleryImages {
  id: number;
  doc: string;
  src: string;
  alt: string;
}

interface Gallery {
  id: number;
  title: string;
  description: string;
  images: GalleryImages[];
}

interface ImageGalleryProps {
  gallery: Gallery;
}

function ImageGallery({ gallery }: ImageGalleryProps) {
  return (
    <section className="gallery-section px-0 px-md-5 py-5">
      <div className="row">
        <div className="col-12 col-md-6 pt-0">
          <p className="gallery-title fs-3 text-primary">{gallery.title}</p>
          <p className="gallery-text fs-5 text-tertiary">{gallery.description}</p>
        </div>
      </div>
      <div className="gallery px-2">
        {gallery.images.map((image) => (
          <div className="gallery-item" key={image.id}>
            <p className="gallery-item-text fs-5">{image.alt}</p>
            {image.doc && <p className="gallery-doc-link fs-5"><a href={image.doc} className="text-body"><span className="material-symbols-outlined">arrow_outward</span>Ficha Técnica</a></p>}
            <img src={image.src} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImageGallery;