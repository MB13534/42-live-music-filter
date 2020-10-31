const userList = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

const URL = 'https://randomuser.me/api/?results=500';

fetchUsers();

filter.addEventListener('input', e => {
    filterData(e.target.value)
})

async function fetchUsers() {
    const response = await axios.get(URL);
    const { results: users } = response.data;
    
    userList.innerHTML = ''
    users.forEach(user => {
        const card = document.createElement('li');
        listItems.push(card)
        card.innerHTML = `
        <img
        src="${user.picture.large}"
        alt="${user.name.first}"
    />
    <div class="user-info">
        <h4>${user.name.first + ' ' + user.name.last}</h4>
        <p>${user.location.city + ', ' + user.location.country}</p>
    </div>
        `
        userList.appendChild(card)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}