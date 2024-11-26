import IconImporterClient from './IconImporterClient';
import ImageImporter from './ImageImporter';

/*
  IDEA - CREATE INTERACTIVE DESIGN TO CHANGE PRIMARY COLOR BY CLICK ON REACT/VUE
*/

export default function AboutSection() {
  const resume_link =
    'https://drive.google.com/file/d/1kYbbTv9qqjMzoTrhzf5vPIkVB5n25ZFm/view?usp=sharing';

  return (
    <section id="about" className="container">
      <h2 className="about-section__position">Frontend Developer</h2>

      <div className="about-section">
        <div className="about-section__photo">
          <div className="about-section__photo-wrapper">
            <ImageImporter
              name-image="profile-img.png"
              alt="Profile image of the Frontend Developer's Artem Orlov"
            />
          </div>

          <a
            className="about-section__photo-link"
            href={resume_link}
            target="_blank"
          >
            Resume
            <IconImporterClient
              className="about-section__photo-icon"
              name-icon="link.svg"
            />
          </a>
        </div>

        <div className="about-section__desc">
          <h1>
            Hi, I'm Artem, a front-end developer who thrives on solving problems
            through code.
          </h1>
          <p>
            With a strong foundation in web technologies, I specialize in
            creating interactive and dynamic user interfaces. My experience
            includes working with various libraries and frameworks, including
            <b className="about-section__desc-react"> React</b> and{' '}
            <b className="about-section__desc-vue">Vue</b>. I believe that great
            design is not just about aesthetics but also about functionality and
            user experience.{' '}
            <b>Let’s connect and create something impactful!</b>
          </p>
        </div>
      </div>
    </section>
  );
}
