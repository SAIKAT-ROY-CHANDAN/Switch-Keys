import Brands from "../components/Brands"
import Hero from "../components/Hero"
import NewArrival from "../components/NewArrival"
import Service from "../components/Service"
import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"
import ShowCase from "../components/ShowCase"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <Service />
      <NewArrival />
      <ShowCase />
      <Brands />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home