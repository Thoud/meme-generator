export default function Images(props) {
  return (
    <div className="previewMeme">
      <img
        src={props.memeUrl}
        alt={props.chosenMeme === '' ? '' : 'A meme of ' + props.chosenMeme}
      />
    </div>
  );
}
