import Link from "next/link";
import ImageImporter from "./ImageImporter";

export default function AboutSection() {
  return <>
    <section id="about" className="about-section container">
      <div className="about-section__desc">
        <h2>About Me</h2>
        <p>
          Hello! my name is <b>Artem</b>, as a dedicated <b>frontend developer</b>,
          I specialize in crafting visually stunning and <b>user-friendly websites that leave a impression</b>.
        </p>
        <p>
          With expertise in <b>HTML, CSS, JavaScript</b>, and various <b>frontend frameworks</b>,
          I bring your digital vision to life with precision and creativity. <b>From responsive layouts to interactive elements</b>.
        </p>
        <p>
          Ready to take your online presence to the next level? <b>Let&#39;s collaborate</b> and
          bring your digital vision to reality. <Link href={'#contact'}>Contact me today</Link> to discuss your project
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
