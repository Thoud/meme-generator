export default function InputFields() {
  return (
    <div className="inputFields">
      <label htmlFor="topText">Top Text</label>
      <input id="topText" type="text" />
      <label htmlFor="bottomText">Bottom Text</label>
      <input id="bottomText" type="text" />
      <div className="buttonContainer">
        <button>Create Meme</button>
        <button>Download</button>
      </div>
    </div>
  );
}
