fetch("https://dslist-games.onrender.com/games")
    .then(res => {
        return res.json();
    }).then(data => {
        data.forEach(element => {
            const id = element.id
            const title = element.title
            const img = element.imgUrl
            const year = element.year
            const description = element.shortDescription

            document.querySelector('.container .game-list').insertAdjacentHTML('beforeend', `
            <div class="game-card">
                <img src="${img}" alt="game-image">
                <ul class="game-details">
                    <li id="title">${title}</li>
                    <li id="year">${year}</li>
                    <li id="description">${description}</li>
                </ul>
                <form action="game.html" method="get">
                    <button value="${id}" name="id">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </form>
            </div>
            `)
        });

    });

    gameId = window.location.href.split('?')[1].split('=')[1]

    fetch(`https://dslist-games.onrender.com/games/${gameId}`)
    .then(res => {
        return res.json();
    }).then(data => {

        document.querySelector(".container .game").insertAdjacentHTML('beforeend', `
            <h2 id="title">${data.title}</h2>
            <div class="game-more-details">
                <img src="${data.imgUrl}" alt="game-image">
                <ul class="game-details">
                    <li id="year">${data.year}</li>
                    <li id="genre"><p>Genre:</p>${data.genre}</li>
                    <li id="platforms"><p>Platforms:</p>${data.platforms}</li>
                    <li id="score"><p>Score:</p>${data.score}</li>
                </ul>
            </div>
            <div class="descriptions">
                <div class="short">
                    <p id="shotDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse officiis corrupti unde repellat non quibusdam! Id nihil itaque ipsum!</p>
                </div>
                <div class="long">
                    <h3>Long Description</h3>
                    <p id="longDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum illum placeat eligendi, quis maiores veniam. Incidunt dolorum, nisi deleniti dicta odit voluptatem nam provident temporibus reprehenderit blanditiis consectetur tenetur. Dignissimos blanditiis quod corporis iste, aliquid perspiciatis architecto quasi tempore ipsam voluptates ea ad distinctio, sapiente qui, amet quidem culpa.</p>
                </div>
            </div>
        `)
        console.log(data)
    })