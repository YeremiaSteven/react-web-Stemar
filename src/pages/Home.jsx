import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeSection } from '../data/HomeSection'
import { coursesSection } from '../data/CoursesSection'
import { tutorSection, tutorList } from '../data/TutorsSection'
import Tutors from '../components/Tutors'
import { partnersSection, partnerList } from '../data/PartnersSection'
import Partners from '../components/Partners'
import Contact from '../components/Contact'
import { contactSection } from '../data/ContactSection'

import parse from 'html-react-parser'
import '../styles/Home.css'
import '../components/Footer'

function Home() {
  return (
     <>
    <Navbar/>
    <div className='wrapper'>

        {/* home */}
        
            <section id="home">
            <img src={homeSection.image}/>
            <div className="kolom">
                {parse (homeSection.content)}
            </div>
        </section>
        
        {/* online course */}

        <section id="courses">
            <div className="kolom">
                {parse (coursesSection.content)}
            </div>
            <img src={coursesSection.image}/>
        </section>


{/* Tutors  */}


<section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorSection.content)}
                </div>

                <Tutors tutorList= {tutorList}/>   


            </div>
</section>



{/* partners */}

<section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(partnersSection.content)}
                </div>
                <Partners partnersList={partnerList}/>
            </div>
</section>

</div>




    <Contact contactSection = {contactSection}/>
    <Footer/>
    </>
  )
}

export default Home
