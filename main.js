const linksSocialMedia = {
  github: 'alisonromeu',
  youtube: 'channel/UCKScktapFBD0pUrE5GwVBIw',
  facebook: 'alisonromeu',
  instagram: 'alison.romeu',
  twitter: 'alisonromeu'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url)
  .then(response => response.json()) // converte a resposta em json
  .then(data => {
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLink.href = data.html_url;
    userImage.src = data.avatar_url;
    userLogin.textContent = data.login;
  }) // usa a resposta já convertida em json
}

getGitHubProfileInfo()

