import axios from "axios";
import RepoCard from "../../components/RepoCard";
import repositories from "../../localAPI/local.json";
import styles from "./Projects.module.scss";

interface RepoData {
  id: number;
  name: string;
  desc: string;
  demoLink: string;
  repoLink: string;
  languages_url: string;
  tags: Array<string>;
}

export default function Projects() {
  const URL = "https://api.github.com/users/guipaex/repos";
  console.log(repositories);

  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}> Projetos Selecionados</h2>
      {repositories.map((repo) => (
        <RepoCard
          key={repo.id}
          name={repo.name}
          repoLink={repo.html_url}
          desc={repo.description}
          demoLink={repo.homepage}
          languages_url={repo.languages_url}
          tags={repo.topics}
        />
      ))}
    </div>
  );
}
