import photo from './photo.jpeg'
import pdf from "./resume.pdf"

export default function About() {
    return (
      <>
        <p><b>Image of me:</b> <img src={photo}  height = "200px"/></p>
        <p><b>Legal name:</b> Huaye Zhan</p>
        <p><b>English name:</b> Howard Zhan</p>
        <p><b>My resume:</b> </p>
        <p><embed src={pdf} width="800px" height="1200px" /></p>
        <p>I am Howard, from Guangzhou, China.</p> 
        <p>I am a full-time software developer, AI engineer, Robotic engineer.</p>
      </>
    );
  }