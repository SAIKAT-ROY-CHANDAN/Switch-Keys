import { motion } from "framer-motion"
import { projectsData } from "../constants"

const Service = () => {

    return (
        <div className="my-20">
            <div className="grid w-[80vw] justify-items-center items-center grid-cols-2 gap-10 md:grid-cols-3  mx-auto">
                {projectsData.map((project) => {
                    return (
                        <motion.div
                            whileHover={{
                                y: -8,
                            }}
                            transition={{
                                type: 'spring',
                                bounce: 0.8,
                            }}
                            key={project.id}
                            className="mt-5 text-left"
                        >
                            <a target="_blank" rel="noopener noreferrer" href={project.link}>
                                <img
                                    src={project.image}
                                    width={40}
                                    height={40}
                                    className="mb-3 rounded-lg border-gray-400 dark:border"
                                    alt={project.name}
                                />
                                <div className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                                    {project.name}
                                </div>
                                <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
                                    {project.description}
                                </div>
                            </a>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default Service