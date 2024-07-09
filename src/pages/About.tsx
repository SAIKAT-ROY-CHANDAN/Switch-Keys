const images = [
  "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682430765001-f71c7ef767e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

interface GridItemProps {
  src?: string;
  spanCols?: number;
  spanRows?: number;
  isText?: boolean;
  text?: string;
}

const GridItem = ({ src, spanCols = 1, spanRows = 1, isText = false, text = '' }: GridItemProps) => (
  <div className={`bg-white/10 h-full col-span-${spanCols} row-span-${spanRows} rounded-lg border hover:scale-[101%] duration-200 border-black/15 w-auto flex items-center justify-center`}>
    {isText ? (
      <p className="text-center font-bold hover:-translate-y-2 duration-300 ease-linear text-3xl">{text}</p>
    ) : (
      <img className="h-full object-cover object-right" src={src} alt="" />
    )}
  </div>
);


const About = () => {
  return (
    <div className="relative top-20">
      <div className="w-[40rem] translate-x-20 mt-10">
        <h6 className="text-[#6e6e6e] font-medium">Our Mission</h6>
        <h1 className="text-black text-xl sm:text-3xl font-semibold"><span className="font-extrabold">Precision</span>-crafted keyboards for exceptional <span className="font-extrabold">Performance</span> and <span className="font-extrabold">Durability.</span></h1>
      </div>

      <div className="grid grid-cols-4 grid-rows-4 gap-1 mt-20 mx-20">
        <GridItem src={images[0]} spanCols={2} spanRows={2} />
        <GridItem isText={true} text="Vision for tomorrow." />
        <GridItem src={images[2]} spanRows={2} />
        <GridItem src={images[1]} spanRows={2} />
        <GridItem isText={true} text="Collaboration fuels success." spanCols={2} />
        <GridItem isText={true} text="Tomorrow's success starts today." />
      </div>
    </div>

  )
}

export default About