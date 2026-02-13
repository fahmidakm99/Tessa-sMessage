import { useState } from "react";

interface GallerySection {
  title: string;
  images: string[];
}

const gallerySections: GallerySection[] = [
  {
    title: "Officially Us",
    images: [
      "/couple/couple1.jpg",
      "/couple/couple2.jpg",
      "/couple/couple3.jpeg",
      "/couple/couple4.jpg",
      "/couple/couple5.jpg",
      "/couple/diff1.jpg",
      "/couple/diff2.jpg",
      "/couple/diff3.jpg",
      "/couple/m1.jpg",
      "/couple/m2.jpg",
      "/couple/m3.jpg",
      "/couple/m4.jpg",
      "/couple/m5.jpg",
      "/couple/m5.jpg",
      "/couple/m6.jpg",
      "/couple/m7.jpg",
      "/us/us.jpg",
      "/us/us0.jpg",
      "/us/us000.jpg",
      "/us/us1.jpg",
      "/us/us3.jpg",
      "/us/us2.jpg",
      "/us/us3.jpg",
      "/us/us5.jpg",
      "/us/us8.jpg",
      "/us/us9.png",
      "/us/us10.jpg",
      "/us/us11.jpg",
      "/us/us12.jpg",
      "/us/us14.jpg",
      "/us/us21.png",
      "/us/us22.jpg",
      "/us/us23.jpg",
      "/us/us24.jpg",
      "/us/us25.jpg",
      "/us/us26.jpg",
      "/us/us27.jpg",
      "/us/us28.jpg",
      "/us/us29.jpg",
      "/us/us30.jpg",
      "/us/us31.jpg",
      "/us/us32.jpg",
      "/us/us33.jpg",
      "/us/us34.jpg",
      "/us/us35.jpg",
      "/us/us36.jpg",
      "/us/us37.jpg",
      "/us/us38.jpg",
      "/us/us39.jpg",
      "/us/us40.jpg",
      "/us/us41.webp",
      "/us/us42.jpg",
      "/us/us43.jpg",
      "/us/us45.jpg",
      "/us/us63.jpg",
      "/us/us66.jpg",
      "/us/us71.jpg",
      "/us/us72.jpg",
      "/us/us74.jpg",
      "/us/us75.jpg",
      "/us/us76.jpg",
      "/us/us77.jpg",
      "/us/us79.jpg",
      "/us/us81.jpg",
      "/us/us90.jpg",
      "/us/us92.jpg",
      "/us/us94.jpg",
      "/us/us95.jpg",
      "/us/us97.JPG",
      "/us/us99.jpg",
      "/us/us101.jpg",
      "/us/us102.jpg",
      "/us/us104.jpg",
      "/us/us105.jpg",
      "/us/us106.jpg",
      "/us/us108.jpg",
    ],
  },
  {
    title: "Our First",
    images: [
      "/couple/first call.jpg",
      "/couple/first.jpg",
      "/couple/first hug.jpg",
      "/couple/first engagement.jpg",
      "/couple/first day.jpg",
      "/couple/first lonely life.jpg",
      "/couple/first movie.jpg",
      "/couple/first n.jpg",
      "/couple/first p.jpg",
      "/couple/first pp.jpg",
      "/couple/firstO.jpg",
    ],
  },
  {
    title: "Engaged",
    images: [
      "/engage/engagement.mp4",
      "/engage/engage1.JPG",
      "/engage/engage2.jpg",
      "/engage/engage3.jpg",
      "/engage/engage4.jpg",
      "/engage/engage5.JPG",
      "/engage/engage6.jpg",
      "/engage/engage7.jpg",
    ],
  },
  {
    title: "Our Special Day",
    images: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
      "/images/6.jpg",
      "/images/7.jpg",
      "/images/8.jpg",
    ],
  },
  {
    title: "Our Lift Day",
    images: [
      "/couple/lift1.jpg",
      "/couple/lift 2.jpg",
      "/couple/lift3.jpg",
      "/couple/lift.jpg",
    ],
  },
  {
    title: "Some Special Moments",
    images: [
      "/special/om.jpg",
      "/special/om1.jpg",
      "/special/om2.jpg",
      "/special/om3.jpg",
      "/special/om4.jpg",
      "/special/om5.jpg",
      "/special/Special.png",
      "/special/om7.jpg",
      "/special/om8.jpg",
      "/special/om9.jpg",
      "/special/sp00.jpg",
      "/special/sp01.jpg",
      "/special/sp03.jpg",
      "/special/sp005.jpg",
    ],
  },
  {
    title: "Sweet Notes and Shared Moments",
    images: [
      "/notes/n1.jpg",
      "/notes/s1.jpg",
      "/notes/n2.jpg",
      "/notes/n3.jpg",
      "/notes/s2.jpg",
      "/notes/s3.jpg",
      "/notes/g1.jpg",
      "/notes/g2.jpg",
      "/notes/s4.jpg",
      "/notes/s5.jpg",
      "/notes/s6.jpg",
      "/notes/s7.jpg",
      "/notes/s8.jpg",
      "/notes/s9.jpg",
      "/notes/s10.jpg",
      "/notes/s11.jpg",
    ],
  },
  {
    title: "Wedding Series",
    images: [
      "/images/bg1.jpg",
      "/images/bg2.jpg",
      "/images/bg4.jpg",
      "/images/bg6.jpg",
      "/images/bg7.jpg",
      "/images/w1.jpg",
      "/images/w2.jpg",
      "/images/w3.JPG",
      "/images/w4.jpg",
      "/images/w5.jpg",
      "/images/w7.JPG",
            "/engage/w11.jpg",
"/engage/w14.jpg",
"/engage/w15.jpg",
       "/engage/w16.jpg",
"/engage/w18.JPG",
"/engage/w21.JPG",
"/engage/w22.JPG",
"/engage/w23.JPG",
"/engage/w24.JPG",
"/engage/w25.JPG",
"/engage/w27.JPG",
"/engage/w28.JPG",
"/engage/w29.JPG",
"/engage/w30.JPG",
"/engage/w31.JPG",
"/engage/w32.jpg",
"/engage/w33.jpg",
"/engage/w35.jpg",
"/engage/w36.jpg",
"/engage/w37.JPG",
"/engage/w38.jpg",
"/engage/w39.jpg"

    ],
  },
];

