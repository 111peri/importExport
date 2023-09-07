import { customFetch } from "./helpers.js";
import { endpoints } from "./endpoints.js";
import { getUsersBtn } from "./elements.js";
import { userList } from "./elements.js"




getUsersBtn.addEventListener('click', function() {
    customFetch(endpoints.users)
        .then(data => {
            data = JSON.parse(data)
            console.log(data);
            userList.innerHTML = '';

            data.forEach(user => {
                userList.innerHTML += `<li>Имя: ${user.name}, Возраст: ${user.age}, Город: ${user.city}</li>`;
            });
        })
        .catch(error => {
            console.error('Произошла ошибка при запросе:', error);
        });
});