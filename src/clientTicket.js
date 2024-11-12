import { exportArraytickets } from "./client_hall.js";
document.addEventListener("DOMContentLoaded", function () {
  const Arraytickets = exportArraytickets();
  console.log(Arraytickets);

  const arrayQrcode = Arraytickets.map((item) => {
    return {
      "Название фильма": item.filmname,
      Зал: item.hallname,
      Ряд: item.row,
      Место: item.place,
      Стоимость: item.price,
    };
  });
  arrayQrcode.unshift("Билет действителен строго на свой сеанс");

  Arraytickets.forEach((ticket) => {
    const paymentFrame = document.querySelector(".payment-frame");
    const ticketInfoWrapper = document.createElement("div");
    ticketInfoWrapper.className = "ticket__info-wrapper";
    ticketInfoWrapper.innerHTML = `<div class="ticket__info-wrapper">
            <div class="ticket__info-film_name">
                    <span class="ticket__info-film-name_text">На фильм: ${ticket.filmname}</span>
            </div>
<div class="ticket__info-seats">
    <span class="ticket__info-seats-_text">Места: ряд ${ticket.row}, место ${ticket.place}</span>
</div>
<div class="ticket__info-hall">
    <span class="ticket__info-hall_text">В зале:  ${ticket.hallname}</span>
</div>
<div class="ticket__info-seance_begin">
    <span class="ticket__info-seance_begin-text">Начало сеанса: ${ticket.time}</span>
</div>
<div class="qrcode" id="qrcode1"></div>
<div class="ticket__hint">
        <span class="ticket__hint-text">Покажите QR-код нашему контроллеру для подтверждения бронирования.</span>
</div>
       
        <div class="ticket__hint-wish">
<span class="ticket__hint-wish_text">Приятного просмотра!</span>
        </div>
  </div> `;

    paymentFrame.append(ticketInfoWrapper);
  });
  console.log(Arraytickets);

  console.log(arrayQrcode);
  const qrcode1 = QRCreator(JSON.stringify(arrayQrcode), {
    mode: 4,
    eccl: 0,
    version: -1,
    mask: -1,
    image: "svg",
    modsize: -1,
    margin: 0,
  });
  const content = (qrcode) => {
    return qrcode.error
      ? `недопустимые исходные данные ${qrcode.error}`
      : qrcode.result;
  };

  document.getElementById("qrcode1").append("QR - КОД", content(qrcode1));
});
