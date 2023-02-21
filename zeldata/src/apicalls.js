const getData = (data) => {
  return fetch(`https://zelda.fanapis.com/api/${data}?limit=12`)
    .then(response => response.json())
}

export default getData
