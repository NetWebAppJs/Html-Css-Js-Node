/* 
 * CLICK ROBOT TO SPEAK
 * Change text in message.text
 * variable to alter robot message
 *
 * CONFIG.DEFAULT: false, will override
 * system default voice
 */

const CONFIG = {
    DEFAULT: false,
    VOICE: 'Fred'
};


const robot = document.querySelector('.robot');

let message = new SpeechSynthesisUtterance();

message.text = `Привет, друг! Меня зовут Андрей:)
Ты на странице ресурсов по изучению Фронтэнд и Бэкэнд программированию. Я реализую много примеров по этой теме в моем твиттере. В Моем Твиттере можно следить за всеми новостями моих разработок. Я с радостью представляю вам ссылки на ресурсы по изучению Фронтэнд и Бэкэнд в разделе: "уроки", и ресурсы Пэ О в разделе: "редакторы кода", которое необходимо для занятий.`;

let voices = [];


speechSynthesis.addEventListener('voiceschanged', event => {
    voices = speechSynthesis.getVoices();
    if (!CONFIG.DEFAULT) {
        message.voice = voices.find(voice => voice.name === CONFIG.VOICE);
    }
});

message.onend = function(event) {
    robot.classList.remove('robot_speaking');
};

robot.addEventListener('click', event => {
    if (speechSynthesis.speaking) {
        robot.classList.remove('robot_speaking');
        speechSynthesis.cancel();
    } else {
        robot.classList.add('robot_speaking');
        speechSynthesis.speak(message);
    }
});