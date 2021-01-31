export default function InputFields(props) {
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
            `https://api.memegen.link/images/${props.chosenMeme}/${props.topText}/${props.bottomText}.jpg?width=450&height=450`
          )
        }
      >
        Create Meme
      </button>
      <button>Download</button>
    </div>
  );
}
