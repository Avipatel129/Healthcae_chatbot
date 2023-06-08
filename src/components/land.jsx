import React, { useState } from 'react';
import './style.css';

const Chatbox = () => {
  const [state, setState] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const toggleState = () => {
    setState(!state);
  };

  const onSendButton = () => {
    if (inputValue === '') {
      return;
    }

    const msg1 = { name: 'User', message: inputValue };
    setMessages([...messages, msg1]);

    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: JSON.stringify({ message: inputValue }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        const msg2 = { name: 'Sam', message: result.answer };
        setMessages([...messages, msg2]);
        setInputValue('');
      })
      .catch((error) => {
        console.error('Error:', error);
        setInputValue('');
      });
  };

  const updateChatText = () => {
    return messages
      .slice()
      .reverse()
      .map((item, index) => (
        <div
          key={index}
          className={`messages__item ${
            item.name === 'Sam' ? 'messages__item--visitor' : 'messages__item--operator'
          }`}
        >
          {item.message}
        </div>
      ));
  };

  return (
    <div className={`chatbox ${state ? 'chatbox--active' : ''}`}>
      <div className="chatbox__support">
        <div className="chatbox__header">
          <div className="chatbox__image--header">
            <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
          </div>
          <div className="chatbox__content--header">
            <h4 className="chatbox__heading--header">Health support</h4>
            <p className="chatbox__description--header">Hi. How can I help you?</p>
          </div>
        </div>
        <div className="chatbox__messages">{updateChatText()}</div>
        <div className="chatbox__footer">
          <input type="text" placeholder="Write a message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button className="chatbox__send--footer send__button" onClick={onSendButton}>
            Send
          </button>
        </div>
      </div>
      <div className="chatbox__button">
        <button onClick={toggleState}></button>
          <img src="" />
          {/* <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.2857 10.5714C28.2857 4.88616 21.9576 0.285714 14.1429 0.285714C6.32813 0.285714 0 4.88616 0 10.5714C0 13.8259 2.08929 16.7388 5.34375 18.6272C4.66071 20.2946 3.. */}
        <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.2857 10.5714C28.2857 4.88616 21.9576 0.285714 14.1429 0.285714C6.32813 0.285714 0 4.88616 0 10.5714C0 13.8259 2.08929 16.7388 5.34375 18.6272C4.66071 20.2946 3.58333 21.6786 2.24018 22.5701C1.20604 23.2396 0.559375 24.4598 0.559375 25.8562V28.4286C0.559375 28.7259 0.796875 28.9634 1.09464 28.9634H34.5714C34.8692 28.9634 35.1067 28.7259 35.1067 28.4286V25.8562C35.1067 24.4598 34.4601 23.2396 33.426 22.5701C32.083 21.6786 31.0057 20.2946 30.3227 18.6272C33.5771 16.7388 35.6667 13.8259 35.6667 10.5714C35.6667 4.88616 29.3385 0.285714 21.5238 0.285714C13.709 0.285714 7.38095 4.88616 7.38095 10.5714C7.38095 11.2388 7.50476 11.8929 7.73929 12.5143C6.67857 13.5143 5.79762 14.7779 5.79762 16.1429C5.79762 18.8929 8.08929 21.1429 11.1429 21.1429H20.0476C20.3452 21.1429 20.5827 21.3804 20.5827 21.6786V26.7143H15.2381C14.9405 26.7143 14.7029 26.9518 14.7029 27.2491V28.4286H21.5238V27.2491C21.5238 26.9518 21.2862 26.7143 20.9886 26.7143H15.2381V21.6786C15.2381 21.3804 15.4756 21.1429 15.7732 21.1429H24.6786C27.7322 21.1429 30.0238 18.8929 30.0238 16.1429C30.0238 14.7779 29.1429 13.5143 28.0821 12.5143C28.3167 11.8929 28.4405 11.2388 28.4405 10.5714H28.2857ZM9.0119 10.5714C9.0119 6.96786 11.7925 4.14286 14.1429 4.14286C16.4933 4.14286 19.2738 6.96786 19.2738 10.5714C19.2738 14.1749 16.4933 16.9999 14.1429 16.9999C11.7925 16.9999 9.0119 14.1749 9.0119 10.5714ZM25.2738 10.5714C25.2738 6.96786 28.0543 4.14286 30.4048 4.14286C32.7552 4.14286 35.5357 6.96786 35.5357 10.5714C35.5357 14.1749 32.7552 16.9999 30.4048 16.9999C28.0543 16.9999 25.2738 14.1749 25.2738 10.5714Z" fill="#333333"/>
        </svg>
        </div>
        </div>
        )
    }

    export default land;
