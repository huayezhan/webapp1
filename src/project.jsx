import logo from './logo.jpg'
import project1 from './project1.jpg'
import project2 from './project2.jpg'
import project3 from './project3.jpg'
export default function Project() {
    return (
      <>
        <p><img src={project1}  height = "200px"/></p>
        <p><b>1.Robotic Slam Car</b></p>
        <p>Navigation and mapping with Jetson Nano by Linux and ROS.</p>
        <p><img src={project2}  height = "200px"/></p>
        <p><b>2.STEM Educational Robotic</b></p>
        <p>The project, line tracking car, is for competition at school. </p>
        <p><img src={project3}  height = "200px"/></p>
        <p><b>3.Robotic Arm</b></p>
        <p>The robotic arm uses a suction pump to pick up and place objects. It has 6 degrees of freedom allowing it to move freely to complete tasks. </p>
      </>
    );
  }