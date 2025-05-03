
export default function Skills() {
  const technologies = [
    { name: "React.js", url: "https://reactjs.org/" },
    { name: "Django", url: "https://www.djangoproject.com/" },
    { name: "Typescript", url: "https://www.typescriptlang.org/" },
    { name: "Javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Python", url: "https://www.python.org/" },
    { name: "SCSS", url: "https://sass-lang.com/" },
    { name: "Next.js", url: "https://nextjs.org/" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
    { name: "Redux", url: "https://redux.js.org/" },
    { name: "Git", url: "https://git-scm.com/" },
    { name: "Docker", url: "https://www.docker.com/" },
    { name: "AWS", url: "https://aws.amazon.com/" },
    { name: "CI/CD", url: "https://en.wikipedia.org/wiki/CI/CD" },
    { name: "PostgreSQL", url: "https://www.postgresql.org/" },
    { name: "Node.js", url: "https://nodejs.org/" },
  ];

  return (
    <div className="skills">
      <h3 className="skills__title">Technologies</h3>
      <ul className="skills__grid">
        {technologies.map((tech, index) => (
          <li key={tech.name} className={`skills__item skills__item--${index % 8 + 1}`}>
            <a 
              href={tech.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="skills__link"
            >
              {tech.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}