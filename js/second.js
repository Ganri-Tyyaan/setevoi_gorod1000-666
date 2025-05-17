let main = document.querySelector('main')
let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница","Суббота"]

days.forEach(day => {
    let table = document.createElement("div")
    table.innerHTML = `
            <table>
                <th class="day">${day}</th>
                <tr>
                    <td>№</td>
                    <td>Предмет</td>
                    <td>Оценка</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td class="p"></td>
                    <td class="o"></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td class="p"></td>
                    <td class="o"></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td class="p"></td>
                    <td class="o"></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td class="p"></td>
                    <td class="o"></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td class="p"></td>
                    <td class="o"></td>
                </tr>
            </table>
    `
    table.classList.add("card")
    main.appendChild(table)

    table.querySelectorAll(".p").forEach(p => {
        let items = ["VEB", "Аналитика", "Математика", " ", "Python", "Информатика","Unity"]
        p.innerHTML = items[Math.floor(Math.random()*items.length)];
    })
    table.querySelectorAll(".o").forEach(o => {
        let items = ["5", "4", "3", " ", "2", "от", "уп", " ", " "]
        o.innerHTML = items[Math.floor(Math.random()*items.length)];
    })
})
