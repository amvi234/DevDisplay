import { FaGithub, FaLink, FaReact, FaPython, FaDocker, FaCss3, FaJs } from "react-icons/fa";
import { DiDjango, DiSass } from "react-icons/di";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { ReactElement } from "react";


const Projects = () => {

    const techIcons:{ [key: string]: ReactElement } = {
        'NextJS': <SiNextdotjs title="NextJS" />,
        'Typescript': <SiTypescript title="TypeScript" />,
        'TypeScript': <SiTypescript title="TypeScript" />,
        'DJango': <DiDjango title="Django" />,
        'Django': <DiDjango title="Django" />,
        'Python': <FaPython title="Python" />,
        'Docker': <FaDocker title="Docker" />,
        'Tailwind CSS': <SiTailwindcss title="Tailwind CSS" />,
        'ReactJS': <FaReact title="ReactJS" />,
        'React': <FaReact title="React" />,
        'SASS': <DiSass title="SASS" />,
        'Javascript': <FaJs title="JavaScript" />,
        'CSS': <FaCss3 title="CSS" />,
        'AJAX': <FaJs title="AJAX" />
    };

    const items = [
        { name: 'CartVault', GitHub: "https://github.com/amvi234/CartVault", LiveLink: "", Tech: ['NextJS', 'Typescript', 'DJango', 'Python', 'Docker', 'Tailwind CSS'], Status: "Ongoing", Description: "Often People have the habit of saving their loved product in platforms like flipkart, amazon, etc. Created a app to retrieve the item as per your desired choices." },
        { name: 'DevDisplay', GitHub: "https://github.com/amvi234/DevDisplay", LiveLink: "https://amitvikramportfolio.netlify.app/", Tech: ['ReactJS', 'TypeScript', 'SASS'], Status: "Completed", Description: "A React website showcases skills, about section, projects section and contacts. Hosted on Netlify for easy access." },
        { name: 'DineEase', GitHub: "https://github.com/amvi234/DineEase", LiveLink: "", Tech: ['Django', 'Python', 'AJAX'], Status: "Completed", Description: "Often restaurants have the issue of maintaining their transactions. DEveloped this app to solve the common issue of Point of Sale(POS) System." },
        { name: 'SoleMate', GitHub: "https://github.com/amvi234/SoleMate", LiveLink: "https://advance-filtering-e-com.netlify.app/", Tech: ['React', 'Javascript', 'CSS'], Status: "Completed", Description: "React project displays items with advanced filtering features to sort the shoe items. Responsive with all layouts. Hosted on netlify" }
    ];

    return (
        <div className="projects">
            <h3 className="projects__title">Projects</h3>
            <ul className="projects__grid">
                {items.map((project) => (
                    <li key={project.name} className={`projects__item`}>
                        <span className="projects__item--name">
                            {project.name}
                        </span>
                        <span className="projects__item--status">
                            Status - {project.Status}
                        </span>
                        <span className="projects__item--description">
                            {project.Description}
                        </span>
                        <div className="projects__item--tech">
                            {project.Tech.map((tech) => (
                                <span key={tech} className="tech-icon" title={tech}>
                                    {techIcons[tech] || tech}
                                </span>
                            ))}
                        </div>

                        <div className="projects__item--links">
                            <a
                                href={project.GitHub}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social-link"
                                title="GitHub"
                            >
                                <FaGithub size={24} className="footer__social-icon" />
                            </a>
                            {project.LiveLink !== "" && (
                                <a
                                    href={project.LiveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__social-link"
                                    title="HackerRank"
                                >
                                    <FaLink size={24} className="footer__social-icon" />
                                </a>)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projects;