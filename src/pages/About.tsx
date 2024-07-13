import { cn } from "@/lib/utils";

// const images = [
//   "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1682430765001-f71c7ef767e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// ];

const demoArray = [
  {
    id: 1,
    title: "Card 1",
    description: "Description for Card 1",
    imageUrl: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    hoverImageUrl: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
  },
  {
    id: 2,
    title: "Card 2",
    description: "Description for Card 2",
    imageUrl: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    hoverImageUrl: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
  },
  {
    id: 3,
    title: "Card 3",
    description: "Description for Card 3",
    imageUrl: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    hoverImageUrl: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
  },
  {
    id: 4,
    title: "Card 4",
    description: "Description for Card 4",
    imageUrl: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    hoverImageUrl: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
  },
  {
    id: 5,
    title: "Card 5",
    description: "Description for Card 5",
    imageUrl: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    hoverImageUrl: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
  },
];


const About = () => {
  return (
    <div className="mt-28">
      <div className="w-[40rem] translate-x-20 mt-10">
        <h6 className="text-[#6e6e6e] font-medium">Our Mission</h6>
        <h1 className="text-black text-xl sm:text-3xl font-semibold"><span className="font-extrabold">Precision</span>-crafted keyboards for exceptional <span className="font-extrabold">Performance</span> and <span className="font-extrabold">Durability.</span></h1>
      </div>

      <div className="mb-20 mt-10 w-[95%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1">
          {demoArray.map((item) => (
            <div
              key={item.id}
              className={cn(
                "group w-full cursor-pointer overflow-hidden relative card h-[28rem] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                `bg-[url(${item.imageUrl})] bg-cover`,
                `before:bg-[url(${item.hoverImageUrl})] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
                `hover:bg-[url(${item.hoverImageUrl})]`,
                `hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50`,
                "transition-all duration-500"
              )}
            >
              <div className="text relative z-50">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                  {item.title}
                </h1>
                <p className="font-normal text-base text-gray-50 relative my-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default About