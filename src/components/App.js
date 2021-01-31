import { useState, useEffect } from 'react';
import InputFields from './InputFields';
import PreviewMeme from './PreviewMeme';
import Overlay from './Overlay';

// Async Function to get all empty Memes available
async function getPreviewTemplates(setter) {
  try {
    const response = await fetch('https://api.memegen.link/templates/');
    const body = await response.json();
    setter(body.map((item) => item.blank.split('.png')[0].split('/')[4]));
  } catch (error) {
    console.log(error);
  }
}

export default function App() {
  // Storing all URLs for preview in an array
  const [templateNames, setTemplateNames] = useState([]);

  // Using useEffect to setTemplateNames after the fetch is resolved
  useEffect(() => {
    getPreviewTemplates(setTemplateNames);
  }, []);

  // Switch between Overlay active and hidden
  const [overlayHidden, setOverlayHidden] = useState(true);

  return (
    <>
      <h1>Meme Generator</h1>
      <InputFields
        overlayHidden={overlayHidden}
        setOverlayHidden={setOverlayHidden}
      />
      <PreviewMeme />
      <Overlay
        templateNames={templateNames}
        overlayHidden={overlayHidden}
        setOverlayHidden={setOverlayHidden}
      />
    </>
  );
}
