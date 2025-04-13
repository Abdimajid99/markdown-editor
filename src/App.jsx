import { useState } from "react";
import { MdOutlineEdit, MdOutlineSaveAs } from "react-icons/md";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./App.css";

const starterMarkdown = `# Sample Markdown

This is some basic, sample markdown.

a checklist:
- [ ] task 1
- [ ] task 2 
- [x] task 3

## Second Heading

 * Unordered lists, and:
  1. One
  1. Two
  1. Three
 * More

> Blockquote

And **bold**, *italics*, and even *italics and later **bold***. Even ~~strikethrough~~. [A link](https://google.com) to somewhere.


Or an image of bears

![bears](http://placebear.com/200/200)

The end ...
`;

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [markdown, setMarkdown] = useState(starterMarkdown);

  const handleMarkdownEdit = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="content-container">
      <button
        className="edit-btn"
        onClick={() => setIsEditing(!isEditing)}
        title="edit document"
      >
        {isEditing ? <MdOutlineSaveAs /> : <MdOutlineEdit />}
      </button>
      <div className={`markdown-panel ${isEditing ? "editing" : ""}`}>
        <textarea
          value={markdown}
          onChange={handleMarkdownEdit}
          placeholder="Type your markdown here..."
          s
        ></textarea>
      </div>
      <div className="html-panel">
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
      </div>
    </div>
  );
}

export default App;
