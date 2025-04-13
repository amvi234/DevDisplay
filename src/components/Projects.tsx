export default function Projects() {
    const items = [
        { name: 'CartVault', GitHub: "https://github.com/amvi234/CartVault", LiveLink: "", Tech: ['NextJS', 'Typescript', 'DJango', 'Python', 'Docker', 'Tailwind CSS'], Status: "Ongoing", Description: "" },
        { name: 'DevDisplay', GitHub: "https://github.com/amvi234/DevDisplay", LiveLink: "https://amitvikramportfolio.netlify.app/", Tech: ['ReactJS', 'TypeScript', 'SASS'], Status: "Completed", Description: "" },
        { name: 'DineEase', GitHub: "https://github.com/amvi234/DineEase", LiveLink: "", Tech: ['Django', 'Python', 'AJAX', 'Razorpay'], Status: "Completed", Description: "" },
        { name: 'SoleMate', GitHub: "https://github.com/amvi234/SoleMate", LiveLink: "https://advance-filtering-e-com.netlify.app/", Tech: ['React', 'Javascript', 'CSS'], Status: "Completed", Description: "" }
    ];

    return (
        <div className="projects">
            <h3 className="projects__title">Projects</h3>
            <ul className="projects__grid">
                {items.map((project, index) => (
                    <li key={project.name} className={`projects__item projects__item--${index % 8 + 1}`}>
                        <a
                            href={project.GitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projects__link"
                        >
                            {project.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}