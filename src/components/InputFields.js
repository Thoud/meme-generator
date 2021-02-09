// Helper function for escaping not allowed Character in the URL for the api call
function escapingCharacters(item) {
  if (item === ' ') {
    return '_';
  } else if (item === '_') {
    return '__';
  } else if (item === '-') {
    return '--';
  } else if (item === '?') {
    return '~q';
  } else if (item === '&') {
    return '~a';
  } else if (item === '%') {
    return '~p';
  } else if (item === '#') {
    return '~h';
  } else if (item === '/') {
    return '~s';
  } else if (item === '\\') {
    return '~b';
  } else if (item === '"') {
    return "''";
  } else {
    return item;
  }
}

// Helper function to download the created meme
function download(downloadUrl, fileText) {
  fetch(downloadUrl.split('.').slice(0, 3).join('.') + '.png', {
    method: 'GET',
    headers: {},
  })
    .then((response) => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileText + '.png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function InputFields(props) {
  return (
    <div className="inputFields">
      <div>
        <label htmlFor="topText">Top Text</label>
        <input
          id="topText"
          type="text"
          onChange={({ target }) => {
            const urlText = target.value
              .split('')
              .map((item) => escapingCharacters(item));
            props.setTopText(urlText.join(''));
          }}
        />
      </div>
      <div>
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          id="bottomText"
          type="text"
          onChange={({ target }) => {
            const urlText = target.value
              .split('')
              .map((item) => escapingCharacters(item));
            props.setBottomText(urlText.join(''));
          }}
        />
      </div>
      <button onClick={() => props.setOverlayHidden(false)}>Choose Meme</button>
      <button
        onClick={() =>
          props.setMemeUrl(
            `https://api.memegen.link/images/${props.chosenMeme}/${props.topText}/${props.bottomText}.jpg?width=450&height=450`,
          )
        }
      >
        Create Meme
      </button>
      <button onClick={() => download(props.memeUrl, props.chosenMeme)}>
        Download
      </button>
    </div>
  );
}
