/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clientSeance.js":
/*!*****************************!*\
  !*** ./src/clientSeance.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   exportHallId: () => (/* binding */ exportHallId)\n/* harmony export */ });\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  let date = new Date();\r\n  const days = [\"Вс\", \"Пн\", \"Вт\", \"Ср\", \"Чт\", \"Пт\", \"Сб\"];\r\n\r\n  const seanceDays = document.querySelectorAll(\".seance_day\");\r\n\r\n  seanceDays.forEach((seanceDay, i) => {\r\n    let nextDate = new Date(date);\r\n    nextDate.setDate(date.getDate() + i);\r\n\r\n    const dayOfWeek = days[nextDate.getDay()];\r\n    const dateNext = nextDate.getDate();\r\n\r\n    const seanceDayWeek = document.createElement(\"div\");\r\n    seanceDayWeek.className = \"seance_day-week\";\r\n    seanceDayWeek.innerHTML = `\r\n          <span class=\"seance_day-week_today\">${i === 0 ? \"Сегодня\" : \"\"}</span>\r\n          <div class=\"seance_day-week_text-today\"> \r\n              <span class=\"seance_day-week_text\">${dayOfWeek}</span>\r\n              <span class=\"seance_day-data\">${dateNext}</span>\r\n          </div>`;\r\n\r\n    seanceDay.append(seanceDayWeek);\r\n  });\r\n});\r\nconst seanceDay = document.querySelector(\".seance_day\");\r\n if (seanceDay !== null) {\r\nseanceDay.addEventListener(\"click\", function () {\r\n\r\n  fetch('https://shfe-diplom.neto-server.ru/alldata')\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      const hallClient = document.querySelector(\".hall-client\");\r\n      hallClient.innerHTML = '';\r\n      // открываем только открытые залы\r\n      data.result.halls.forEach((hall) => {\r\n        if (hall.hall_open == 1) {\r\n          let hallId = hall.id;\r\n        // находим id залa\r\n      data.result.seances.forEach((seance, i) => {\r\nif (seance.seance_hallid == `${hallId}`) {\r\nlet filmSeanceId = seance.seance_filmid;\r\n  let hallName = hall.hall_name;\r\n// находим данные сеанса\r\ndata.result.films.forEach((film, i) => {\r\n  if (film.id == `${filmSeanceId}`) {\r\n     let filmName = film.film_name;\r\n     let filmPoster = film.film_poster;\r\n     let filmDiscription = film.film_description;\r\n     let filmDuration = film.film_duration;\r\n     let filmOrigin = film.film_origin;\r\n  \r\n         const hallClient = document.querySelector(\".hall-client\");\r\n         const sectionMovie = document.createElement(\"section\");\r\n         sectionMovie.classList.add(\"section_movie\");\r\n         const movieInfo = document.createElement(\"div\");\r\n         movieInfo.classList.add((\"movie_info\")+ i);\r\n         \r\n           movieInfo.innerHTML = `\r\n         \r\n                        <img class=\"movie_poster\" src=\"${filmPoster}\">  \r\n         \r\n                        <div class=\"movie_discription\">\r\n                          <div class=\"movie_name\">\r\n                            <span class=\"movie_name-text\">${filmName}</span>\r\n                          </div> \r\n                          <div class=\"movie_synopsis\">\r\n                            <span class=\"movie_synopsis-text\">${filmDiscription}</span>\r\n                          </div>   \r\n                          <div class=\"movie_data\">\r\n                            <span class=\"movie_duration\">${filmDuration} минут</span>\r\n                            <span class=\"movie_origin\">${filmOrigin}</span>\r\n                          </div>   \r\n                        </div>    \r\n                       <div class=\"list\"></div>`;\r\n         \r\n                         data.result.seances.forEach((seance, i) => {\r\n                           if (seance.seance_hallid == `${hallId}`) {\r\n                             let seanceTime = seance.seance_time;\r\n                             const list = document.createElement(\"div\");\r\n                         list.classList.add((\"list\")+i);\r\n                         list.innerHTML =`\r\n         \r\n                        <span class=\"movie_seances-text\">${hallName}</span>\r\n         \r\n                               <div class=\"item\">\r\n                                <div class=\"link\"> \r\n                                <span class=\"link-text\">${seanceTime}</span>\r\n                                   </div>\r\n                          </div>`;\r\n         \r\n                            sectionMovie.append(list);\r\n                          sectionMovie.prepend(movieInfo);\r\n                         hallClient.append(sectionMovie);\r\n\r\n                         const currentDate = new Date();\r\n                         const hours = currentDate.getHours().toString().padStart(2, '0');\r\n                         const minutes = currentDate.getMinutes().toString().padStart(2, '0');\r\n                         const timeNow = `${hours}:${minutes}`;\r\n                         console.log(timeNow)\r\n                         \r\n                         const linkTexts = sectionMovie.querySelectorAll('.link-text');\r\n                         linkTexts.forEach(linkText => {\r\n                         \r\n                           linkText.addEventListener('click', () => {\r\nif (timeNow < `${seanceTime}`) {\r\n                         data.result.seances.forEach((seance) => {\r\n                          if (seance.seance_time == `${seanceTime}`) {\r\n        \r\n                          let hallId = seance.seance_hallid;\r\n                           console.log(hallId)\r\n                           \r\n                           \r\n                             window.localStorage.setItem('hallId', hallId);\r\n                             window.location.href = 'clientHall.html';\r\n                          }\r\n                            })\r\n                             } else (alert ('Сеанс закончился'));///\r\n                           });\r\n                       \r\n                        });   \r\n         \r\n                     }\r\n                  }); \r\n                 }\r\n               });\r\n            } \r\n           });\r\n           console.log(data);\r\n         }\r\n         });\r\n         \r\n         }\r\n         )\r\n         });\r\n        }\r\nfunction exportHallId() {\r\n  const hallId = window.localStorage.getItem('hallId');\r\n  return hallId;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://finaldiploma/./src/clientSeance.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/clientSeance.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;