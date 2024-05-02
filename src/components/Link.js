import user from "../data/user";


export default function Link() {
    const { github, linkedin } = user.links;
  
    return (
      <div>
        <h3>Link</h3>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a>
      </div>
    );
  }