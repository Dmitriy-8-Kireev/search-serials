export const search = query =>
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`, {
    method: 'GET',
    mode: 'cors',
  })
    .then(response => response.json())
    .then(shows => shows.map(show => show.show));

export const show = showId =>
  fetch(`https://api.tvmaze.com/shows/${showId}?embed=cast`, {
    method: 'GET',
    mode: 'cors',
  }).then(response => response.json());
