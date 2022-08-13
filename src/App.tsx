import { useEffect, useRef, useState } from 'react';

import ReactMarkdown from 'react-markdown';

const App = () => {
  const [text, setText] = useState<string>('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className='app'>
      <textarea ref={inputRef} onChange={(event) => handleChange(event)} />
      <ReactMarkdown className='preview'>{text}</ReactMarkdown>
    </div>
  );
};

export default App;
