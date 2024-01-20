import photo from './photo.jpeg'

export default function About() {
    return (
      <>
        <p><b>Image of me:</b> <img src={photo}  height = "200px"/></p>
        <p><b>Legal name:</b> Huaye Zhan</p>
        <p><b>English name:</b> Howard Zhan</p>
        <p><b>My resume:</b> https://www.zhylr.top/wp-content/uploads/2024/01/resume-english-version.pdf</p>
        <p>I am Howard, from Guangzhou, China.</p> 
        <p>I am a full-time software developer, AI engineer, Robotic engineer.</p>
      </>
    );
  }