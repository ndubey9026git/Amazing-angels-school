import React, { useState, useEffect } from 'react';
import './index.css';
import logoImg from './assets/logo.png';
import studentsImg from './assets/students_learning.png';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'academics', label: 'Academics' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'activities', label: 'Activities' },
  { id: 'admission', label: 'Admission' },
  { id: 'contact', label: 'Contact Us' }
];

function Navbar({ currentView, setCurrentView }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id) => {
    setCurrentView(id);
    setIsMobileMenuOpen(false); // Close menu on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-info">
            <span><i className="fa-solid fa-map-pin"></i> 211 Samrat Nagar, Khajrana, Indore, M.P.</span>
            <span><i className="fa-solid fa-phone"></i> 9770103319</span>
            <span><i className="fa-solid fa-envelope"></i> amazingangelsgroup@gmail.com</span>
          </div>
          <div>
            <button onClick={() => handleNav('admission')} className="top-bar-btn">Admissions Open</button>
          </div>
        </div>
      </div>
      
      <div className="container">
        <nav className="navbar">
          <div className="logo-container" onClick={() => handleNav('home')}>
            <img src={logoImg} alt="Amazing Angels Logo" onError={(e) => e.target.style.display = 'none'} />
          </div>

          <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </div>

          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map(link => (
              <button 
                key={link.id} 
                className={`nav-link ${currentView === link.id ? 'active' : ''}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

function Footer({ setCurrentView }) {
  const handleNav = (id) => {
    setCurrentView(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2>Amazing Angels</h2>
          <p>Empowering Minds, Enriching Lives: Striving for Excellence in Education. Quality English Medium Education for Grades 1–8.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><button onClick={() => handleNav('home')}>Home</button></li>
            <li><button onClick={() => handleNav('about')}>About Us</button></li>
            <li><button onClick={() => handleNav('academics')}>Academics</button></li>
            <li><button onClick={() => handleNav('facilities')}>Facilities</button></li>
            <li><button onClick={() => handleNav('admission')}>Admission</button></li>
          </ul>
        </div>
        <div>
          <h3>Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>211 Samrat Nagar, Khajrana,<br/>Indore, M.P. 452016</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>9770103319</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>amazingangelsgroup@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Amazing Angels Public School. All rights reserved.</p>
        <h5>Managed by Nikhil Dubey</h5>
      </div>
    </footer>
  );
}

function Home({ setCurrentView }) {
  return (
    <div>
      <section className="hero">
        <div className="hero-bg-container">
          <div className="hero-bg"></div>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-badge">A Commitment to Excellence</div>
          <h1>Welcome to <span>Amazing Angels</span><br/>Public School</h1>
          <p>Empowering Minds, Enriching Lives: Striving for Excellence in Education. Quality English Medium Education for Grades 1–8.</p>
          <div className="hero-buttons">
            <button className="btn-secondary" onClick={() => setCurrentView('admission')}>Apply Now</button>
            <button className="btn-outline-light" onClick={() => setCurrentView('about')}>Discover More</button>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Welcome</span>
            <h2 className="section-title">Quick Introduction</h2>
          </div>
          <div className="grid-2">
            <div className="text-content">
              <p>Welcome to Amazing Angels Public School, where a commitment to excellence in education is the cornerstone of our institution. Established in 2017, we have evolved from a modest beginning with 30 students to a thriving community of 300 learners. Our school, nestled in the heart of Khajrana, Indore, is affiliated with the Madhya Pradesh State Board of Education and holds recognition from the state government.</p>
              <p>At Amazing Angels, we pride ourselves on providing top-tier English medium education, fostering a dynamic learning environment that nurtures both academic prowess and personal growth. Our dedicated and experienced faculty members ensure that students receive quality education, reflected in our consistent 100% board exam results.</p>
              <button className="btn-primary" style={{marginTop: '1.5rem'}} onClick={() => setCurrentView('about')}>Read Our Story</button>
            </div>
            <div>
              <img src={studentsImg} alt="Students Learning" style={{width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-lg)'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="premium-card">
            <div className="card-icon-wrap"><i className="fa-solid fa-eye"></i></div>
            <h3>Our Vision</h3>
            <p style={{fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--primary)'}}>
              "Empowering Minds, Enriching Lives: Striving for Excellence in Education at Amazing Angels Public School."
            </p>
          </div>
          <div className="premium-card">
            <div className="card-icon-wrap"><i className="fa-solid fa-bullseye"></i></div>
            <h3>Our Mission</h3>
            <p style={{fontStyle: 'italic', fontSize: '1.05rem'}}>
              "At Amazing Angels Public School, our mission is to provide a nurturing environment that fosters academic excellence, holistic development, and values-driven education. We aim to inspire a passion for learning, instill a sense of curiosity, and equip students with the skills and knowledge necessary for success in an ever-evolving world. Our commitment extends beyond the classroom, as we endeavor to cultivate responsible, compassionate, and resilient individuals, ready to contribute positively to society."
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Pillars</span>
            <h2 className="section-title">School Core Goals</h2>
          </div>
          <div className="grid-3">
            <div className="premium-card">
              <h3>1. Academic Excellence</h3>
              <p>Ensure a robust curriculum and teaching methodology that consistently delivers outstanding academic results, maintaining our tradition of 100% board exam success.</p>
            </div>
            <div className="premium-card">
              <h3>2. Holistic Development</h3>
              <p>Prioritize the overall development of students by providing state-of-the-art facilities, including a well-equipped computer lab, library, and dedicated spaces for art and sports.</p>
            </div>
            <div className="premium-card">
              <h3>3. Innovation and Activities</h3>
              <p>Encourage a culture of innovation through various activities, including sports, cultural events, and innovative projects, to stimulate critical thinking and problem-solving skills.</p>
            </div>
            <div className="premium-card">
              <h3>4. Accessible Quality Education</h3>
              <p>Maintain an economic fee structure to ensure that quality education is accessible to a diverse range of students, promoting inclusivity and diversity within the school community.</p>
            </div>
            <div className="premium-card">
              <h3>5. Professional Development</h3>
              <p>Invest in the continuous training and development of our teaching staff, ensuring they remain at the forefront of educational practices and are equipped to inspire and guide our students.</p>
            </div>
            <div className="premium-card">
              <h3>6. Community Engagement</h3>
              <p>Establish strong ties with parents, guardians, and the local community, fostering a collaborative and supportive environment for the overall well-being and success of our students.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="section container" style={{paddingTop: '150px'}}>
      <div className="section-header">
        <span className="section-badge">Discover</span>
        <h2 className="section-title">About Us</h2>
      </div>

      <div className="text-box text-content mb-4" style={{marginBottom: '3rem'}}>
        <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)'}}>Our Origin and Growth</h3>
        <p>Welcome to Amazing Angels Public School, a beacon of educational excellence in Khajrana, Indore, where the journey of learning is a transformative experience. Established in 2017, our school has evolved into a vibrant community of 300 students, growing from a humble start with just 30 learners. From our inception, we embarked on a mission to provide quality English medium education. Our journey reflects a commitment to nurturing young minds and preparing them for a dynamic future.</p>
        
        <h3 style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)'}}>Official Affiliation</h3>
        <p>Amazing Angels Public School operates under the esteemed management of <strong>Al Raza Memorial Educational Society, Indore</strong>. We take pride in our affiliation with the <strong>Madhya Pradesh School Board of Education, Bhopal</strong>, and our recognition by the Government of Madhya Pradesh.</p>
        <p>This affiliation underscores our commitment to providing quality education that aligns with the highest educational standards set by the state. Our dedication to excellence is reflected in our adherence to the curriculum and educational principles sanctioned by the state board, ensuring a holistic and well-rounded educational experience for every student.</p>
      </div>

      <div className="section-header" style={{marginTop: '5rem'}}>
        <h2 className="section-title">Key Pillars of AAPS</h2>
      </div>

      <div className="grid-3" style={{marginBottom: '4rem'}}>
        <div className="premium-card text-center" style={{textAlign: 'center'}}>
          <div className="card-icon-wrap mx-auto" style={{margin: '0 auto 1.5rem'}}><i className="fa-solid fa-graduation-cap"></i></div>
          <h3>Academic Distinction</h3>
          <p>At the heart of our institution is a commitment to academic excellence. Our curriculum is designed to ignite curiosity, promote critical thinking, and foster a love for learning. The result is a remarkable track record of 100% success in board exams.</p>
        </div>
        <div className="premium-card text-center" style={{textAlign: 'center'}}>
          <div className="card-icon-wrap mx-auto" style={{margin: '0 auto 1.5rem'}}><i className="fa-solid fa-school"></i></div>
          <h3>State-of-the-Art Facilities</h3>
          <p>Spanning 2400 sq ft, our campus is equipped with modern facilities to support comprehensive education. A dedicated computer lab, a well-stocked library, and specialized spaces for art and sports ensure that students have access to a rich learning environment.</p>
        </div>
        <div className="premium-card text-center" style={{textAlign: 'center'}}>
          <div className="card-icon-wrap mx-auto" style={{margin: '0 auto 1.5rem'}}><i className="fa-solid fa-scale-balanced"></i></div>
          <h3>Accessible Education with Integrity</h3>
          <p>We take pride in offering quality education at an economical fee structure, making it accessible to a diverse range of students. Our commitment to integrity extends to every aspect of our institution, ensuring transparency and fairness in all our dealings.</p>
        </div>
      </div>

      <div className="text-box text-content" style={{borderLeft: '4px solid var(--primary)'}}>
        <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem'}}>Principal's Message</h3>
        <p><strong>Dear Parents, Students, and Well-Wishers,</strong></p>
        <p>I extend a warm welcome to you on behalf of the Amazing Angels Public School family. It is with immense pleasure and pride that I share a glimpse of our school's ethos and commitment to education. At Amazing Angels Public School, we believe in providing not just education but a holistic learning experience. Our school stands as a beacon for quality education, blending moral values with modern teaching methodologies. We envision nurturing young minds to become responsible global citizens who contribute positively to society.</p>
        <p>Our dedicated team of educators is committed to fostering a stimulating and inclusive learning environment. We prioritize both academic excellence and character development, aiming to mold students into well-rounded individuals capable of facing the challenges of the ever-evolving world. I am delighted to share that our board exam results consistently reflect our commitment to academic excellence, with a 100% success rate. This achievement is a testament to the hard work and dedication of our students, teachers, and the entire school community.</p>
        <p>We understand the importance of education accessibility, and therefore, we take pride in offering affordable fees without compromising on the quality of education. Our aim is to make quality education accessible to a diverse range of students, ensuring that financial constraints do not hinder their learning journey. Together, let's embark on a journey of knowledge, growth, and success.</p>
        <p style={{marginTop: '2rem', fontStyle: 'italic', color: 'var(--primary)'}}><strong>Ms. Nargis Shaikh</strong><br/>Principal, Amazing Angels Public School</p>
      </div>
    </div>
  );
}

function Academics() {
  return (
    <div className="section container" style={{paddingTop: '150px'}}>
      <div className="section-header">
        <span className="section-badge">Learning</span>
        <h2 className="section-title">Academics</h2>
      </div>

      <div className="text-box text-content" style={{marginBottom: '4rem', textAlign: 'center'}}>
        <h3 style={{fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '1rem'}}>Academic Overview</h3>
        <p>At Amazing Angels Public School, we take pride in offering a transformative English medium education that goes beyond traditional learning. Our commitment to excellence is reflected in a curriculum designed to ignite curiosity, promote critical thinking, and instill a lifelong love for learning.</p>
        <p>Our consistent 100% board exam results stand as a testament to the quality education and holistic development we offer. This remarkable accomplishment is a reflection of our unwavering commitment to academic excellence and the diligent efforts of our dedicated students and educators.</p>
        
        <div style={{marginTop: '2rem', padding: '1.5rem', background: 'var(--gray-light)', borderRadius: '8px'}}>
          <h4 style={{marginBottom: '0.5rem', color: 'var(--secondary)'}}>Medium of Instruction</h4>
          <p style={{margin: 0}}>As the medium of instruction is English, students are encouraged to speak in English within the school premises to enhance language proficiency.</p>
        </div>
      </div>

      <div className="section-header">
        <h2 className="section-title">Educational Approach</h2>
      </div>

      <div className="grid-3">
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-book-open"></i></div>
          <h3>Curriculum Designed for Success</h3>
          <p>Our curriculum is meticulously crafted to provide a comprehensive and well-rounded education. We believe in nurturing not only academic proficiency but also the development of essential life skills. From the foundational years to advanced studies, our curriculum evolves to meet the changing needs of students.</p>
        </div>
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-chalkboard-user"></i></div>
          <h3>Teaching Methodology that Inspires</h3>
          <p>We employ a diverse range of innovative teaching techniques to cater to various learning styles, ensuring that each student receives personalized attention. Our experienced and dedicated faculty members act as mentors who guide and inspire students.</p>
        </div>
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-flask"></i></div>
          <h3>Holistic Learning Experience</h3>
          <p>Beyond textbooks, we emphasize experiential learning, encouraging students to explore, question, and discover. Practical applications of knowledge are integrated into lessons, fostering critical thinking and problem-solving skills.</p>
        </div>
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-laptop-code"></i></div>
          <h3>Technological Integration</h3>
          <p>In today's digital age, our classrooms are equipped with the latest technological tools to enhance the learning experience. The integration of technology allows for interactive lessons, collaborative projects, and access to a wealth of resources.</p>
        </div>
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-chart-line"></i></div>
          <h3>Continuous Evaluation and Feedback</h3>
          <p>We believe in continuous evaluation to track student progress effectively. Regular feedback sessions provide students with insights into their strengths and areas for improvement, fostering a culture of self-reflection.</p>
        </div>
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-hand-holding-heart"></i></div>
          <h3>Supportive Learning Environment</h3>
          <p>Our school is a community where every student is encouraged to thrive. The supportive learning environment promotes positive interactions, teamwork, and a sense of belonging.</p>
        </div>
      </div>
    </div>
  );
}

function Facilities() {
  return (
    <div className="section container" style={{paddingTop: '150px'}}>
      <div className="section-header">
        <span className="section-badge">Infrastructure</span>
        <h2 className="section-title">Campus Facilities</h2>
      </div>

      <div className="text-box text-content" style={{marginBottom: '4rem', textAlign: 'center'}}>
        <p>Our commitment to providing a nurturing and conducive learning environment is reflected in our modern facilities. With a sprawling 2400 sq ft carpet area, our campus is designed to enhance every aspect of a student's educational journey.</p>
        <p>Our school boasts a modern and well-maintained infrastructure that creates an inviting atmosphere for learning. From well-lit classrooms to spacious common areas, we prioritize the comfort and well-being of our students.</p>
      </div>

      <div className="grid-2">
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-computer"></i></div>
          <h3>Computer Lab</h3>
          <p>Equipped with cutting-edge technology, our lab provides students with hands-on experience in a variety of applications. This space serves as a hub for interactive learning, coding exercises, and research.</p>
        </div>
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-book-open-reader"></i></div>
          <h3>Library</h3>
          <p>A treasure trove of knowledge stocked with an extensive collection of books covering various genres and subjects. The library encourages a love for reading and independent research, serving as a quiet retreat for students.</p>
        </div>
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-palette"></i></div>
          <h3>Art Classes</h3>
          <p>Specialized art classes designed to unleash the artistic potential within each student. These sessions allow them to explore various mediums and forms of expression, contributing to their holistic growth.</p>
        </div>
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-basketball"></i></div>
          <h3>Sports Ground</h3>
          <p>A spacious ground where students engage in various sporting activities. From team sports that instill camaraderie and teamwork to individual pursuits that promote fitness, it is a vital component of our layout.</p>
        </div>
      </div>
    </div>
  );
}

function Activities() {
  return (
    <div className="section container" style={{paddingTop: '150px'}}>
      <div className="section-header">
        <span className="section-badge">Engagement</span>
        <h2 className="section-title">Student Activities</h2>
      </div>

      <div className="text-box text-content" style={{marginBottom: '4rem', textAlign: 'center'}}>
        <p>Beyond academics, Amazing Angels places a strong emphasis on holistic development. Our school is a hub of vibrant activities designed to stimulate critical thinking and problem-solving skills.</p>
      </div>

      <div className="grid-2">
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-trophy"></i></div>
          <h3>Sports Program</h3>
          <p>We recognize the integral role sports play in fostering physical fitness, teamwork, and a competitive spirit. From regular sports competitions to inter-house tournaments, we encourage our students to develop a passion for sportsmanship.</p>
        </div>
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-lightbulb"></i></div>
          <h3>Innovative Activities</h3>
          <p>Innovation is at the heart of our educational philosophy. Our activities go beyond the traditional curriculum, offering a platform to explore, experiment, and showcase inventive ideas through science fairs and project-based learning.</p>
        </div>
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-masks-theater"></i></div>
          <h3>Cultural Activities</h3>
          <p>We celebrate the tapestry of traditions that make our community unique. Through cultural festivals, dance, and music performances, students are encouraged to showcase their talents and learn about rich heritage.</p>
        </div>
        <div className="premium-card">
          <div className="card-icon-wrap"><i className="fa-solid fa-flag"></i></div>
          <h3>National Celebrations</h3>
          <p>Republic Day, Independence Day, Youth Day, and other national celebrations are observed with great enthusiasm and patriotic fervor, fostering a sense of unity and civic responsibility.</p>
        </div>
      </div>
    </div>
  );
}

function Admission() {
  return (
    <div className="section container" style={{paddingTop: '150px'}}>
      <div className="section-header">
        <span className="section-badge">Join Us</span>
        <h2 className="section-title">Admission & Policies</h2>
      </div>

      <div className="grid-2" style={{alignItems: 'start'}}>
        <div className="text-box text-content">
          <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)'}}>General Guidelines</h3>
          <ul>
            <li><strong>Age Criteria:</strong> Children should be around 3 years of age for Class Nursery.</li>
            <li><strong>Session Commencement:</strong> The new academic session commences on April 1st.</li>
            <li><strong>RTE Act Provisions:</strong> Seats reserved under the Right to Education Act 2009 for poor and economically weaker sections are available, subject to government criteria and school rules.</li>
            <li><strong>Evaluation Tests:</strong> Applicants seeking admission to Class II through Class VIII may undergo a test to determine the appropriate grade. Test dates are provided upon form submission, and formalities must be completed within 7 days of results declaration.</li>
            <li><strong>Timely Preparation:</strong> Parents are advised to purchase books and stationery by March 31st to ensure students start on April 1st without academic loss.</li>
          </ul>

          <h3 style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1.5rem', color: 'var(--primary)'}}>Admission Procedure & Documents</h3>
          <p>A student seeking admission must provide completely filled and signed applications along with the following certificates:</p>
          <ul>
            <li>Vaccination certificates.</li>
            <li>Birth certificate.</li>
            <li>Medical Certificate confirming good health.</li>
            <li>School transfer, character, and attendance certificates from the previous school, alongside the mark sheet of the last examination.</li>
            <li>Three latest passport-size photographs.</li>
          </ul>
          <div style={{background: 'var(--primary-light)', color: 'var(--white)', padding: '1rem', borderRadius: '8px', marginTop: '1rem'}}>
            <strong>Note:</strong> An admit card will be issued upon completion, which must be presented to the class teacher on the student's first day.
          </div>
        </div>

        <div>
          <div className="premium-card" style={{marginBottom: '2rem'}}>
            <h3 style={{fontSize: '1.5rem', color: 'var(--primary)'}}>Rules & School Policies</h3>
            <div className="text-content mt-3">
              <p><strong>Punctuality:</strong> The school gate closes 15 minutes after the prayer bell. Students arriving late more than two days in a month will be sent back.</p>
              <p><strong>Attendance Requirements:</strong> Regular attendance is essential. Students must achieve an attendance rate of at least 75% in each term to maintain academic eligibility. Absences exceeding three days due to medical reasons require a doctor's certificate.</p>
              <p><strong>Withdrawal Notice:</strong> For student withdrawals, one month's written notice must be given; otherwise, one month's fees will be charged. Transfer Certificates are issued only after clearing all school dues.</p>
              <p><strong>Striking Off Rolls:</strong> Names will be removed from the school rolls for 15 consecutive days of unexplained absence, failure to pay fees for two consecutive months, or habitual rule violations. Re-admission requires a fresh admission fee.</p>
            </div>
          </div>

          <div className="premium-card" style={{background: 'var(--dark)', color: 'var(--white)'}}>
            <h3 style={{fontSize: '1.5rem', color: 'var(--secondary)'}}>Meritorious Scholarships & Medals</h3>
            <p style={{color: 'rgba(255,255,255,0.9)'}}>Outstanding achievements deserve recognition, and at our school, we take pride in honoring excellence. Every year, the top three students will be awarded Gold, Silver, and Bronze Medals based on a comprehensive evaluation of academic performance, extracurricular participation, and personal behavior.</p>
            
            <h4 style={{marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--white)'}}>Begam Mehrunnisa Scholarships</h4>
            <p style={{fontSize: '0.9rem', marginBottom: '1rem', color: 'rgba(255,255,255,0.8)'}}>Generously sponsored by the Hazrat Mohammad Azam Charity Foundation, recipients will receive the following financial awards:</p>
            
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem'}}>
                <span style={{color: '#FFD700', fontWeight: 'bold'}}><i className="fa-solid fa-medal"></i> Gold Medalist</span> 
                <span>Rs. 2000/-</span>
              </li>
              <li style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem'}}>
                <span style={{color: '#C0C0C0', fontWeight: 'bold'}}><i className="fa-solid fa-medal"></i> Silver Medalist</span> 
                <span>Rs. 1500/-</span>
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{color: '#CD7F32', fontWeight: 'bold'}}><i className="fa-solid fa-medal"></i> Bronze Medalist</span> 
                <span>Rs. 1000/-</span>
              </li>
            </ul>
            
            <p style={{fontSize: '0.8rem', marginTop: '1.5rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)'}}>The selection process is conducted each April by a specially constituted Medals Committee, evaluating performance from the preceding year.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="section container" style={{paddingTop: '150px'}}>
      <div className="section-header">
        <span className="section-badge">Reach Out</span>
        <h2 className="section-title">Contact Us</h2>
      </div>
      
      <div className="grid-3" style={{marginBottom: '3rem'}}>
        <div className="premium-card text-center" style={{textAlign: 'center'}}>
          <div className="card-icon-wrap mx-auto" style={{margin: '0 auto 1.5rem'}}><i className="fa-solid fa-map-location-dot"></i></div>
          <h3>Address</h3>
          <p>Amazing Angels Public School<br/>211 Samrat Nagar, Khajrana,<br/>Indore, M.P. 452016</p>
        </div>
        <div className="premium-card text-center" style={{textAlign: 'center'}}>
          <div className="card-icon-wrap mx-auto" style={{margin: '0 auto 1.5rem'}}><i className="fa-solid fa-phone-volume"></i></div>
          <h3>Phone</h3>
          <p style={{fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem'}}>9770103319</p>
          <p>Monday to Friday: 9:00 AM - 4:00 PM</p>
        </div>
        <div className="premium-card text-center" style={{textAlign: 'center'}}>
          <div className="card-icon-wrap mx-auto" style={{margin: '0 auto 1.5rem'}}><i className="fa-solid fa-envelope-open-text"></i></div>
          <h3>Email</h3>
          <p>amazingangelsgroup@gmail.com</p>
        </div>
      </div>

      <div className="grid-2">
        <div className="text-box text-content">
          <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)'}}>School Schedules</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--gray-light)'}}>
              <strong>Junior Section:</strong>
              <span style={{color: 'var(--primary)', fontWeight: '600'}}>7:55 AM - 12:15 PM</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--gray-light)'}}>
              <strong>Middle & Senior Section:</strong>
              <span style={{color: 'var(--primary)', fontWeight: '600'}}>12:15 PM - 04:15 PM</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <strong>Office Operating Hours:</strong>
              <span style={{color: 'var(--primary)', fontWeight: '600'}}>10:30 AM - 2:00 PM</span>
            </div>
          </div>
        </div>
        
        <div className="text-box text-content">
          <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)'}}>Visiting & Communication Rules</h3>
          <ul>
            <li><strong>Principal Meetings:</strong> Between 10:30 AM to 2:00 PM.</li>
            <li><strong>Teacher Meetings:</strong> Allowed in the school office with the prior permission of the Principal. Parents/visitors are kindly requested not to visit classrooms during operational hours.</li>
            <li><strong>Holiday Business:</strong> No school business or administrative transactions will take place on holidays.</li>
            <li><strong>Fee Deadlines:</strong> All school fees must be paid by the 15th of every installment month in advance. No demand notice will be sent automatically.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div>
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      <main style={{ minHeight: 'calc(100vh - 400px)' }}>
        {currentView === 'home' && <Home setCurrentView={setCurrentView} />}
        {currentView === 'about' && <About />}
        {currentView === 'academics' && <Academics />}
        {currentView === 'facilities' && <Facilities />}
        {currentView === 'activities' && <Activities />}
        {currentView === 'admission' && <Admission />}
        {currentView === 'contact' && <Contact />}
      </main>
      <Footer setCurrentView={setCurrentView} />
    </div>
  );
}

export default App;
