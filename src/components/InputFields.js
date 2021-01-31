export default function InputFields(props) {
  return (
    <div className="inputFields">
      <div>
        <label htmlFor="topText">Top Text</label>
        <input id="topText" type="text" />
      </div>
      <div>
        <label htmlFor="bottomText">Bottom Text</label>
        <input id="bottomText" type="text" />
      </div>
      <button
        onClick={() => props.setOverlayHidden(false)}
        onKeyDown={() => props.setOverlayHidden(false)}
        tabIndex={0}
      >
        Choose Meme
      </button>
      <button>Create Meme</button>
      <button>Download</button>
    </div>
  );
}
