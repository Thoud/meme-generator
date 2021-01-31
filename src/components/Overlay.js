export default function Overlay(props) {
  return (
    <div
      className={props.overlayHidden ? 'overlay hidden' : 'overlay visible'}
      onClick={() => props.setOverlayHidden(true)}
      onKeyDown={() => props.setOverlayHidden(true)}
      role="button"
      tabIndex={0}
    >
      <div>
        <div
          className="close"
          onClick={() => props.setOverlayHidden(true)}
          onKeyDown={() => props.setOverlayHidden(true)}
          role="button"
          tabIndex={0}
        />
        <div className="overflow">
          {props.templateNames.map((item, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  props.setChosenMeme(item);
                  props.setMemeUrl(
                    `https://api.memegen.link/images/${item}.jpg?width=450&height=450`
                  );
                }}
                onKeyDown={() => {
                  props.setChosenMeme(item);
                  props.setMemeUrl(
                    `https://api.memegen.link/images/${item}.jpg?width=450&height=450`
                  );
                }}
                role="button"
                tabIndex={0}
              >
                <img
                  key={i}
                  src={`https://api.memegen.link/images/${item}.jpg?width=180&height=180`}
                  alt={item}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
