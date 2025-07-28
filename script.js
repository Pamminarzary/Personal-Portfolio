document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".project-list");
  if (!container) return;

  projects.forEach((project, idx) => {
    const article = document.createElement("article");
    article.className = "project-card";

  const img = document.createElement("img");
  img.className = "project-img";
  img.src = project.image || 'assets/default.png';
  img.alt = `${project.name} screenshot`;
  img.loading = 'lazy';

  const info = document.createElement("div");
  info.className = "project-info";

  const title = document.createElement("h3");
  title.id = `proj-title-${idx}`;
  title.textContent = project.name;

    const desc = document.createElement("p");
    desc.id = `proj-desc-${idx}`;
    desc.textContent = project.desc;

    const link = document.createElement("a");
    link.href = project.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "View project";
    link.setAttribute("aria-label", `View project: ${project.name}`);

    info.append(title, desc, link);
    article.append(title, desc, link);
    container.appendChild(article);
  });
});
