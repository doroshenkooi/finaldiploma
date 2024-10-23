import { exportSeanceID, exporthallID, exportfilmID } from './script.js';

   document.addEventListener("DOMContentLoaded", function () {
    let date = new Date();
    const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  
    const seanceDays = document.querySelectorAll(".seance_day");
  
    seanceDays.forEach((seanceDay, i) => {
      let nextDate = new Date(date);
      nextDate.setDate(date.getDate() + i);
  
      const dayOfWeek = days[nextDate.getDay()];
      const dateNext = nextDate.getDate();
  
      const seanceDayWeek = document.createElement("div");
      seanceDayWeek.className = "seance_day-week";
      seanceDayWeek.innerHTML = `
            <span class="seance_day-week_today">${i === 0 ? "Сегодня" : ""}</span>
            <div class="seance_day-week_text-today"> 
                <span class="seance_day-week_text">${dayOfWeek}</span>
                <span class="seance_day-data">${dateNext}</span>
            </div>`;
  
      seanceDay.append(seanceDayWeek);
    });
  });
  const seanceDay = document.querySelector(".seance_day");
  seanceDay.addEventListener("click", function () {
   
    fetch('https://shfe-diplom.neto-server.ru/alldata')
      .then((response) => response.json())
      .then((data) => {
        
        data.result.films.forEach((film) => {
          const filmID = exportfilmID(); 
          if (film.id == `${filmID}`) {
            let filmName = film.film_name;
            let filmPoster = film.film_poster;
            let filmDiscription = film.film_description;
            let filmDuration = film.film_duration;
            let filmOrigin = film.film_origin;
  
            data.result.halls.forEach((hall) => {
              const hallID = exporthallID();
              if (hall.id == `${hallID}`) {
                let hallName = hall.hall_name;
                //Время начала сеанса
              
                    const hallClient = document.querySelector(".hall-client");
  
                    const sectionMovie = document.createElement("section");
                    sectionMovie.className = "section_movie";
                    sectionMovie.innerHTML = `
      <section class="section_movie">
  <div class="movie_info">
          <img class="movie_poster" src="${filmPoster}">  
          
          <div class="movie_discription">
                  <div class="movie_name">
                  <span class="movie_name-text">${filmName}</span>
                  </div> 
                  <div class="movie_synopsis">
                  <span class="movie_synopsis-text">${filmDiscription}</span>
                  </div>   
                  <div class="movie_data">
                  <span class="movie_duration">${filmDuration} минут</span>
                  <span class="movie_origin">${filmOrigin}</span>
                  </div>   
          </div>    
       </div> 
              <div class="movie-seances_hall">
   <span class="movie_seances-text">${hallName}</span>
   <div class="list">
   
   </div>
   </div>
  </section>
   `;
    hallClient.append(sectionMovie);
               
     data.result.seances.forEach((seance) => {
      const seanceID = exportSeanceID();
                  if (seance.id == `${seanceID}`) {
                    let seanceTime = seance.seance_time;
                    
                    const list = document.querySelector('.list');
     const item = document.createElement("div");
     item.className = "item";
     item.innerHTML =` 
                      <div class="item">
     <div class="link">
     <span class="link-text">${seanceTime}</span>
     </div>
     </div>`;
  
     list.append(item);
     
                      
                  }
                });
              }
            });
         }
        });
        console.log(data);
      });
  });
  
  const goCinemaEntry = document.querySelector(".go_cinema-entry");
  