const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<number>(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Gallery 💖</h1>

      {/* Tabs */}
      <div style={styles.tabs}>
        {gallerySections.map((section, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSection(idx)}
            style={{
              ...styles.tabBtn,
              ...(activeSection === idx ? styles.activeTab : {})
            }}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {gallerySections[activeSection].images.map((media, index) => {
          const isVideo = media.toLowerCase().endsWith(".mp4");

          return (
            <div key={index} style={styles.mediaWrapper}>
              {isVideo ? (
                <video
                  src={media}
                  style={styles.image}
                  muted
                  playsInline
                  onClick={() => setSelected(media)}
                />
              ) : (
                <img
                  src={media}
                  alt="gallery"
                  style={styles.image}
                  onClick={() => setSelected(media)}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {selected && (
        <div style={styles.lightbox} onClick={() => setSelected(null)}>
          {selected.toLowerCase().endsWith(".mp4") ? (
            <video
              src={selected}
              controls
              autoPlay
              style={styles.lightboxMedia}
            />
          ) : (
            <img src={selected} style={styles.lightboxMedia} />
          )}
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "clamp(20px, 5vw, 50px)"
  },

  title: {
    fontSize: "clamp(24px, 5vw, 40px)",
    color: "#ff4d94",
    marginBottom: "20px"
  },

  tabs: {
    display: "flex",
    gap: "15px",
    overflowX: "auto",
    paddingBottom: "10px",
    marginBottom: "30px"
  },

  tabBtn: {
    padding: "10px 18px",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
    background: "#ffe6f0",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    transition: "0.3s"
  },

  activeTab: {
    background: "#ff99c8",
    color: "white"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "20px"
  },

  mediaWrapper: {
    position: "relative"
  },

  image: {
    width: "100%",
    borderRadius: "15px",
    cursor: "pointer",
    objectFit: "cover",
    aspectRatio: "1 / 1",
    transition: "0.3s"
  },

  lightbox: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    zIndex: 999
  },

  lightboxMedia: {
    maxWidth: "95%",
    maxHeight: "90%",
    borderRadius: "20px"
  }
};

export default Gallery;
