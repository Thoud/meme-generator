import InputFields from './InputFields';
import PreviewMeme from './PreviewMeme';
import Overlay from './Overlay';

async function getPreviewTemplates() {
  const response = await fetch('https://api.memegen.link/templates/');
  const data = await response.json();
  return data.map(
    (item) => item.blank.split('.png')[0] + '.jpg?width=150&height=150'
  );
}

export default function App() {
  const previewMeme = getPreviewTemplates();
  console.log(previewMeme);

  return (
    <>
      <h1>Meme Generator</h1>
      <InputFields />
      <PreviewMeme />
      <Overlay />
    </>
  );
}
