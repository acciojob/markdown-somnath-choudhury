import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setPreview(markdown);
      setLoading(false);
    }, 300); // Delay to simulate real-time preview
    return () => clearTimeout(timeout);
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <div className="editor-container">
        <textarea
          className="textarea"
          value={markdown}
          onChange={handleChange}
          placeholder="Type your markdown here..."
        />
        <div className="preview">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <ReactMarkdown>{preview}</ReactMarkdown>
          )}
        </div>
      </div>
    </>
  );
};

export default MarkdownEditor;
