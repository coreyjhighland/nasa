POD = {
  apiKey: '5DxlyXE5JZgyjCKkQTWMHDZYDyqvXTKVPr62SHVq',
  url: 'https://api.nasa.gov/planetary/apod?'
};

function getPhoto(fn) {
  const settings = {
    url: POD.url,
    data: {
      hd: 'true',
      api_key: POD.apiKey
    },
    type: 'GET',
    success: fn,
    error: function(jqXHR, status, err) {
      alert(
        'The photo of the day is not available. Please try again after a few minutes.'
      );
    }
  };
  $.ajax(settings);
}

function displayPhoto(data) {
  console.log(data);
  $('#photoBox').append(
    `<img src="${data.hdurl}" alt="${data.title}">
    <p>${data.explanation}</p>`
  );
}

function photo() {
  getPhoto(displayPhoto);
}

$(photo);
