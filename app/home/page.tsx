// pages/index.js
"use client";
import { Navbar, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={"/logo.png"} // Replace with your actual logo path
              alt="Learn Hub Logo"
              height={130}
              width={130}
              className="d-inline-block align-top"
            />
           
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          
            <Link href="/userhome">
                <Button
                  type="button"
                  variant="ghost"
                >
                  Login
                </Button>
              </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section with Background Image */}
      <div
        className="hero-section"
        style={{
          backgroundImage: 'url("/background2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px', // Adjust the height as needed
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white', // Set text color based on the background
          textAlign: 'center',
        }}
      >
        <h1>Welcome to Learn Hub</h1>
        <p>Your Ultimate Learning Platform</p>
      </div>

      {/* About Us Section */}
      <div className="about-us-section">
        <Container>
          <h2>About Us</h2>
          <p>
       

At Learn Hub, we believe in the transformative potential of education. Our mission is to empower individuals worldwide by providing a dynamic and accessible online learning platform that transcends boundaries and fosters continuous growth.

🌐 **Global Learning Community:**
Dive into a world of knowledge where geographical barriers fade away. Learn Hub brings together a diverse community of learners and experts from around the globe, creating a vibrant hub for the exchange of ideas, skills, and perspectives. Whether you're a student looking to supplement your studies, a professional aiming to upskill, or an expert eager to share your expertise, Learn Hub is your go-to destination.

📚 **Endless Possibilities:**
Unlock your potential with our extensive library of courses spanning a myriad of subjects. From tech enthusiasts to creative minds, business professionals to hobbyists, there's something for everyone at Learn Hub. Our meticulously curated courses cover everything from cutting-edge technologies to timeless skills, ensuring that you're equipped with the knowledge you need to thrive in an ever-evolving world.


</p>
         
        </Container>
      </div>

      {/* Styles */}
      <style jsx>{`
        .hero-section {
          /* Add styles for the hero section */
        }

        .about-us-section {
          background-color: #f8f9fa;
          padding: 50px 0;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
