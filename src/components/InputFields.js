export default function InputFields() {
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
      <button>Choose Meme</button>
      <button>Create Meme</button>
      <button>Download</button>
    </div>
  );
}
