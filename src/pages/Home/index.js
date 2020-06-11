import React, { useState, useEffect } from 'react';
import qs from 'qs';

import {
  Wrapper,
  Container,
  Card,
  Templates,
  Form,
  Button,
  ImageContainer,
  MemeImage,
} from './styles';

import logo from '../../images/logo.svg';

function Home() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const [generatedMeme, setGeneratedMeme] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.imgflip.com/get_memes');

      const {
        data: { memes },
      } = await response.json();

      setTemplates(memes);
    })();
  }, []);

  function handleSelectTemplate(template) {
    setSelectedTemplate(template);
    setBoxes([]);
  }

  const handleInputChange = (index) => (event) => {
    const newValues = boxes;
    newValues[index] = event.target.value;
    setBoxes(newValues);
  };

  function handleReset() {
    setSelectedTemplate(null);
    setBoxes([]);
    setGeneratedMeme(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const params = qs.stringify({
      template_id: selectedTemplate.id,
      username: 'vikayel543',
      password: 'vikayel543',
      boxes: boxes.map((text) => ({ text })),
    });

    const response = await fetch(
      `https://api.imgflip.com/caption_image?${params}`
    );
    const {
      data: { url },
    } = await response.json();

    setGeneratedMeme(url);
  }

  return (
    <Wrapper>
      <Container>
        <img src={logo} alt='Meme Maker' />
        <Card>
          {!generatedMeme ? (
            <>
              <h2>Selecione um template</h2>
              <Templates>
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => handleSelectTemplate(template)}
                    className={
                      template.id === selectedTemplate?.id ? 'selected' : ''
                    }
                  >
                    <img src={template.url} alt={template.name} />
                  </button>
                ))}
              </Templates>

              {selectedTemplate && (
                <>
                  <Form onSubmit={handleSubmit}>
                    <h2>Textos</h2>
                    {new Array(selectedTemplate.box_count)
                      .fill('')
                      .map((_, index) => (
                        <input
                          key={String(Math.random())}
                          placeholder={`Texto ${index + 1}`}
                          onChange={handleInputChange(index)}
                        />
                      ))}
                    <Button type='submit'>Gerar Meme</Button>
                  </Form>
                </>
              )}
            </>
          ) : (
            <ImageContainer>
              <MemeImage src={generatedMeme} alt='Genereted Meme' />
              <Button onClick={handleReset}>Criar outro meme</Button>
            </ImageContainer>
          )}
        </Card>
      </Container>
    </Wrapper>
  );
}

export default Home;
