import ImageImporter from "./ImageImporter";

export default function AboutSection() {
  return <>
    <section className="about-section container">
      <div className="about-section__desc">
        <h2>About Me</h2>
        <p>
          Hello! my name is Artem, as a dedicated frontend developer,
          I specialize in crafting visually stunning and user-friendly websites that leave a impression.
        </p>
        <p>
          With expertise in HTML, CSS, JavaScript, and various frontend frameworks,
          I bring your digital vision to life with precision and creativity. From responsive layouts to interactive elements.
        </p>
        <p>
          Ready to take your online presence to the next level? Let&#39;s collaborate and
          bring your digital vision to reality. Contact me today to discuss your project
          requirements and embark on a journey toward digital success.
        </p>
      </div>

      <div className="about-section__photo">
        <div className="about-section__photo-wrapper">
          <ImageImporter
            name-image="profile-img.png"
            alt="Profile image of the Frontend Developer's Artem Orlov"
          />
        </div>
      </div>
    </section>
  </>
}
