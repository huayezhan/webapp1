import '../src/contact.css'

import { Link } from 'react-router-dom';
export default function Contact() {
    return (
      <>
      <p>Contact</p>
      <form id="ffp">
     
       
         <label htmlFor="myFName"> *First Name: </label>
         <input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
         
         <label htmlFor="myLName"> *Last Name: </label>
         <input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
         
         
         <label htmlFor="myEmail"> *Email: </label>
         <input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
         
         <input type="submit" className="submit" value="Submit" /> <br />
           
     
     </form> <br></br>
        <p><b>Contact number:</b> +1 (647) 478 5888</p>
        <p><b>Email:</b> hzhan5@my.centennialcollege.ca</p>
        <p><b>Facebook:</b> https://www.facebook.com/profile.php?id=100077993602745</p>
        <Link to="/webapp1/home"><h3>Click here to Homepage</h3></Link>
      </>
    );
  }