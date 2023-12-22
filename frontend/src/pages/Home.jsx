import ContactUs from '../sections/ContactUs'
import Hero from '../sections/Hero'
import WhyUs from '../sections/WhyUs'
import OurChoice from '../sections/OurChoice'

const Home = () => {
  return (
    <div className='scroll-smooth'>
      <Hero/>
      <hr />
      <WhyUs/>
      <hr />
      <OurChoice/>
      <hr />
      <ContactUs/>
    </div>
  )
}

export default Home