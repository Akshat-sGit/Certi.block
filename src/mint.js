const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: '054d8d76-d953-42f2-bd86-5a6010858036'
  },
  body: JSON.stringify({chain: 'ethereum', roles: [{role: 'mint', freeze: true}], type: 'erc721'})
};

fetch('https://api.nftport.xyz/v0/contracts', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));