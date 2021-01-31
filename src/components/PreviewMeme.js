export default function Images(props) {
  return (
    <div className="previewMeme">
      <img
        src={`https://api.memegen.link/images/${props.chosenMeme}.jpg?width=450&height=450`}
        alt={props.chosenMeme}
      />
    </div>
  );
}
