
const authorization = document.querySelector('.authorization');
const emailInput = document.querySelector('.authorization-input-email');
const passwordInput = document.querySelector('.authorization-input-password');
const form = document.querySelector('.authorization-form');
const authorizationBtn = document.querySelector('.authorization-btn');

if (authorizationBtn !== null) {
authorizationBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  
  fetch('https://shfe-diplom.neto-server.ru/login', {
    method: 'POST',
    body: JSON.stringify({ login: email, password: password }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Ошибка авторизации');
    }
  })
  .then(result => {
    console.log(result);
    authorization.style.display = 'none';
   
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
});
}
//создание зала

  document.addEventListener("DOMContentLoaded", function addHall() {
  const createHallButton = document.getElementById("btn-create-hall");
  if (createHallButton !== null) {
  createHallButton.addEventListener("click", function () {
    // Получаем название нового кинозала

    const newName = prompt("Введите название нового кинозала:");

    const newHall = document.createElement("div");
    newHall.className = "choosing-hall-one";
    newHall.innerHTML = ` <div class="choosing-hall-one" id="hall-btn-one">
          
            <div class="dash-one">
                <span>-</span>
            </div>
            <div class="choosing-hall-text">
                <span>${newName}</span>
            </div>
            <button class="basket-button">
            </button>
            </div>`;

    const hallName = new FormData();
    hallName.set("hallName", `${newName}`);
    fetch("https://shfe-diplom.neto-server.ru/hall", {
      method: "POST",
      body: hallName,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let lastIndex = data.result.halls.length - 1;
        let IdHall = data.result.halls[lastIndex].id;

        window.localStorage.setItem("IDHall", `${IdHall}`);
        console.log(data);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });

    const newHallnew = document.querySelector(".choosing-list-managament");
    newHallnew.appendChild(newHall);
    // кнопка конфигурация зала
    const newHallBtn = document.createElement("div");
    newHallBtn.ById = "hall-btn";
    newHallBtn.innerHTML = `<div><button class="choice-one-hall" type="button">
           <span class="hall-button-text">${newName}</span></button>
        </div>`;
    const choiceOneHallBtn = newHallBtn.querySelector(".choice-one-hall");
    choiceOneHallBtn.addEventListener("click", choiceOneHallBtnClick);

    const btnConfig = document.querySelector(".choice-list");
    btnConfig.appendChild(newHallBtn);
    // кнопка стоимость билетов
    const newHallpriceBtn = document.createElement("div");
    newHallpriceBtn.className = "price-one-hall";
    newHallpriceBtn.innerHTML = `<button class="price-one-hall" type="button">
            <span class="hall-button-text">${newName}</span></button>`;

    const pricebtnConfig = document.querySelector(".price-list");
    pricebtnConfig.appendChild(newHallpriceBtn);
    // кнопка открытия залов

    const openSalesOneHall = document.createElement("div");
    openSalesOneHall.className = "price-one-hall";
    openSalesOneHall.innerHTML = ` <button class="open-sales-one-hall" type="button">
            <span class="hall-button-text">${newName}</span></button>`;

    const openSalesList = document.querySelector(".open-sales-list");
    openSalesList.appendChild(openSalesOneHall);
    // Рамка зал сеансов
    const movieSessions = [
      { hour: "10", containers: [] },
      { hour: "12", containers: [] },
      { hour: "14", containers: [] },
      { hour: "16", containers: [] },
      { hour: "18", containers: [] },
    ];

    const movieHallNext = document.createElement("div");
    movieHallNext.className = "movie-hall-next";
    movieHallNext.innerHTML = `
          <div class="movie-hall-next">
              <div class="movie-hall-title">
                  <span class="movie-hall-title-text">${newName}</span>
              </div>
              <div id="movie-hall-frame" class="movie-hall-time-frame"></div>
          </div>
      `;

    const movieHallAdd = document.querySelector(".movie-hall-add-one");
    movieHallAdd.appendChild(movieHallNext);

    const seanceDataEntry = document.querySelector(".seance-data-entry");
    const movieHallTimeFrames = document.querySelectorAll(
      ".movie-hall-time-frame"
    );

    movieHallTimeFrames.forEach((frame) => {
      frame.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      frame.addEventListener("drop", (e) => {
        e.preventDefault();

        const movieId = e.dataTransfer.getData("text");
        const originalMovie = document.getElementById(movieId).querySelector(".movie-combo");
        if (originalMovie) {
          const duplicateMovie = originalMovie.cloneNode(true);
          const newMovieContainer = document.createElement("div");

          newMovieContainer.classList.add("movie-one");
          newMovieContainer.id = `movie-${Date.now()}`; // уникальный id для дубликата
          newMovieContainer.appendChild(duplicateMovie);

          seanceDataEntry.style.display = "flex";

          // Всплывающее окно добавление сеанса

          const filmName = window.localStorage.getItem("filmName");
          const seanceName = document.getElementById("seance-f");
          seanceName.value = filmName.toString();

          const seanceHall = document.getElementById("seance-h");
          seanceHall.value = `${newName}`.toString();
          const seanceBtnSave = document.getElementById("seance-send");
          seanceBtnSave.addEventListener(
            "click",
            (e) => {
              // Добавление начала сеанса

              const movieStartTime = document.createElement("span");
              movieStartTime.className = "movie-start-time-text";
              const seanceTime = document.getElementById("seance-time").value;
              window.localStorage.setItem("seanceTime", `${seanceTime}`);

              movieStartTime.textContent = seanceTime;
              newMovieContainer.appendChild(movieStartTime);
              newMovieContainer.style.width = "100px";

              const hour = parseInt(seanceTime.substring(0, 2));

              // Добавим элемент в соответствующий контейнер
              let targetSessionIndex = -1;
              if (hour === 10) targetSessionIndex = 0;
              else if (hour === 12) targetSessionIndex = 1;
              else if (hour === 14) targetSessionIndex = 2;
              else if (hour === 16) targetSessionIndex = 3;
              else if (hour === 18) targetSessionIndex = 4;

              if (targetSessionIndex !== -1) {
                movieSessions[targetSessionIndex].containers.push(
                  newMovieContainer
                );

                // Очистим контейнер
                while (frame.firstChild) {
                  frame.removeChild(frame.firstChild);
                }

                // Добавим элементы по порядку
                movieSessions.forEach((session) => {
                  session.containers.forEach((movie) => {
                    frame.appendChild(movie);
                  });
                });
              }

              seanceDataEntry.style.display = "none";
            },
            { once: true }
          );
          //Удаление из сеанса в корзину
          const trash = document.getElementById("trash");

          newMovieContainer.addEventListener("dragstart", (e) => {
            trash.style.display = "flex";
          });

          trash.addEventListener("dragover", (e) => {
            e.preventDefault();
            trash.style.display = "flex";
          });

          // Обрабатываем событие 'drop' на trash-контейнере
          trash.addEventListener("drop", (e) => {
            e.preventDefault();
            const draggedElement = document.querySelector(".dragging");
            if (draggedElement) {
              frame.removeChild(draggedElement);
            }
            trash.style.display = "none";
          });

          newMovieContainer.addEventListener("dragstart", (e) => {
            newMovieContainer.classList.add("dragging"); // Добавляем класс 'dragging' для идентификации
          });

          // Событие завершения перетаскивания
          newMovieContainer.addEventListener("dragend", (e) => {
            newMovieContainer.classList.remove("dragging");
            trash.style.display = "none";
          });
        }
      });
      const movieSelectionInput = document.querySelector(".movie-selection-input");
      movieSelectionInput.addEventListener("click", (e) => {
        const seanceHallid = JSON.parse(window.localStorage.getItem("IDHall"));
        const seanceFilmid = JSON.parse(window.localStorage.getItem("IDFilm"));
        const seanceTime = window.localStorage.getItem("seanceTime");

        const params = new FormData();
        params.set("seanceHallid", seanceHallid);
        params.set("seanceFilmid", seanceFilmid);
        params.set("seanceTime", seanceTime);

        fetch("https://shfe-diplom.neto-server.ru/seance", {
          method: "POST",
          body: params,
        })
          .then((response) => response.json())
          .then((data) => {
            let lndexSeance = data.result.seances.length - 1;

            let idSeance = data.result.seances[lndexSeance].id;

            window.localStorage.setItem("idSeance", `${idSeance}`);
            console.log(idSeance);

            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });

      const movieSelectionButton = document.querySelector(
        ".movie-selection-button"
      );
      movieSelectionButton.addEventListener("click", () => {
       const seanceId = JSON.parse(window.localStorage.getItem("idSeance"));
        fetch(`https://shfe-diplom.neto-server.ru/seance/${seanceId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    });

    // кнопка корзина
    newHall
      .querySelector(".basket-button")
      .addEventListener("click", function () {
        newHall.remove();
        newHallBtn.remove();
        newHallpriceBtn.remove();
        movieHallNext.remove();
        openSalesOneHall.remove();
        const hallId = JSON.parse(window.localStorage.getItem("IDHall"));
        frameHallWrapper.innerHTML = "";
        fetch(`https://shfe-diplom.neto-server.ru/hall/${hallId}`, {
          method: "DELETE",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            // Выводим список всех кинозалов после удаления
            console.log(data);
          })
          .catch((error) => {
            console.error("Ошибка:", error);
          });
      });
  });
}
});

//!!!!!!!!!!!!!!!!! конец создания залов

// получаем элементы со страницы
const pointRowInput = document.querySelector(".point-row-input-text");
const pointChairsInput = document.querySelector(".point-chairs-input-text");
const frameHallWrapper = document.querySelector(".frame_hall-wrapper");
const cancelHallButton = document.querySelector(".seat-selection-button");
const saveHallBtn = document.querySelector(".seat-selection-input");

let arrayConfiguration = [];

// Обработчик события клика по месту в кинозале
function handleChairClick(event) {
  const chair = event.target;
  const rowIndex = chair.dataset.rowindex;
  const colIndex = chair.dataset.colindex;

  if (chair.classList.contains("blocked-chairs")) {
    chair.classList.remove("blocked-chairs");
    chair.classList.add("regular-chairs");
    arrayConfiguration[rowIndex][colIndex] = "standart";
  } else if (chair.classList.contains("regular-chairs")) {
    chair.classList.remove("regular-chairs");
    chair.classList.add("vip-chairs");
    arrayConfiguration[rowIndex][colIndex] = "vip";
  } else if (chair.classList.contains("vip-chairs")) {
    chair.classList.remove("vip-chairs");
    chair.classList.add("blocked-chairs");
    arrayConfiguration[rowIndex][colIndex] = "disabled";
  }
}

// Кнопка 'Зал' 
function choiceOneHallBtnClick() {     //Нажать на кнопку после введения количества строк и мест
  const rows = parseInt(pointRowInput.value);
  const chairsPerRow = parseInt(pointChairsInput.value);

  // Очистить конфигурацию
  frameHallWrapper.innerHTML = "";
  arrayConfiguration = new Array(rows)
    .fill(0)
    .map(() => new Array(chairsPerRow).fill("blocked-chairs"));

  // Новые места в зал
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.classList.add("conf-step__row");

    for (let j = 0; j < chairsPerRow; j++) {
      const chair = document.createElement("div");
      chair.classList.add(arrayConfiguration[i][j]);
      chair.dataset.rowindex = i;
      chair.dataset.colindex = j;
      chair.addEventListener("click", handleChairClick);

      const chairWrapper = document.createElement("div");
      chairWrapper.classList.add("conf-step__chair");
      chairWrapper.appendChild(chair);

      row.appendChild(chairWrapper);
    }

    frameHallWrapper.appendChild(row);
  }
}
// отправка  на сервер при нажатии кнопки "Сохранить"
function saveHallBtnClick() {
  const rows = parseInt(pointRowInput.value);
  const chairsPerRow = parseInt(pointChairsInput.value);

  const params = new FormData();
  const hallId = JSON.parse(window.localStorage.getItem("IDHall"));
  params.set("rowCount", rows);
  params.set("placeCount", chairsPerRow);
  params.set("config", JSON.stringify(arrayConfiguration));

  fetch(`https://shfe-diplom.neto-server.ru/hall/${hallId}`, {
    method: "POST",
    body: params,
  })
    .then((response) => response.json())
    .then((data) => {
      // Обработка информации об измененном кинозале
      console.log(data);
    })
    .catch((error) => {
      // Обработка ошибки
      console.error(error);
    });
}
// Добавление обработчика клика на кнопку "Сохранить"
if (saveHallBtn !== null) {
saveHallBtn.addEventListener("click", saveHallBtnClick);
}
function cancelHallButtonClick() {
  const hallId = JSON.parse(window.localStorage.getItem("IDHall"));
  frameHallWrapper.innerHTML = "";
  fetch(`https://shfe-diplom.neto-server.ru/hall/${hallId}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Выводим список всех кинозалов после удаления
      console.log(data);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
}
if (cancelHallButton !== null) {
cancelHallButton.addEventListener("click", cancelHallButtonClick);
}
//Конец РАССТАНОВКИ

// Цена билетов
const priceStandartInput = document.querySelector(".price-regular-input-text");
const priceVipInput = document.querySelector(".price-vip-input-text");

function priceSaveHallBtnClick() {
  const standartPrice = parseInt(priceStandartInput.value);
  const vipPrice = parseInt(priceVipInput.value);
  const hallId = JSON.parse(window.localStorage.getItem("IDHall"));
  const params = new FormData();
  params.set("priceStandart", standartPrice);
  params.set("priceVip", vipPrice);
  fetch(`https://shfe-diplom.neto-server.ru/price/${hallId}`, {
    method: "POST",
    body: params,
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
const priceSaveHallBtn = document.getElementById("price_save");
if (priceSaveHallBtn !== null) {
priceSaveHallBtn.addEventListener("click", priceSaveHallBtnClick);
}
// Конец стоимость билетов

//------------Сетка сеансов

// Функция для добавления фильма в список

const movieDataEntrySection = document.querySelector(".movie-data-entry");
const addNewMovieBtn = document.querySelector(".add-movie-btn");
if (addNewMovieBtn !== null) {
addNewMovieBtn.addEventListener("click", function () {
  movieDataEntrySection.style.display = "flex";
});
};
const movieClosePopUp = document.getElementById("movie-close-pop-up");
if (movieClosePopUp !== null) {
movieClosePopUp.addEventListener("click", function () {
  movieDataEntrySection.style.display = "none";
});
};
//создание и отправка фильма

//const movieForm = document.getElementById("movie-form");

function movieSeance() {
const movieSend = document.getElementById("movie-send");
  if (movieSend !== null) {
movieSend.addEventListener("click", function (event) {
  movieDataEntrySection.style.display = "none";
  event.preventDefault();

  const filmName = document.getElementById("movie-n").value;
  const filmDuration = document.getElementById("movie-d").value;
  const filmDescription = document.getElementById("film-des").value;
  const filmOrigin = document.getElementById("film-o").value;
  const fileInput = document.getElementById("file-p");
  const filePoster = fileInput.files[0];

  if (!filePoster) {
    alert("Выберите изображение постера");
    return;
  }

  // добавление нового фильма в (movie-list)
  
  const movieList = document.querySelector(".movie-list");
  const movieArray = [];

  const newMovie = document.createElement("div");
  newMovie.className = "movie-one";
  newMovie.innerHTML = `
    <div class="movie-one" id="movie-${Date.now()}">
        <img class="movie-post">
        <div class="movie-conteiner-text">
            <div class="movie-combo">
                <span class="movie-text-top" draggable="true">${filmName}</span>
                <span class="movie-start-time-text"></span>
            </div>
            <span class="movie-text-time">${filmDuration}</span>
        </div>
        <div class="movie-conteiner-btn">
            <button class="movie-btn-one">
                <img class="imggg">
            </button>
        </div>
    </div>
`;
  window.localStorage.setItem("filmName", `${filmName}`);
  movieArray.push(newMovie);
  movieList.appendChild(newMovie);

  newMovie.addEventListener(
    "dragstart",
    (e) => {
      if (e.target && e.target.classList.contains("movie-text-top")) {
        e.dataTransfer.setData("text/plain", e.target.closest(".movie-one").id);
      }
    },
   // { once: true }
  );
  // добавление постера
  const reader = new FileReader();
  reader.onload = function (e) {
    const imgElement = newMovie.querySelector(".movie-post");
    imgElement.src = e.target.result;
  };
  reader.readAsDataURL(filePoster);

  //отправка фильма на сервер
  const params = new FormData();
  params.set("filmName", filmName);
  params.set("filmDuration", filmDuration);
  params.set("filmDescription", filmDescription);
  params.set("filmOrigin", filmOrigin);
  params.set("filePoster", filePoster);

  fetch("https://shfe-diplom.neto-server.ru/film", {
    method: "POST",
    body: params,
  })
    .then((response) => response.json())
    .then((data) => {
      
      let lndexFilm = data.result.films.length - 1;

      let idFilm = data.result.films[lndexFilm].id;

      window.localStorage.setItem("IDFilm", `${idFilm}`);
    
    console.log(idFilm);
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  //удаление из списка фильмов

  const delMovieBtn = newMovie.querySelector(".movie-btn-one");
  delMovieBtn.addEventListener("click", function () {
    const movieIndex = movieArray.indexOf(newMovie);
    if (movieIndex > -1) {
      movieArray.splice(movieIndex, 1);
      movieList.removeChild(newMovie);
    }
    const params = new FormData();
    const filmId = JSON.parse(window.localStorage.getItem("IDFilm"));

    params.set("config", JSON.stringify(arrayConfiguration));

    fetch(`https://shfe-diplom.neto-server.ru/film/${filmId}`, {
      method: "DELETE",
      body: params,
    })
      .then((response) => response.json())
      .then((data) => {
        // Обработка информации об измененном кинозале
        console.log(data);
      })
      .catch((error) => {
        // Обработка ошибки
        console.error(error);
      });
  });
});
};
}
movieSeance();
// Открытие продажи билетов
const openSalesTickets = document.querySelector(".open-sales-tickets");
if (openSalesTickets !== null) {
openSalesTickets.addEventListener("click", () => {
  const hallId = JSON.parse(window.localStorage.getItem("IDHall"));
  const params = new FormData();
  params.set("hallOpen", "1");
  fetch(`https://shfe-diplom.neto-server.ru/open/${hallId}`, {
    method: "POST",
    body: params,
  })
    .then((response) => response.json())
    .then((data) => {
      let lndexConfHalls = data.result.halls.length - 1;

      let hallConfig = data.result.halls[lndexConfHalls].hall_config;
      window.localStorage.setItem("hallConfig", `${hallConfig}`);

      console.log(data);
    });
});
};
