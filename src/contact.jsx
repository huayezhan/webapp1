import { Link } from 'react-router-dom';
export default function Contact() {
    return (
      <>
        <p><b>Contact number:</b> +1 (647) 478 5888</p>
        <p><b>Email:</b> hzhan5@my.centennialcollege.ca</p>
        <p><b>Facebook:</b> https://www.facebook.com/profile.php?id=100077993602745</p>
        <Link to="/webapp1/home"><h3>Click here to Homepage</h3></Link>
      </>
    );
  }