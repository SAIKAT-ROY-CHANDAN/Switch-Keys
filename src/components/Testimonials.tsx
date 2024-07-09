import { testimonials } from "../constants"
import TestimonialCard from "./TestimonialCard"


const Testimonials = () => {

  return (
    <div className="flex flex-col items-center justify-center gap-5 py-12">
      <h1 className="mb-1 max-w-2xl text-center text-2xl font-semibold tracking-tighter text-gray-900 md:text-4xl dark:text-gray-100">
        Why people love SyntaxUI
      </h1>
      <p className="max-w-2xl text-center text-sm font-light text-gray-600 md:text-base dark:text-gray-400">
        SyntaxUI is loved by the community and is used by many companies. It is
        a great tool for rapid development and launching projects.
      </p>
      <div className="relative mt-12 flex h-full w-full flex-col items-center justify-center gap-x-10 gap-y-4 md:flex-row">
        {[0, 1, 2].map((colIndex) => (
          <div key={colIndex} className="flex flex-col justify-center gap-4">
            {testimonials
              .slice(colIndex * 2, colIndex * 2 + 2)
              .map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials