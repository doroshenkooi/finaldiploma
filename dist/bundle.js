/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clientSeance.js":
/*!*****************************!*\
  !*** ./src/clientSeance.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n   document.addEventListener(\"DOMContentLoaded\", function () {\r\n    let date = new Date();\r\n    const days = [\"Вс\", \"Пн\", \"Вт\", \"Ср\", \"Чт\", \"Пт\", \"Сб\"];\r\n  \r\n    const seanceDays = document.querySelectorAll(\".seance_day\");\r\n  \r\n    seanceDays.forEach((seanceDay, i) => {\r\n      let nextDate = new Date(date);\r\n      nextDate.setDate(date.getDate() + i);\r\n  \r\n      const dayOfWeek = days[nextDate.getDay()];\r\n      const dateNext = nextDate.getDate();\r\n  \r\n      const seanceDayWeek = document.createElement(\"div\");\r\n      seanceDayWeek.className = \"seance_day-week\";\r\n      seanceDayWeek.innerHTML = `\r\n            <span class=\"seance_day-week_today\">${i === 0 ? \"Сегодня\" : \"\"}</span>\r\n            <div class=\"seance_day-week_text-today\"> \r\n                <span class=\"seance_day-week_text\">${dayOfWeek}</span>\r\n                <span class=\"seance_day-data\">${dateNext}</span>\r\n            </div>`;\r\n  \r\n      seanceDay.append(seanceDayWeek);\r\n    });\r\n  });\r\n  const seanceDay = document.querySelector(\".seance_day\");\r\n  seanceDay.addEventListener(\"click\", function () {\r\n   \r\n    fetch('https://shfe-diplom.neto-server.ru/alldata')\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n        \r\n        data.result.films.forEach((film) => {\r\n          const filmID = (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.exportfilmID)(); \r\n          if (film.id == `${filmID}`) {\r\n            let filmName = film.film_name;\r\n            let filmPoster = film.film_poster;\r\n            let filmDiscription = film.film_description;\r\n            let filmDuration = film.film_duration;\r\n            let filmOrigin = film.film_origin;\r\n  \r\n            data.result.halls.forEach((hall) => {\r\n              const hallID = (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.exporthallID)();\r\n              if (hall.id == `${hallID}`) {\r\n                let hallName = hall.hall_name;\r\n                //Время начала сеанса\r\n              \r\n                    const hallClient = document.querySelector(\".hall-client\");\r\n  \r\n                    const sectionMovie = document.createElement(\"section\");\r\n                    sectionMovie.className = \"section_movie\";\r\n                    sectionMovie.innerHTML = `\r\n      <section class=\"section_movie\">\r\n  <div class=\"movie_info\">\r\n          <img class=\"movie_poster\" src=\"${filmPoster}\">  \r\n          \r\n          <div class=\"movie_discription\">\r\n                  <div class=\"movie_name\">\r\n                  <span class=\"movie_name-text\">${filmName}</span>\r\n                  </div> \r\n                  <div class=\"movie_synopsis\">\r\n                  <span class=\"movie_synopsis-text\">${filmDiscription}</span>\r\n                  </div>   \r\n                  <div class=\"movie_data\">\r\n                  <span class=\"movie_duration\">${filmDuration} минут</span>\r\n                  <span class=\"movie_origin\">${filmOrigin}</span>\r\n                  </div>   \r\n          </div>    \r\n       </div> \r\n              <div class=\"movie-seances_hall\">\r\n   <span class=\"movie_seances-text\">${hallName}</span>\r\n   <div class=\"list\">\r\n   \r\n   </div>\r\n   </div>\r\n  </section>\r\n   `;\r\n    hallClient.append(sectionMovie);\r\n               \r\n     data.result.seances.forEach((seance) => {\r\n      const seanceID = (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.exportSeanceID)();\r\n                  if (seance.id == `${seanceID}`) {\r\n                    let seanceTime = seance.seance_time;\r\n                    \r\n                    const list = document.querySelector('.list');\r\n     const item = document.createElement(\"div\");\r\n     item.className = \"item\";\r\n     item.innerHTML =` \r\n                      <div class=\"item\">\r\n     <div class=\"link\">\r\n     <span class=\"link-text\">${seanceTime}</span>\r\n     </div>\r\n     </div>`;\r\n  \r\n     list.append(item);\r\n     \r\n                      \r\n                  }\r\n                });\r\n              }\r\n            });\r\n         }\r\n        });\r\n        console.log(data);\r\n      });\r\n  });\r\n  \r\n  const goCinemaEntry = document.querySelector(\".go_cinema-entry\");\r\n  \n\n//# sourceURL=webpack://finaldiploma/./src/clientSeance.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("\r\nconst authorization = document.querySelector('.authorization');\r\nconst emailInput = document.querySelector('.authorization-input-email');\r\nconst passwordInput = document.querySelector('.authorization-input-password');\r\nconst form = document.querySelector('.authorization-form');\r\nconst authorizationBtn = document.querySelector('.authorization-btn');\r\n\r\nif (authorizationBtn !== null) {\r\nauthorizationBtn.addEventListener('click', (event) => {\r\n  event.preventDefault();\r\n\r\n  const email = emailInput.value;\r\n  const password = passwordInput.value;\r\n  \r\n  fetch('https://shfe-diplom.neto-server.ru/login', {\r\n    method: 'POST',\r\n    body: JSON.stringify({ login: email, password: password }),\r\n    headers: { 'Content-Type': 'application/json' }\r\n  })\r\n  .then(response => {\r\n    if (response.ok) {\r\n      return response.json();\r\n    } else {\r\n      throw new Error('Ошибка авторизации');\r\n    }\r\n  })\r\n  .then(result => {\r\n    console.log(result);\r\n    authorization.style.display = 'none';\r\n   \r\n  })\r\n  .catch(error => {\r\n    console.error('Ошибка:', error);\r\n  });\r\n});\r\n}\r\n//создание зала\r\n\r\n  document.addEventListener(\"DOMContentLoaded\", function addHall() {\r\n  const createHallButton = document.getElementById(\"btn-create-hall\");\r\n  if (createHallButton !== null) {\r\n  createHallButton.addEventListener(\"click\", function () {\r\n    // Получаем название нового кинозала\r\n\r\n    const newName = prompt(\"Введите название нового кинозала:\");\r\n\r\n    const newHall = document.createElement(\"div\");\r\n    newHall.className = \"choosing-hall-one\";\r\n    newHall.innerHTML = ` <div class=\"choosing-hall-one\" id=\"hall-btn-one\">\r\n          \r\n            <div class=\"dash-one\">\r\n                <span>-</span>\r\n            </div>\r\n            <div class=\"choosing-hall-text\">\r\n                <span>${newName}</span>\r\n            </div>\r\n            <button class=\"basket-button\">\r\n            </button>\r\n            </div>`;\r\n\r\n    const hallName = new FormData();\r\n    hallName.set(\"hallName\", `${newName}`);\r\n    fetch(\"https://shfe-diplom.neto-server.ru/hall\", {\r\n      method: \"POST\",\r\n      body: hallName,\r\n    })\r\n      .then((response) => {\r\n        return response.json();\r\n      })\r\n      .then((data) => {\r\n        let lastIndex = data.result.halls.length - 1;\r\n        let IdHall = data.result.halls[lastIndex].id;\r\n\r\n        window.localStorage.setItem(\"IDHall\", `${IdHall}`);\r\n        console.log(data);\r\n      })\r\n      .catch((error) => {\r\n        console.error(\"Ошибка:\", error);\r\n      });\r\n\r\n    const newHallnew = document.querySelector(\".choosing-list-managament\");\r\n    newHallnew.appendChild(newHall);\r\n    // кнопка конфигурация зала\r\n    const newHallBtn = document.createElement(\"div\");\r\n    newHallBtn.ById = \"hall-btn\";\r\n    newHallBtn.innerHTML = `<div><button class=\"choice-one-hall\" type=\"button\">\r\n           <span class=\"hall-button-text\">${newName}</span></button>\r\n        </div>`;\r\n    const choiceOneHallBtn = newHallBtn.querySelector(\".choice-one-hall\");\r\n    choiceOneHallBtn.addEventListener(\"click\", choiceOneHallBtnClick);\r\n\r\n    const btnConfig = document.querySelector(\".choice-list\");\r\n    btnConfig.appendChild(newHallBtn);\r\n    // кнопка стоимость билетов\r\n    const newHallpriceBtn = document.createElement(\"div\");\r\n    newHallpriceBtn.className = \"price-one-hall\";\r\n    newHallpriceBtn.innerHTML = `<button class=\"price-one-hall\" type=\"button\">\r\n            <span class=\"hall-button-text\">${newName}</span></button>`;\r\n\r\n    const pricebtnConfig = document.querySelector(\".price-list\");\r\n    pricebtnConfig.appendChild(newHallpriceBtn);\r\n    // кнопка открытия залов\r\n\r\n    const openSalesOneHall = document.createElement(\"div\");\r\n    openSalesOneHall.className = \"price-one-hall\";\r\n    openSalesOneHall.innerHTML = ` <button class=\"open-sales-one-hall\" type=\"button\">\r\n            <span class=\"hall-button-text\">${newName}</span></button>`;\r\n\r\n    const openSalesList = document.querySelector(\".open-sales-list\");\r\n    openSalesList.appendChild(openSalesOneHall);\r\n    // Рамка зал сеансов\r\n    const movieSessions = [\r\n      { hour: \"10\", containers: [] },\r\n      { hour: \"12\", containers: [] },\r\n      { hour: \"14\", containers: [] },\r\n      { hour: \"16\", containers: [] },\r\n      { hour: \"18\", containers: [] },\r\n    ];\r\n\r\n    const movieHallNext = document.createElement(\"div\");\r\n    movieHallNext.className = \"movie-hall-next\";\r\n    movieHallNext.innerHTML = `\r\n          <div class=\"movie-hall-next\">\r\n              <div class=\"movie-hall-title\">\r\n                  <span class=\"movie-hall-title-text\">${newName}</span>\r\n              </div>\r\n              <div id=\"movie-hall-frame\" class=\"movie-hall-time-frame\"></div>\r\n          </div>\r\n      `;\r\n\r\n    const movieHallAdd = document.querySelector(\".movie-hall-add-one\");\r\n    movieHallAdd.appendChild(movieHallNext);\r\n\r\n    const seanceDataEntry = document.querySelector(\".seance-data-entry\");\r\n    const movieHallTimeFrames = document.querySelectorAll(\r\n      \".movie-hall-time-frame\"\r\n    );\r\n\r\n    movieHallTimeFrames.forEach((frame) => {\r\n      frame.addEventListener(\"dragover\", (e) => {\r\n        e.preventDefault();\r\n      });\r\n\r\n      frame.addEventListener(\"drop\", (e) => {\r\n        e.preventDefault();\r\n\r\n        const movieId = e.dataTransfer.getData(\"text\");\r\n        const originalMovie = document\r\n          .getElementById(movieId)\r\n          .querySelector(\".movie-combo\");\r\n        if (originalMovie) {\r\n          const duplicateMovie = originalMovie.cloneNode(true);\r\n          const newMovieContainer = document.createElement(\"div\");\r\n\r\n          newMovieContainer.classList.add(\"movie-one\");\r\n          newMovieContainer.id = `movie-${Date.now()}`; // уникальный id для дубликата\r\n          newMovieContainer.appendChild(duplicateMovie);\r\n\r\n          seanceDataEntry.style.display = \"flex\";\r\n\r\n          // Всплывающее окно добавление сеанса\r\n\r\n          const filmName = window.localStorage.getItem(\"filmName\");\r\n          const seanceName = document.getElementById(\"seance-f\");\r\n          seanceName.value = filmName.toString();\r\n\r\n          const seanceHall = document.getElementById(\"seance-h\");\r\n          seanceHall.value = `${newName}`.toString();\r\n          const seanceBtnSave = document.getElementById(\"seance-send\");\r\n          seanceBtnSave.addEventListener(\r\n            \"click\",\r\n            (e) => {\r\n              // Добавление начала сеанса\r\n\r\n              const movieStartTime = document.createElement(\"span\");\r\n              movieStartTime.className = \"movie-start-time-text\";\r\n              const seanceTime = document.getElementById(\"seance-time\").value;\r\n              window.localStorage.setItem(\"seanceTime\", `${seanceTime}`);\r\n\r\n              movieStartTime.textContent = seanceTime;\r\n              newMovieContainer.appendChild(movieStartTime);\r\n              newMovieContainer.style.width = \"100px\";\r\n\r\n              const hour = parseInt(seanceTime.substring(0, 2));\r\n\r\n              // Добавим элемент в соответствующий контейнер\r\n              let targetSessionIndex = -1;\r\n              if (hour === 10) targetSessionIndex = 0;\r\n              else if (hour === 12) targetSessionIndex = 1;\r\n              else if (hour === 14) targetSessionIndex = 2;\r\n              else if (hour === 16) targetSessionIndex = 3;\r\n              else if (hour === 18) targetSessionIndex = 4;\r\n\r\n              if (targetSessionIndex !== -1) {\r\n                movieSessions[targetSessionIndex].containers.push(\r\n                  newMovieContainer\r\n                );\r\n\r\n                // Очистим контейнер\r\n                while (frame.firstChild) {\r\n                  frame.removeChild(frame.firstChild);\r\n                }\r\n\r\n                // Добавим элементы по порядку\r\n                movieSessions.forEach((session) => {\r\n                  session.containers.forEach((movie) => {\r\n                    frame.appendChild(movie);\r\n                  });\r\n                });\r\n              }\r\n\r\n              seanceDataEntry.style.display = \"none\";\r\n            },\r\n            { once: true }\r\n          );\r\n          //Удаление из сеанса в корзину\r\n          const trash = document.getElementById(\"trash\");\r\n\r\n          newMovieContainer.addEventListener(\"dragstart\", (e) => {\r\n            trash.style.display = \"flex\";\r\n          });\r\n\r\n          trash.addEventListener(\"dragover\", (e) => {\r\n            e.preventDefault();\r\n            trash.style.display = \"flex\";\r\n          });\r\n\r\n          // Обрабатываем событие 'drop' на trash-контейнере\r\n          trash.addEventListener(\"drop\", (e) => {\r\n            e.preventDefault();\r\n            const draggedElement = document.querySelector(\".dragging\");\r\n            if (draggedElement) {\r\n              frame.removeChild(draggedElement);\r\n            }\r\n            trash.style.display = \"none\";\r\n          });\r\n\r\n          newMovieContainer.addEventListener(\"dragstart\", (e) => {\r\n            newMovieContainer.classList.add(\"dragging\"); // Добавляем класс 'dragging' для идентификации\r\n          });\r\n\r\n          // Событие завершения перетаскивания\r\n          newMovieContainer.addEventListener(\"dragend\", (e) => {\r\n            newMovieContainer.classList.remove(\"dragging\");\r\n            trash.style.display = \"none\";\r\n          });\r\n        }\r\n      });\r\n      const movieSelectionInput = document.querySelector(\".movie-selection-input\");\r\n      movieSelectionInput.addEventListener(\"click\", (e) => {\r\n        const seanceHallid = JSON.parse(window.localStorage.getItem(\"IDHall\"));\r\n        const seanceFilmid = JSON.parse(window.localStorage.getItem(\"IDFilm\"));\r\n        const seanceTime = window.localStorage.getItem(\"seanceTime\");\r\n\r\n        const params = new FormData();\r\n        params.set(\"seanceHallid\", seanceHallid);\r\n        params.set(\"seanceFilmid\", seanceFilmid);\r\n        params.set(\"seanceTime\", seanceTime);\r\n\r\n        fetch(\"https://shfe-diplom.neto-server.ru/seance\", {\r\n          method: \"POST\",\r\n          body: params,\r\n        })\r\n          .then((response) => response.json())\r\n          .then((data) => {\r\n            let lndexSeance = data.result.seances.length - 1;\r\n\r\n            let idSeance = data.result.seances[lndexSeance].id;\r\n\r\n            window.localStorage.setItem(\"idSeance\", `${idSeance}`);\r\n            console.log(idSeance);\r\n\r\n            console.log(\"Success:\", data);\r\n          })\r\n          .catch((error) => {\r\n            console.error(\"Error:\", error);\r\n          });\r\n      });\r\n\r\n      const movieSelectionButton = document.querySelector(\r\n        \".movie-selection-button\"\r\n      );\r\n      movieSelectionButton.addEventListener(\"click\", () => {\r\n       const seanceId = JSON.parse(window.localStorage.getItem(\"idSeance\"));\r\n        fetch(`https://shfe-diplom.neto-server.ru/seance/${seanceId}`, {\r\n          method: \"DELETE\",\r\n        })\r\n          .then((response) => response.json())\r\n          .then((data) => {\r\n            console.log(\"Success:\", data);\r\n          })\r\n          .catch((error) => {\r\n            console.error(\"Error:\", error);\r\n          });\r\n      });\r\n    });\r\n\r\n    // кнопка корзина\r\n    newHall\r\n      .querySelector(\".basket-button\")\r\n      .addEventListener(\"click\", function () {\r\n        newHall.remove();\r\n        newHallBtn.remove();\r\n        newHallpriceBtn.remove();\r\n        movieHallNext.remove();\r\n        openSalesOneHall.remove();\r\n        const hallId = JSON.parse(window.localStorage.getItem(\"IDHall\"));\r\n        frameHallWrapper.innerHTML = \"\";\r\n        fetch(`https://shfe-diplom.neto-server.ru/hall/${hallId}`, {\r\n          method: \"DELETE\",\r\n        })\r\n          .then((response) => {\r\n            return response.json();\r\n          })\r\n          .then((data) => {\r\n            // Выводим список всех кинозалов после удаления\r\n            console.log(data);\r\n          })\r\n          .catch((error) => {\r\n            console.error(\"Ошибка:\", error);\r\n          });\r\n      });\r\n  });\r\n}\r\n});\r\n\r\n//!!!!!!!!!!!!!!!!! конец создания залов\r\n\r\n// получаем элементы со страницы\r\nconst pointRowInput = document.querySelector(\".point-row-input-text\");\r\nconst pointChairsInput = document.querySelector(\".point-chairs-input-text\");\r\nconst frameHallWrapper = document.querySelector(\".frame_hall-wrapper\");\r\nconst cancelHallButton = document.querySelector(\".seat-selection-button\");\r\nconst saveHallBtn = document.querySelector(\".seat-selection-input\");\r\n\r\nlet arrayConfiguration = [];\r\n\r\n// Обработчик события клика по месту в кинозале\r\nfunction handleChairClick(event) {\r\n  const chair = event.target;\r\n  const rowIndex = chair.dataset.rowindex;\r\n  const colIndex = chair.dataset.colindex;\r\n\r\n  if (chair.classList.contains(\"blocked-chairs\")) {\r\n    chair.classList.remove(\"blocked-chairs\");\r\n    chair.classList.add(\"regular-chairs\");\r\n    arrayConfiguration[rowIndex][colIndex] = \"standart\";\r\n  } else if (chair.classList.contains(\"regular-chairs\")) {\r\n    chair.classList.remove(\"regular-chairs\");\r\n    chair.classList.add(\"vip-chairs\");\r\n    arrayConfiguration[rowIndex][colIndex] = \"vip\";\r\n  } else if (chair.classList.contains(\"vip-chairs\")) {\r\n    chair.classList.remove(\"vip-chairs\");\r\n    chair.classList.add(\"blocked-chairs\");\r\n    arrayConfiguration[rowIndex][colIndex] = \"disabled\";\r\n  }\r\n}\r\n\r\n// Кнопка 'Зал'\r\nfunction choiceOneHallBtnClick() {\r\n  const rows = parseInt(pointRowInput.value);\r\n  const chairsPerRow = parseInt(pointChairsInput.value);\r\n\r\n  // Очистить конфигурацию\r\n  frameHallWrapper.innerHTML = \"\";\r\n  arrayConfiguration = new Array(rows)\r\n    .fill(0)\r\n    .map(() => new Array(chairsPerRow).fill(\"blocked-chairs\"));\r\n\r\n  // Новые места в зал\r\n  for (let i = 0; i < rows; i++) {\r\n    const row = document.createElement(\"div\");\r\n    row.classList.add(\"conf-step__row\");\r\n\r\n    for (let j = 0; j < chairsPerRow; j++) {\r\n      const chair = document.createElement(\"div\");\r\n      chair.classList.add(arrayConfiguration[i][j]);\r\n      chair.dataset.rowindex = i;\r\n      chair.dataset.colindex = j;\r\n      chair.addEventListener(\"click\", handleChairClick);\r\n\r\n      const chairWrapper = document.createElement(\"div\");\r\n      chairWrapper.classList.add(\"conf-step__chair\");\r\n      chairWrapper.appendChild(chair);\r\n\r\n      row.appendChild(chairWrapper);\r\n    }\r\n\r\n    frameHallWrapper.appendChild(row);\r\n  }\r\n}\r\n// отправка  на сервер при нажатии кнопки \"Сохранить\"\r\nfunction saveHallBtnClick() {\r\n  const rows = parseInt(pointRowInput.value);\r\n  const chairsPerRow = parseInt(pointChairsInput.value);\r\n\r\n  const params = new FormData();\r\n  const hallId = JSON.parse(window.localStorage.getItem(\"IDHall\"));\r\n  params.set(\"rowCount\", rows);\r\n  params.set(\"placeCount\", chairsPerRow);\r\n  params.set(\"config\", JSON.stringify(arrayConfiguration));\r\n\r\n  fetch(`https://shfe-diplom.neto-server.ru/hall/${hallId}`, {\r\n    method: \"POST\",\r\n    body: params,\r\n  })\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      // Обработка информации об измененном кинозале\r\n      console.log(data);\r\n    })\r\n    .catch((error) => {\r\n      // Обработка ошибки\r\n      console.error(error);\r\n    });\r\n}\r\n// Добавление обработчика клика на кнопку \"Сохранить\"\r\nif (saveHallBtn !== null) {\r\nsaveHallBtn.addEventListener(\"click\", saveHallBtnClick);\r\n}\r\nfunction cancelHallButtonClick() {\r\n  const hallId = JSON.parse(window.localStorage.getItem(\"IDHall\"));\r\n  frameHallWrapper.innerHTML = \"\";\r\n  fetch(`https://shfe-diplom.neto-server.ru/hall/${hallId}`, {\r\n    method: \"DELETE\",\r\n  })\r\n    .then((response) => {\r\n      return response.json();\r\n    })\r\n    .then((data) => {\r\n      // Выводим список всех кинозалов после удаления\r\n      console.log(data);\r\n    })\r\n    .catch((error) => {\r\n      console.error(\"Ошибка:\", error);\r\n    });\r\n}\r\nif (cancelHallButton !== null) {\r\ncancelHallButton.addEventListener(\"click\", cancelHallButtonClick);\r\n}\r\n//Конец РАССТАНОВКИ\r\n\r\n// Цена билетов\r\nconst priceStandartInput = document.querySelector(\".price-regular-input-text\");\r\nconst priceVipInput = document.querySelector(\".price-vip-input-text\");\r\n\r\nfunction priceSaveHallBtnClick() {\r\n  const standartPrice = parseInt(priceStandartInput.value);\r\n  const vipPrice = parseInt(priceVipInput.value);\r\n  const hallId = JSON.parse(window.localStorage.getItem(\"IDHall\"));\r\n  const params = new FormData();\r\n  params.set(\"priceStandart\", standartPrice);\r\n  params.set(\"priceVip\", vipPrice);\r\n  fetch(`https://shfe-diplom.neto-server.ru/price/${hallId}`, {\r\n    method: \"POST\",\r\n    body: params,\r\n  })\r\n    .then((response) => response.json())\r\n    .then((data) => console.log(data));\r\n}\r\nconst priceSaveHallBtn = document.getElementById(\"price_save\");\r\nif (priceSaveHallBtn !== null) {\r\npriceSaveHallBtn.addEventListener(\"click\", priceSaveHallBtnClick);\r\n}\r\n// Конец стоимость билетов\r\n\r\n//------------Сетка сеансов\r\n\r\n// Функция для добавления фильма в список\r\n\r\nconst movieDataEntrySection = document.querySelector(\".movie-data-entry\");\r\nconst addNewMovieBtn = document.querySelector(\".add-movie-btn\");\r\nif (addNewMovieBtn !== null) {\r\naddNewMovieBtn.addEventListener(\"click\", function () {\r\n  movieDataEntrySection.style.display = \"flex\";\r\n});\r\n};\r\nconst movieClosePopUp = document.getElementById(\"movie-close-pop-up\");\r\nif (movieClosePopUp !== null) {\r\nmovieClosePopUp.addEventListener(\"click\", function () {\r\n  movieDataEntrySection.style.display = \"none\";\r\n});\r\n};\r\n//создание и отправка фильма\r\n\r\n//const movieForm = document.getElementById(\"movie-form\");\r\n\r\nfunction movieSeance() {\r\nconst movieSend = document.getElementById(\"movie-send\");\r\n  if (movieSend !== null) {\r\nmovieSend.addEventListener(\"click\", function (event) {\r\n  movieDataEntrySection.style.display = \"none\";\r\n  event.preventDefault();\r\n\r\n  const filmName = document.getElementById(\"movie-n\").value;\r\n  const filmDuration = document.getElementById(\"movie-d\").value;\r\n  const filmDescription = document.getElementById(\"film-des\").value;\r\n  const filmOrigin = document.getElementById(\"film-o\").value;\r\n  const fileInput = document.getElementById(\"file-p\");\r\n  const filePoster = fileInput.files[0];\r\n\r\n  if (!filePoster) {\r\n    alert(\"Выберите изображение постера\");\r\n    return;\r\n  }\r\n\r\n  // добавление нового фильма в (movie-list)\r\n  \r\n  const movieList = document.querySelector(\".movie-list\");\r\n  const movieArray = [];\r\n\r\n  const newMovie = document.createElement(\"div\");\r\n  newMovie.className = \"movie-one\";\r\n  newMovie.innerHTML = `\r\n    <div class=\"movie-one\" id=\"movie-${Date.now()}\">\r\n        <img class=\"movie-post\">\r\n        <div class=\"movie-conteiner-text\">\r\n            <div class=\"movie-combo\">\r\n                <span class=\"movie-text-top\" draggable=\"true\">${filmName}</span>\r\n                <span class=\"movie-start-time-text\"></span>\r\n            </div>\r\n            <span class=\"movie-text-time\">${filmDuration}</span>\r\n        </div>\r\n        <div class=\"movie-conteiner-btn\">\r\n            <button class=\"movie-btn-one\">\r\n                <img class=\"imggg\">\r\n            </button>\r\n        </div>\r\n    </div>\r\n`;\r\n  window.localStorage.setItem(\"filmName\", `${filmName}`);\r\n  movieArray.push(newMovie);\r\n  movieList.appendChild(newMovie);\r\n\r\n  newMovie.addEventListener(\r\n    \"dragstart\",\r\n    (e) => {\r\n      if (e.target && e.target.classList.contains(\"movie-text-top\")) {\r\n        e.dataTransfer.setData(\"text/plain\", e.target.closest(\".movie-one\").id);\r\n      }\r\n    },\r\n    { once: true }\r\n  );\r\n  // добавление постера\r\n  const reader = new FileReader();\r\n  reader.onload = function (e) {\r\n    const imgElement = newMovie.querySelector(\".movie-post\");\r\n    imgElement.src = e.target.result;\r\n  };\r\n  reader.readAsDataURL(filePoster);\r\n\r\n  //отправка фильма на сервер\r\n  const params = new FormData();\r\n  params.set(\"filmName\", filmName);\r\n  params.set(\"filmDuration\", filmDuration);\r\n  params.set(\"filmDescription\", filmDescription);\r\n  params.set(\"filmOrigin\", filmOrigin);\r\n  params.set(\"filePoster\", filePoster);\r\n\r\n  fetch(\"https://shfe-diplom.neto-server.ru/film\", {\r\n    method: \"POST\",\r\n    body: params,\r\n  })\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      \r\n      let lndexFilm = data.result.films.length - 1;\r\n\r\n      let idFilm = data.result.films[lndexFilm].id;\r\n\r\n      window.localStorage.setItem(\"IDFilm\", `${idFilm}`);\r\n    \r\n    console.log(idFilm);\r\n      console.log(\"Success:\", data);\r\n    })\r\n    .catch((error) => {\r\n      console.error(\"Error:\", error);\r\n    });\r\n\r\n  //удаление из списка фильмов\r\n\r\n  const delMovieBtn = newMovie.querySelector(\".movie-btn-one\");\r\n  delMovieBtn.addEventListener(\"click\", function () {\r\n    const movieIndex = movieArray.indexOf(newMovie);\r\n    if (movieIndex > -1) {\r\n      movieArray.splice(movieIndex, 1);\r\n      movieList.removeChild(newMovie);\r\n    }\r\n    const params = new FormData();\r\n    const filmId = JSON.parse(window.localStorage.getItem(\"IDFilm\"));\r\n\r\n    params.set(\"config\", JSON.stringify(arrayConfiguration));\r\n\r\n    fetch(`https://shfe-diplom.neto-server.ru/film/${filmId}`, {\r\n      method: \"DELETE\",\r\n      body: params,\r\n    })\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n        // Обработка информации об измененном кинозале\r\n        console.log(data);\r\n      })\r\n      .catch((error) => {\r\n        // Обработка ошибки\r\n        console.error(error);\r\n      });\r\n  });\r\n});\r\n};\r\n}\r\nmovieSeance();\r\n// Открытие продажи билетов\r\nconst openSalesTickets = document.querySelector(\".open-sales-tickets\");\r\nif (openSalesTickets !== null) {\r\nopenSalesTickets.addEventListener(\"click\", () => {\r\n  const hallId = JSON.parse(window.localStorage.getItem(\"IDHall\"));\r\n  const params = new FormData();\r\n  params.set(\"hallOpen\", \"1\");\r\n  fetch(`https://shfe-diplom.neto-server.ru/open/${hallId}`, {\r\n    method: \"POST\",\r\n    body: params,\r\n  })\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      let lndexConfHalls = data.result.halls.length - 1;\r\n\r\n      let hallConfig = data.result.halls[lndexConfHalls].hall_config;\r\n      window.localStorage.setItem(\"hallConfig\", `${hallConfig}`);\r\n\r\n      console.log(data);\r\n    });\r\n});\r\n};\r\n/*\r\nfunction exportSeanceID() {\r\n  const seanceId = window.localStorage.getItem(\"idSeance\");\r\n return seanceId;\r\n};\r\n\r\nfunction exporthallID() {\r\n  const hallID = window.localStorage.getItem(\"IDHall\");\r\n return hallID;\r\n};\r\n\r\nfunction exportfilmID() {\r\n  const filmID = JSON.parse(window.localStorage.getItem(\"IDFilm\"));\r\n return filmID;\r\n};\r\n\r\nexport { exportSeanceID, exporthallID, exportfilmID };\r\n*/\n\n//# sourceURL=webpack://finaldiploma/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/clientSeance.js");
/******/ 	
/******/ })()
;