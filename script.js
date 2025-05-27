document.addEventListener("DOMContentLoaded", () => {
    const projects = [
      {
        name: "Weather App",
        description: "Fetches live weather using an API.",
        link: "Weather-App/index.html"
      },
      {
        name: "Tic-tac-toe",
        description: "A mini game",
        link: "Tic-tac_toe/index.html"
      },
      {
        name: "Currency Converter",
        description: "Convert the currency of one county to another",
        link: "Currency Converter/index.html"
      },
      {
        name: "Quiz App",
        description: "Guess the correct answer",
        link: "quiz app/index.html"

      },
      {
        name: "To-Do List",
        description: "Day to day timetable to make",
        link: "To-do List/index.html"

      }
    ];
  
    const container = document.querySelector(".project-list");
  
    projects.forEach(project => {
      const card = document.createElement("div");
      card.innerHTML = `<h3>${project.name}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank">View</a>`;
      container.appendChild(card);
    });
  });
  