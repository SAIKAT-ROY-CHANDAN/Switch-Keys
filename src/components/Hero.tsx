import heroVid from "../assets/videos/herovideo.mp4"

const Hero = () => {

  return (
    <div className="w-full mt-[108px] 2xl:mt-[88px]">
      <video className="w-full relative top-0 h-[80vh] object-cover" autoPlay loop muted>
        <source src={heroVid} type="video/mp4" />
      </video>
      <div className="absolute h-[80vh] top-[108px] 2xl:top-[88px] inset-0 bg-gradient-to-tr from-def/50 via-black/40 to-transparent">
        <div className="flex flex-col items-center justify-center translate-y-40 gap-y-8 2xl:gap-y-10 mx-3 md:mx-10 lg:w-9/12 lg:mx-auto">
          <h1 className="font-bold text-5xl text-center text-white 2xl:mb-4">Unlock the Power of Mechanical <span className="text-def">Mastery</span>.</h1>
          <p className=" text-[#e6e6e6] font-mono text-center sm:mx-10 xl:w-10/12 2xl:w-8/12 2xl:mb-8">Our keyboards are a work of art, meticulously crafted for those who appreciate the finer details. With precision engineering and attention to every aspect of design, they offer a typing experience that is second to none.</p>
          <button className="bg-def px-6 py-3 text-white rounded-md font-semibold hover:bg-transparent hover:text-def hover:font-bold hover:border border-white">Browse</button>
        </div>
      </div>
    </div>
  )
}

export default Hero