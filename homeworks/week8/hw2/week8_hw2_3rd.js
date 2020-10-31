const API_URL = 'https://api.twitch.tv/kraken';
const CLIENT_ID = 'v9b7l2fpmf6umuu6jkn41ju0hex882';
const STREAM_TEMPLATE = `<div class="stream">
                <img src="$preview" />
                <div class="stream__data">
                    <div class="stream__avatar">
                        <img src="$logo">
                    </div>
                    <div class="stream__intro">
                        <div class="stream__title">$title</div>
                        <div class="stream__channel">
                            $name
                        </div>
                    </div>
                </div>
              </div>`;
// eslint-disable-next-line
getGames (function(games) {
  // eslint-disable-next-line
  for (const game of games) {
    const element = document.createElement('li');
    element.innerText = game.game.name;
    document.querySelector('.navbar__nav').appendChild(element);
  }
  // 顯示第一個遊戲的實況名稱
  // eslint-disable-next-line
  changeGame(games[0].game.name);
});
document.querySelector('.navbar__nav').addEventListener('click', (e) => {
  // eslint-disable-next-line
  if (e.target.tagName.toLowerCase() === 'li') {
    const gameName = e.target.innerText;
    // eslint-disable-next-line
	changeGame(gameName);
  }
});
function changeGame(gameName) {
  document.querySelector('h1').innerText = gameName;
  document.querySelector('.streams').innerHTML = '';
  // eslint-disable-next-line
	  getStreams(gameName, function (streams) {
    // eslint-disable-next-line
	for (const stream of streams) {
      // eslint-disable-next-line
	  appendStream(stream);
    }
  });
}
function appendStream(stream) {
  const element = document.createElement('div');
  document.querySelector('.streams').appendChild(element);
  element.outerHTML = STREAM_TEMPLATE
    .replace('$preview', stream.preview.large)
    .replace('$logo', stream.channel.logo)
    .replace('$title', stream.channel.status)
    .replace('$name', stream.channel.name);
}
function getGames(callback) {
  const request = new XMLHttpRequest();
  request.open('GET', `${API_URL}/games/top?limit=5`, true);
  request.setRequestHeader('Client-ID', CLIENT_ID);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  // eslint-disable-next-line
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      const games = JSON.parse(this.response).top;
      callback(games);
    }
  };
  request.send();
}

function getStreams(gameName, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', `${API_URL}/streams?game=${encodeURIComponent(gameName)}`, true);
  request.setRequestHeader('Client-ID', CLIENT_ID);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.response).streams;
      callback(data);
    }
  };
  request.send();
}
