import "./optInSection.css";
import { useState } from "react";
export default function OptInSection() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const telegramBotToken = '6160009452:AAFOsemyNNyNWhCWHP_NXuuKeknkzllDQrI';
  const telegramChatId = '-665752092';

  function sendMessageToTelegramBot(name, email, surname, phone, message) {
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    const data = new FormData();
    data.append('chat_id', telegramChatId);
    data.append('text', `Ім'я: ${name}\nEmail: ${email}\nПрізвище: ${surname}\nНомер телефону: ${phone}\nКоротко про вас: ${message}`);

    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.send(data);
  }

  const formHandler = (e) => {
    e.preventDefault();
    sendMessageToTelegramBot(name, email, surname, phone, message);
  };
  return (
    <div id="optInSection">
      <p id="optInText">Приєднюйтесь до нас</p>
      <p id="optInSubText">
        Побудуй <br />
        Свою кар'єру
      </p>
      <form className="telegram-form" id="message-form" onSubmit={formHandler}>
        <div id="inputsInOptSection">
          <div id="inputInOptSection1">
            <input
              type="text"
              placeholder="ім'я"
              className="OptSection1"
              id="message-input"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
            <input 
              type="text"
              placeholder="Email"
              className="OptSection1"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          <div id="inputInOptSection2">
            <input 
              type="text" 
              placeholder="Прізвище"
              className="OptSection2"
              value={surname}
              onChange={(e)=>{setSurname(e.target.value)}} />
            <input
              type="text"
              placeholder="Номер телефону"
              className="OptSection2"
              value={phone}
              onChange={(e)=>{setPhone(e.target.value)}}
            />
          </div>
        </div>
        <textarea
          id="inputTellUs"
          cols="30"
          rows="10"
          placeholder="Коротко про вас..."
          value={message}
          onChange={(e)=>{setMessage(e.target.value)}}
        ></textarea>
        <button className="mainInfoButton" type="submit">
          <p className="infoButtonText">Надіслати анкету</p>
        </button>
      </form>
    </div>
  );
}
