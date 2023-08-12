document.addEventListener('DOMContentLoaded', function() {
    const avatarE = document.querySelector('#avatar');
    const nomeE = document.querySelector('#nome');
    const usernameE = document.querySelector('#username');
    const repositoriosE = document.querySelector('#repositorios');
    const seguidoresE = document.querySelector('#seguidores');
    const seguindoE = document.querySelector('#seguindo');
    const gitE = document.querySelector('#git');
    const endpoint = 'https://api.github.com/users/ramonsilvab';

    fetch(endpoint)
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        avatarE.src = json.avatar_url;
        nomeE.innerText = json.name;
        usernameE.innerHTML = json.login;
        repositoriosE.innerText = json.public_repos;
        seguidoresE.innerHTML = json.followers;
        seguindoE.innerHTML = json.following;
        gitE.href = json.html_url;
    })
})