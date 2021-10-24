function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/DirceuSilvestre`

  fetch(url).then(response => response.json())
  //.then(data => alert(data.bio))
}

getGitHubProfileInfos()
