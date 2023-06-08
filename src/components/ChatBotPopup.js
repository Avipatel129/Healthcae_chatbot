// // // import React, { useState } from 'react';
// // // import './ChatBotPopup.css';

// // // const ChatBotPopup = () => {
// // //     const [isOpen, setIsOpen] = useState(false);
// // //     const [userResponse, setUserResponse] = useState('');
// // //     const [chatHistory, setChatHistory] = useState([]);
// // //     const [userName, setUserName] = useState('');
// // //     const [chatStage, setChatStage] = useState(0);

// // //     const handleUserResponse = (event) => {
// // //         setUserResponse(event.target.value);
// // //     };

// // //     const handleSubmit = (event) => {
// // //         event.preventDefault();
// // //         setChatHistory(prevChatHistory => [...prevChatHistory, { user: userResponse }]);
// // //         setUserResponse('');
// // //         chatBotResponse();
// // //     };


// // //     const chatBotResponse = () => {
// // //         switch(chatStage) {
// // //             case 0:
// // //                 setUserName(userResponse);
// // //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: `Hi ${userResponse}, do you want to check symptoms?` }]);
// // //                 setChatStage(1);
// // //                 break;
// // //             case 1:
// // //                 if (userResponse.toLowerCase() === 'yes') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Please click on the check symptoms.' }]);
// // //                 } else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Do you want to search a doctor?' }]);
// // //                     setChatStage(2);
// // //                 }
// // //                 break;
// // //             case 2:
// // //                 if (userResponse.toLowerCase() === 'yes') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Please click on the search doctor.' }]);
// // //                 } else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                     setIsOpen(false);
// // //                 }
// // //                 break;
// // //             default:
// // //                 break;
// // //         }
// // //     };


// // //     // const chatBotResponse = () => {
// // //     //     switch(chatStage) {
// // //     //         case 0:
// // //                 // setUserName(userResponse);
// // //     //             setChatHistory(prevChatHistory => [...prevChatHistory, { bot: `Hi ${userResponse}, do you want to check symptoms?` }]);
// // //     //             setChatStage(1);
// // //     //             break;
// // //     //         case 1:
// // //     //             if (userResponse.toLowerCase() === 'yes') {
// // //     //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Enter yoy Symptoms :-.' }]);

// // //     //             if (userResponse.toLowerCase() === 'fever') {
// // //     //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'what type of high_fever or mild_fever.' }]);

// // //     //                 if (userResponse.toLowerCase() === 'high') {
// // //     //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'From how many days .' }]);

// // //     //                 } else if (userResponse.toLowerCase() === 'mild') {
// // //     //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //     //                 }
                    
// // //     //             } else if (userResponse.toLowerCase() === 'Pain') {
// // //     //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //     //             }
// // //     //             break;


// // //     //             } else if (userResponse.toLowerCase() === 'no') {
// // //     //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Do you want to search a doctor?' }]);
// // //     //                 setChatStage(2);
// // //     //             }
// // //     //             break;
// // //     //         case 2:
// // //     //             if (userResponse.toLowerCase() === 'yes') {
// // //     //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Please click on the search doctor.' }]);
// // //     //             } else if (userResponse.toLowerCase() === 'no') {
// // //     //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //     //                 setIsOpen(false);
// // //     //             }
// // //     //             break;
// // //     //         default:
// // //     //             break;
// // //     //     }
// // //     // };

// // //     const openChat = () => {
// // //         setIsOpen(true);
// // //         setChatHistory([{ bot: 'What is your name?' }]);
// // //     };

// // //     const closeChat = () => {
// // //         setIsOpen(false);
// // //         setChatHistory([]);
// // //         setChatStage(0);
// // //     };

// // //     return (
// // //         <div className="chat-bot-popup">
// // //             <button onClick={openChat}>Chat</button>
// // //             {isOpen && (
// // //                 <div className="chat-bot-window">
// // //                     <button onClick={closeChat}>X</button>
// // //                     <ul>
// // //                         {chatHistory.map((line, i) => (
// // //                             <li key={i}>{line.user ? `You: ${line.user}` : `Bot: ${line.bot}`}</li>
// // //                         ))}
// // //                     </ul>
// // //                     <form onSubmit={handleSubmit}>
// // //                         <input type="text" value={userResponse} onChange={handleUserResponse} />
// // //                         <button type="submit">Send</button>
// // //                     </form>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default ChatBotPopup;




// // // import React, { useState } from 'react';
// // // import './ChatBotPopup.css';

// // // const ChatBotPopup = () => {
// // //     const [isOpen, setIsOpen] = useState(false);
// // //     const [name, setName] = useState('');
// // //     const [mobileNumber, setMobileNumber] = useState('');
// // //     const [userResponse, setUserResponse] = useState('');
// // //     const [chatHistory, setChatHistory] = useState([]);
// // //     const [chatStage, setChatStage] = useState(0);

// // //     const handleUserResponse = (event) => {
// // //         setUserResponse(event.target.value);
// // //     };

// // //     const handleSubmit = (event) => {
// // //         event.preventDefault();
// // //         setChatHistory(prevChatHistory => [...prevChatHistory, { user: userResponse }]);
// // //         setUserResponse('');
// // //         chatBotResponse();
// // //     };

// // //     const chatBotResponse = () => {
// // //         switch(chatStage) {
// // //             case 0:
// // //                 setName(userResponse);
// // //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: `Hi ${userResponse}, please enter your mobile number.` }]);
// // //                 setChatStage(1);
// // //                 break;
// // //             case 1:
// // //                 setMobileNumber(userResponse);
// // //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: `Thank you, ${name}. Your mobile number is ${userResponse}.` }]);
// // //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Do you want to check symptoms?' }]);
// // //                 setChatStage(2);
// // //                 break;
// // //             case 2:
// // //                 if (userResponse.toLowerCase() === 'yes') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Enter your symptoms.' }]);
// // //                     setChatStage(3);
// // //                 } else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
// // //                     setChatStage(9);
// // //                 }
// // //                 break;
// // //             case 3:
// // //                 if (userResponse.toLowerCase() === 'fever') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any back_pain ? :.' }]);
// // //                     setChatStage(4);
// // //                 }else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                     setIsOpen(9);
// // //                 }
// // //                 break;
                
// // //             case 4:
// // //                 if (userResponse.toLowerCase() === 'yes') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any weakness_in_limbs ?.' }]);
// // //                     setChatStage(5);
// // //                 }else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                     setIsOpen(9);
// // //                 }
// // //                 break;
// // //             case 5:
// // //                if (userResponse.toLowerCase() === 'yes') {
// // //                         setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any neck_pain ?.' }]);
// // //                     setChatStage(6);
// // //                }else if (userResponse.toLowerCase() === 'no') {
// // //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                 setIsOpen(9);
// // //             }
// // //             break;
// // //             case 6:
// // //                 if (userResponse.toLowerCase() === 'yes') {
// // //                         setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any dizziness ?.' }]);
// // //                     setChatStage(7);
// // //                 }else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                     setIsOpen(9);
// // //                 }
// // //                 break;
// // //             case 7:
// // //             if (userResponse.toLowerCase() === 'yes') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any loss_of_balance ?.' }]);
// // //                     setChatStage(8);
// // //             }else if (userResponse.toLowerCase() === 'no') {
// // //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                 setIsOpen(9);
// // //             }
// // //             break;
// // //             case 8:
// // //                 if (userResponse.toLowerCase() === 'yes') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'It might not be that bad but you should take precautions. \nYou may have  Cervical spondylosis \n Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs) \n Take following measures \n1 ) use heating pad or cold pack \n2 ) exercise \n3 ) take otc pain reliver \n4 )consult doctor'}]);
// // //                 } else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                     setIsOpen(9);
// // //                 }
// // //                 break;

// // //             case 9:
// // //                 if (userResponse.toLowerCase() === 'yes') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Please click on the search doctor.' }]);
// // //                 } else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                     setIsOpen(false);
// // //                 }
// // //                 break;
// // //             default:
// // //                 break;
// // //         }
// // //     };

// // //     const openChat = () => {
// // //         setIsOpen(true);
// // //         setChatHistory([{ bot: 'What is your name?' }]);
// // //     };

// // //     const closeChat = () => {
// // //         setIsOpen(false);
// // //         setChatHistory([]);
// // //         setChatStage(0);
// // //     };
// // //     return (
// // //         <div className="chat-bot-popup">
// // //             {isOpen ? (
// // //                 <div className="chat-bot-window">
// // //                     <button onClick={closeChat}>X</button>
// // //                     <ul>
// // //                         {chatHistory.map((line, i) => (
// // //                             <li key={i}>{line.user ? `You: ${line.user}` : `Bot: ${line.bot}`}</li>
// // //                         ))}
// // //                     </ul>
// // //                     <form onSubmit={handleSubmit}>
// // //                         <input type="text" value={userResponse} onChange={handleUserResponse} />
// // //                         <button type="submit">Send</button>
// // //                     </form>
// // //                 </div>
// // //             ) : (
// // //                 <button onClick={openChat}>Chat</button>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default ChatBotPopup;

// // // import React, { useState } from 'react';
// // // import './ChatBotPopup.css';

// // // const ChatBotPopup = () => {
// // //     const [isOpen, setIsOpen] = useState(false);
// // //     const [name, setName] = useState('');
// // //     const [mobileNumber, setMobileNumber] = useState('');
// // //     const [userResponse, setUserResponse] = useState('');
// // //     const [chatHistory, setChatHistory] = useState([]);
// // //     const [chatStage, setChatStage] = useState(0);

// // //     const handleUserResponse = (event) => {
// // //         setUserResponse(event.target.value);
// // //     };

// // //     const handleSubmit = (event) => {
// // //         event.preventDefault();
// // //         setChatHistory(prevChatHistory => [...prevChatHistory, { user: userResponse }]);
// // //         setUserResponse('');
// // //         chatBotResponse();
// // //     };

// // //     const chatBotResponse = () => {
// // //         switch(chatStage) {
// // //             case 0:
// // //                 setName(userResponse);
// // //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: `Hi ${userResponse}, please enter your mobile number.` }]);
// // //                 setChatStage(1);
// // //                 break;
// // //             case 1:
// // //                 setMobileNumber(userResponse);
// // //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: `Thank you, ${name}. Your mobile number is ${userResponse}.` }]);
// // //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Do you want to check symptoms?' }]);
// // //                 setChatStage(2);
// // //                 break;
// // //             case 2:
// // //                 if (userResponse.toLowerCase() === 'yes') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Enter your symptoms.' }]);
// // //                     setChatStage(3);
// // //                 } else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
// // //                     setChatStage(9);
// // //                 }
// // //                 break;
// // //             case 3:
// // //                 if (userResponse.toLowerCase() === 'fever') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any back_pain ? :.' }]);
// // //                     setChatStage(4);
// // //                 }else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                     setIsOpen(9);
// // //                 }
// // //                 break;
                
// // //             case 4:
// // //                 if (userResponse.toLowerCase() === 'yes') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any weakness_in_limbs ?.' }]);
// // //                     setChatStage(5);
// // //                 }else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                     setIsOpen(9);
// // //                 }
// // //                 break;
// // //             case 5:
// // //                if (userResponse.toLowerCase() === 'yes') {
// // //                         setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any neck_pain ?.' }]);
// // //                     setChatStage(6);
// // //                }else if (userResponse.toLowerCase() === 'no') {
// // //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                 setIsOpen(9);
// // //             }
// // //             break;
// // //             case 6:
// // //                 if (userResponse.toLowerCase() === 'yes') {
// // //                         setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any dizziness ?.' }]);
// // //                     setChatStage(7);
// // //                 }else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                     setIsOpen(9);
// // //                 }
// // //                 break;
// // //             case 7:
// // //             if (userResponse.toLowerCase() === 'yes') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any loss_of_balance ?.' }]);
// // //                     setChatStage(8);
// // //             }else if (userResponse.toLowerCase() === 'no') {
// // //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                 setIsOpen(9);
// // //             }
// // //             break;
// // //             case 8:
// // //                 if (userResponse.toLowerCase() === 'yes') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'It might not be that bad but you should take precautions. \nYou may have  Cervical spondylosis \n Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs) \n Take following measures \n1 ) use heating pad or cold pack \n2 ) exercise \n3 ) take otc pain reliver \n4 )consult doctor'}]);
// // //                 } else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                     setIsOpen(9);
// // //                 }
// // //                 break;

// // //             case 9:
// // //                 if (userResponse.toLowerCase() === 'yes') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Please click on the search doctor.' }]);
// // //                 } else if (userResponse.toLowerCase() === 'no') {
// // //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// // //                     // setIsOpen(false);
// // //                 }
// // //                 break;
// // //             default:
// // //                 break;
// // //         }
// // //     };

// // //     const openChat = () => {
// // //         setIsOpen(true);
// // //         setChatHistory([{ bot: 'This is Health-care Chatbot. how can we help you.  What is your name?' }]);
// // //     };

// // //     const closeChat = () => {
// // //         setIsOpen(false);
// // //         setChatHistory([]);
// // //         setChatStage(0);
// // //     };
// // //     return (
// // //         <div className="chat-bot-popup">
// // //           {isOpen ? (
// // //             <div className="chat-bot-window">
// // //               <button onClick={closeChat}>Health-Care Chatbot</button>
// // //               <ul>
// // //                 {chatHistory.map((line, i) => (
// // //                   <li key={i} className={line.user ? 'user-msg' : 'bot-msg'}>
// // //                     <div className="msg-content">
// // //                       {line.user ? `You: ${line.user}` : `Bot: ${line.bot}`}
// // //                     </div>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //               <form onSubmit={handleSubmit}>
// // //                 <input type="text" value={userResponse} onChange={handleUserResponse} />
// // //                 <button type="submit">Send</button>
// // //               </form>
// // //             </div>
// // //           ) : (
// // //             <button onClick={openChat} ><svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //             <path d="M28.2857 10.5714C28.2857 4.88616 21.9576 0.285714 14.1429 0.285714C6.32813 0.285714 0 4.88616 0 10.5714C0 13.8259 2.08929 16.7388 5.34375 18.6272C4.66071 20.2946 3.77679 21.0781 2.9933 21.9621C2.77232 22.2232 2.51116 22.4643 2.59152 22.846C2.65179 23.1875 2.93304 23.4286 3.23438 23.4286C3.25446 23.4286 3.27455 23.4286 3.29464 23.4286C3.89732 23.3482 4.47991 23.2478 5.02232 23.1071C7.05134 22.5848 8.93973 21.721 10.6071 20.5357C11.7321 20.7366 12.9174 20.8571 14.1429 20.8571C21.9576 20.8571 28.2857 16.2567 28.2857 10.5714ZM36 15.7143C36 12.3594 33.7902 9.38616 30.3951 7.51786C30.6964 8.50223 30.8571 9.52679 30.8571 10.5714C30.8571 14.1674 29.0089 17.4821 25.654 19.933C22.5402 22.183 18.4621 23.4286 14.1429 23.4286C13.5603 23.4286 12.9576 23.3884 12.375 23.3482C14.8862 24.9955 18.221 26 21.8571 26C23.0826 26 24.2679 25.8795 25.3929 25.6786C27.0603 26.8638 28.9487 27.7277 30.9777 28.25C31.5201 28.3906 32.1027 28.4911 32.7054 28.5714C33.0268 28.6116 33.3281 28.3504 33.4085 27.9888C33.4888 27.6071 33.2277 27.3661 33.0067 27.1049C32.2232 26.221 31.3393 25.4375 30.6563 23.7701C33.9107 21.8817 36 18.9888 36 15.7143Z" fill="#581B98"/>
// // //             </svg></button>
// // //           )}
// // //         </div>
// // //       );
// // // };

// // // export default ChatBotPopup;















// // import React, { useState } from 'react';
// // import './ChatBotPopup.css';

// // const ChatBotPopup = () => {
// //     const [isOpen, setIsOpen] = useState(false);
// //     const [name, setName] = useState('');
// //     const [mobileNumber, setMobileNumber] = useState('');
// //     const [userResponse, setUserResponse] = useState('');
// //     const [chatHistory, setChatHistory] = useState([]);
// //     const [chatStage, setChatStage] = useState(0);

// //     const handleUserResponse = (event) => {
// //         setUserResponse(event.target.value);
// //     };

// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         setChatHistory(prevChatHistory => [...prevChatHistory, { user: userResponse }]);
// //         setUserResponse('');
// //         chatBotResponse();
// //     };

// //     const chatBotResponse = () => {
// //         switch(chatStage) {
// //             case 0:
// //                 setName(userResponse);
// //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: `Hi ${userResponse}, please enter your mobile number.` }]);
// //                 setChatStage(1);
// //                 break;
// //             case 1:
// //                 setMobileNumber(userResponse);
// //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: `Thank you, ${name}. Your mobile number is ${userResponse}.` }]);
// //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Ready to go through our daily routine?' }]);
// //                 setChatStage(2);
// //                 break;
// //             case 2:
// //                 if (userResponse.toLowerCase() === 'yes'|| userResponse.toLowerCase() === 'yep' ||userResponse.toLowerCase() === 'ok') {
// //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Super.' }]);
// //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'How are you feeling today?' }]);
// //                 setChatStage(15);
// //                 } else if (userResponse.toLowerCase() === 'no') {
// //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: "Just text ready to move us forward whenever you' ready" }]);       
// //                 setChatStage(3);
// //                 }
                
// //             case 3:
// //                 setMobileNumber(userResponse);
// //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Do you want to check symptoms?' }]);
// //                 setChatStage(4);
// //                 break;
// //             case 4:
// //                 if (userResponse.toLowerCase() === 'yes') {
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Enter your symptoms.' }]);
// //                     setChatStage(5);
// //                 } else if (userResponse.toLowerCase() === 'no') {
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
// //                     setChatStage(9);
// //                 }
// //                 break;
// //             case 5:
// //                 if (userResponse.toLowerCase() === 'fever') {
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any back_pain ? :.' }]);
// //                     setChatStage(6);
// //                 }else if (userResponse.toLowerCase() === 'chest_pain' || userResponse.toLowerCase() === 'chest pain' || userResponse.toLowerCase() === 'chest') {
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any stomach_pain ?' }]);
// //                     setIsOpen(11);
// //                 }
// //                 break;
            
// //             case 6:
// //                 if (userResponse.toLowerCase() === 'yes') {
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any weakness_in_limbs ?.' }]);
// //                     setChatStage(7);
// //                 }else if (userResponse.toLowerCase() === 'no') {
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// //                     setIsOpen(9);
// //                 }
// //                 break;
// //             case 7:
// //                if (userResponse.toLowerCase() === 'yes') {
// //                         setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any neck_pain ?.' }]);
// //                     setChatStage(8);
// //                }else if (userResponse.toLowerCase() === 'no') {
// //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// //                 setIsOpen(9);
// //             }
// //             break;
// //             case 8:
// //                 if (userResponse.toLowerCase() === 'yes') {
// //                         setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any dizziness ?.' }]);
// //                     setChatStage(9);
// //                 }else if (userResponse.toLowerCase() === 'no') {
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// //                     setIsOpen(9);
// //                 }
// //                 break;
// //             case 9:
// //             if (userResponse.toLowerCase() === 'yes') {
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any loss_of_balance ?.' }]);
// //                     setChatStage(10);
// //             }else if (userResponse.toLowerCase() === 'no') {
// //                 setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// //                 setIsOpen(9);
// //             }
// //             break;
// //             case 10:
// //                 if (userResponse.toLowerCase() === 'yes') {
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: "It might not be that bad but you should take precautions. You may have  Cervical spondylosis \n Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs) \n Take following measures \n1 ) use heating pad or cold pack \n2 ) exercise \n3 ) take otc pain reliver \n4 )consult doctor"}]);
// //                     break;
// //                 } else if (userResponse.toLowerCase() === 'no') {
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'You may have  Typhoid or  Impetigo' }]);
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: "An acute illness characterized by fever caused by infection with the bacterium Salmonella typhi. Typhoid fever has an insidious onset, with fever, headache, constipation, malaise, chills, and muscle pain. Diarrhea is uncommon, and vomiting is not usually severe. Impetigo (im-puh-TIE-go) is a common and highly contagious skin infection that mainly affects infants and children. Impetigo usually appears as red sores on the face, especially around a child's nose and mouth, and on hands and feet. The sores burst and develop honey-colored crusts. Take following measures :   1 ) eat high calorie vegitables  2 ) antiboitic therapy  3 ) consult doctor  4 ) medication" }]);
// //                     setIsOpen(9);
// //                 }
// //                 break;

// //             case 11:
// //                 if (userResponse.toLowerCase() === 'yes') {
// //                         setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any vomiting ?' }]);
// //                         setChatStage(12);
// //                     } 
    
// //             case 12:
// //                     if (userResponse.toLowerCase() === 'yes') {
// //                         setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any acidity ?' }]);
// //                         setChatStage(13);
// //                         }
                        
// //             case 13:
// //                     if (userResponse.toLowerCase() === 'yes') {
// //                         setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any ulcers_on_tongue ?' }]);
// //                         setChatStage(14);
// //                         } 
// //             case 14:
// //                     if (userResponse.toLowerCase() === 'yes' ) {
// //                         setChatHistory(prevChatHistory => [...prevChatHistory, { bot: "You may have  GERD Gastroesophageal reflux disease, or GERD, is a digestive disorder that affects the lower esophageal sphincter (LES), the ring of muscle between the esophagus and stomach. Many people, including pregnant women, suffer from heartburn or acid indigestion caused by GERD. Take following measures : 1 ) avoid fatty spicy food 2 ) avoid lying down after eating 3 ) maintain healthy weight 4 ) exercise" }]);
// //                         setChatStage(23);
// //                         } else if (userResponse.toLowerCase() === 'no') {
// //                             // setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any acidity ?' }]);
// //                             setChatStage(16);
// //                         } 
// //             case 15:
// //                 if (userResponse.toLowerCase() === 'good'|| userResponse.toLowerCase() === 'great' ||userResponse.toLowerCase() === 'ok') {
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Really glad to hear it.' }]);
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: "Well, I'd love to hear more."}]);
// //                     } else if (userResponse.toLowerCase() === 'no' || userResponse.toLowerCase() === 'not' || userResponse.toLowerCase() === 'bad') {
// //                         setChatHistory(prevChatHistory => [...prevChatHistory, { bot: "get help from our help desk" }]);       
// //                         setChatStage(16);
// //                     }

// //             case 16:
// //                 if (userResponse.toLowerCase() === 'yes') {
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Please click on the search doctor.' }]);
// //                 } else if (userResponse.toLowerCase() === 'no') {
// //                     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Thank you for your time.' }]);
// //                     // setIsOpen(false);
// //                 }
// //                 break;
// //             default:
// //                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Sorry, I didn\'t understand that. Can you please rephrase your response?' }]);
// //                 break;
// //         }
// //     };

// //     const openChat = () => {
// //         setIsOpen(true);
// //         setChatHistory([{ bot: 'What is your name?' }]);
// //     };

// //     const closeChat = () => {
// //         setIsOpen(false);
// //         setChatHistory([]);
// //         setChatStage(0);
// //     };
// //     return (
// //         <div className="chat-bot-popup">
// //           {isOpen ? (
// //             <div className="chat-bot-window">
// //             <button onClick={closeChat} class="chatbot_close">X</button>
// //             <p class='chat_headtitle'>Bot : Hi.. This is Health-care Chatbot. bot is here for help..</p>
// //               <ul>
// //                 {chatHistory.map((line, i) => (
// //                   <li key={i} className={line.user ? 'user-msg' : 'bot-msg'}>
// //                     <div className="msg-content">
// //                       {line.user ? `You: ${line.user}` : `Bot: ${line.bot}`}
// //                     </div>
// //                   </li>
// //                 ))}
// //               </ul>
// //               <form onSubmit={handleSubmit} >
// //                 <input type="text" class='chatbot_text' placeholder="Write a message..." value={userResponse} onChange={handleUserResponse} />
// //                 <button type="submit" class="chatbot_send">Send</button>
// //               </form>
// //               </div>
// //           ) : (
// //             <button onClick={openChat} class='bot_main'><svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
// //             <path d="M28.2857 10.5714C28.2857 4.88616 21.9576 0.285714 14.1429 0.285714C6.32813 0.285714 0 4.88616 0 10.5714C0 13.8259 2.08929 16.7388 5.34375 18.6272C4.66071 20.2946 3.77679 21.0781 2.9933 21.9621C2.77232 22.2232 2.51116 22.4643 2.59152 22.846C2.65179 23.1875 2.93304 23.4286 3.23438 23.4286C3.25446 23.4286 3.27455 23.4286 3.29464 23.4286C3.89732 23.3482 4.47991 23.2478 5.02232 23.1071C7.05134 22.5848 8.93973 21.721 10.6071 20.5357C11.7321 20.7366 12.9174 20.8571 14.1429 20.8571C21.9576 20.8571 28.2857 16.2567 28.2857 10.5714ZM36 15.7143C36 12.3594 33.7902 9.38616 30.3951 7.51786C30.6964 8.50223 30.8571 9.52679 30.8571 10.5714C30.8571 14.1674 29.0089 17.4821 25.654 19.933C22.5402 22.183 18.4621 23.4286 14.1429 23.4286C13.5603 23.4286 12.9576 23.3884 12.375 23.3482C14.8862 24.9955 18.221 26 21.8571 26C23.0826 26 24.2679 25.8795 25.3929 25.6786C27.0603 26.8638 28.9487 27.7277 30.9777 28.25C31.5201 28.3906 32.1027 28.4911 32.7054 28.5714C33.0268 28.6116 33.3281 28.3504 33.4085 27.9888C33.4888 27.6071 33.2277 27.3661 33.0067 27.1049C32.2232 26.221 31.3393 25.4375 30.6563 23.7701C33.9107 21.8817 36 18.9888 36 15.7143Z" fill="#581B98"/>
// //             </svg></button>
// //           )}
// //         </div>
// //       );
// // };

// // export default ChatBotPopup;























// // // if (userResponse.toLowerCase() === 'yes') {
                                                                           
// // // } else if (userResponse.toLowerCase() === 'no') {
// // //     setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any' }]);
// // // }
// // // } else if (userResponse.toLowerCase() === 'no') {
// // // setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any' }]);
// // // }
// // // } else if (userResponse.toLowerCase() === 'no') {
// // // setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any' }]);
// // // }
// // // } else if (userResponse.toLowerCase() === 'no') {
// // // setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any' }]);
// // // }
// // // } else if (userResponse.toLowerCase() === 'no') {
// // // setChatHistory(prevChatHistory => [...prevChatHistory, { bot: 'Are you experiencing any' }]);
// // // }








// // import React, { useState } from 'react';
// // import './ChatBotPopup.css';

// // const ChatBotPopup = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [name, setName] = useState('');
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [userResponse, setUserResponse] = useState('');
// //   const [chatHistory, setChatHistory] = useState([]);
// //   const [chatStage, setChatStage] = useState(0);

// //   const handleUserResponse = (event) => {
// //     setUserResponse(event.target.value);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     setChatHistory((prevChatHistory) => [...prevChatHistory, { user: userResponse }]);
// //     setUserResponse('');
// //     chatBotResponse();
// //   };

// //   const chatBotResponse = () => {
// //     switch (chatStage) {
// //       case 0:
// //         setName(userResponse);
// //         setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: `Hi ${userResponse}, please enter your mobile number.` }]);
// //         setChatStage(1);
// //         break;
// //       case 1:
// //         setMobileNumber(userResponse);
// //         setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: `Thank you, ${name}. Your mobile number is ${userResponse}.` }]);
// //         setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Ready to go through our daily routine?' }]);
// //         setChatStage(2);
// //         break;
// //       case 2:
// //         if (userResponse.toLowerCase() === 'yes' || userResponse.toLowerCase() === 'yep' || userResponse.toLowerCase() === 'ok') {
// //           setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Super.' }]);
// //           setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'How are you feeling today?' }]);
// //           setChatStage(15);
// //         } else if (userResponse.toLowerCase() === 'no') {
// //           setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: "Just text ready to move us forward whenever you're ready" }]);
// //           setChatStage(3);
// //         }
// //         break;
// //       case 3:
// //         setMobileNumber(userResponse);
// //         setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to check symptoms?' }]);
// //         setChatStage(4);
// //         break;
// //       case 4:
// //         if (userResponse.toLowerCase() === 'yes') {
// //           setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Enter your symptoms.' }]);
// //           setChatStage(5);
// //         } else if (userResponse.toLowerCase() === 'no') {
// //           setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
// //           setChatStage(9);
// //         }
// //         break;
// //       case 5:
// //         if (userResponse.toLowerCase() === 'fever') {
// //           setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing any back pain?' }]);
// //           setChatStage(6);
// //         } else if (userResponse.toLowerCase() === 'chest_pain' || userResponse.toLowerCase() === 'chest pain' || userResponse.toLowerCase() === 'chest') {
// //           setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing any stomach pain?' }]);
// //           setChatStage(11);
// //         }
// //         case 6:
// //             if (userResponse.toLowerCase() === 'yes') {
// //               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Based on your symptoms, it is recommended to consult a doctor. Do you want to search for a doctor?' }]);
// //               setChatStage(9);
// //             } else if (userResponse.toLowerCase() === 'no') {
// //               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing any headache?' }]);
// //               setChatStage(7);
// //             }
// //             break;
// //           case 7:
// //             if (userResponse.toLowerCase() === 'yes') {
// //               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Based on your symptoms, it is recommended to consult a doctor. Do you want to search for a doctor?' }]);
// //               setChatStage(9);
// //             } else if (userResponse.toLowerCase() === 'no') {
// //               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
// //               setChatStage(9);
// //             }
// //             break;
// //           case 11:
// //             if (userResponse.toLowerCase() === 'yes') {
// //               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Based on your symptoms, it is recommended to consult a doctor. Do you want to search for a doctor?' }]);
// //               setChatStage(9);
// //             } else if (userResponse.toLowerCase() === 'no') {
// //               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
// //               setChatStage(9);
// //             }
// //             break;
// //           case 9:
// //             if (userResponse.toLowerCase() === 'yes') {
// //               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Please enter your location.' }]);
// //               setChatStage(10);
// //             } else if (userResponse.toLowerCase() === 'no') {
// //               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Okay. Feel free to ask any other questions.' }]);
// //               setChatStage(16);
// //             }
// //             break;
// //           case 10:
// //             setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: `Searching for doctors near ${userResponse}...` }]);
// //             setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Here is a list of doctors near your location:' }]);
// //             // Call an API or fetch doctor data based on the user's location
// //             // Update the chat history with the list of doctors
// //             // setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Doctor 1' }]);
// //             // setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Doctor 2' }]);
// //             // ...
// //             setChatStage(16);
// //             break;
// //           case 15:
// //             // Handle user's response to how they are feeling today
// //             setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'That is great to hear! If you need any assistance, feel free to ask.' }]);
// //             setChatStage(16);
// //             break;
// //           default:
// //             // Handle other chat stages or invalid responses
// //             setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Sorry, I didn\'t understand that. Can you please rephrase your response?' }]);
// //             break;
// //         }
// //       };
    
// //       const toggleChat = () => {
// //         setIsOpen(!isOpen);
// //       };


    
// //       return (
// //         <div className="chatbot-container">
// //           <button className="chatbot-toggle" onClick={toggleChat}>
// //             {isOpen ? 'Close Chat' : 'Open Chat'}
// //           </button>
// //           {isOpen && (
// //             <div className="chatbot">
// //               <div className="chatbot-header">
// //                 <h3 className="chatbot-title">ChatBot</h3>
// //                 <button className="chatbot-close" onClick={toggleChat}>
// //                   Close
// //                 </button>
// //               </div>
// //               <div className="chatbot-body">
// //                 <div className="chatbot-history">
// //                   {chatHistory.map((message, index) => (
// //                     <div
// //                       key={index}
// //                       className={`chatbot-message ${message.bot ? 'chatbot-message-bot' : 'chatbot-message-user'}`}
// //                     >
// //                       {message.bot ? <span className="chatbot-message-bot-text">{message.bot}</span> : <span className="chatbot-message-user-text">{message.user}</span>}
// //                     </div>
// //                   ))}
// //                 </div>
// //                 <div className="chatbot-input">
// //                   <input
// //                     type="text"
// //                     value={userMessage}
// //                     onChange={(e) => setUserMessage(e.target.value)}
// //                     onKeyDown={handleKeyDown}
// //                     placeholder="Type your message..."
// //                   />
// //                   <button onClick={sendMessage}>Send</button>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       );
// //     };
    
// //     export default Chatbot;
    


















import React, { useState } from 'react';
import './ChatBotPopup.css';

const ChatBotPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [userResponse, setUserResponse] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [chatStage, setChatStage] = useState(0);

    const handleUserResponse = (event) => {
        setUserResponse(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setChatHistory(prevChatHistory => [...prevChatHistory, { user: userResponse }]);
        setUserResponse('');
        chatBotResponse();
    };

    const chatBotResponse = () => {
        switch (chatStage) {
            case 0:
              setName(userResponse);
              setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: `Hi ${userResponse}, please enter your mobile number.` }]);
              setChatStage(1);
              break;
            case 1:
              setMobileNumber(userResponse);
              setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: `Thank you, ${name}. Your mobile number is ${userResponse}.` }]);
              setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Ready to go through our daily routine?' }]);
              setChatStage(2);
              break;
            case 2:
              if (userResponse.toLowerCase() === 'yes' || userResponse.toLowerCase() === 'yep' || userResponse.toLowerCase() === 'ok') {
                setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Super.' }]);
                setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'How are you feeling today?' }]);
                setChatStage(15);
              } else if (userResponse.toLowerCase() === 'no') {
                setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: "Just text ready to move us forward whenever you're ready" }]);
                setChatStage(3);
              }
              break;

            case 3:
              setMobileNumber(userResponse);
              setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to check symptoms?' }]);
              setChatStage(4);
              break;
            case 4:
              if (userResponse.toLowerCase() === 'yes') {
                setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Enter your symptoms.' }]);
                setChatStage(5);
              } else if (userResponse.toLowerCase() === 'no') {
                setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
                setChatStage(9);
              }
              break;
            case 5:
              if (userResponse.toLowerCase() === 'fever') {
                setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing any back pain?' }]);
                setChatStage(6);
              } else if (userResponse.toLowerCase() === 'chest_pain' || userResponse.toLowerCase() === 'chest pain' || userResponse.toLowerCase() === 'chest') {
                setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing any stomach pain?' }]);
                setChatStage(11);
              }
              case 6:
                  if (userResponse.toLowerCase() === 'yes') {
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing any headache?' }]);
                    setChatStage(7);
                  } else if (userResponse.toLowerCase() === 'no') {
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing any headache?' }]);
                    setChatStage(7);
                  }
                  break;



                case 7:
                  if (userResponse.toLowerCase() === 'yes') {
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing red_sore_around_nose ?' }]);
                    setChatStage(8);
                  } else if (userResponse.toLowerCase() === 'no') {
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing red_sore_around_nose ?' }]);
                    setChatStage(8);
                  }
                  break;

                  case 8:
                    if (userResponse.toLowerCase() === 'yes') {
                      setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing muscle_weakness ?' }]);
                    } else if (userResponse.toLowerCase() === 'no') {
                      setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing loss_of_balance ?' }]);
                    }
                    setChatStage(12);
                    break;

                    case 12:
                  if (userResponse.toLowerCase() === 'yes') {
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'You may have  Arthritis or  Peptic ulcer diseae' }]);
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Based on your symptoms, it is recommended to consult a doctor. Do you want to search for a doctor?' }]);
                  } else if (userResponse.toLowerCase() === 'no') {
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'You may have  Arthritis or  Peptic ulcer diseae' }]);
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Take following measures : exercise, use hot and cold therapy, try acupuncture, massage' }]);
                  }
                  // setChatStage();
                  break;
                  
                case 11:
                  if (userResponse.toLowerCase() === 'yes') {
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Based on your symptoms, it is recommended to consult a doctor. Do you want to search for a doctor?' }]);
                    setChatStage(9);
                  } else if (userResponse.toLowerCase() === 'no') {
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
                    setChatStage(9);
                  }
                  break;
                case 9:
                  if (userResponse.toLowerCase() === 'yes') {
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Please click above on search doctor.' }]);
                    
                  } else if (userResponse.toLowerCase() === 'no') {
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to search for a hospital?' }]);
                    setChatStage(16);
                  }
                  break;
                  case 16:
                  if (userResponse.toLowerCase() === 'yes') {
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Please click above on search hospital.' }]);
                    
                  } else if (userResponse.toLowerCase() === 'no') {
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Thank for using chatbot..' }]);
                    // setChatStage(16);
                  }
                  break;
                // case 10:
                //   setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: `Searching for doctors near ${userResponse}...` }]);
                //   setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Click on search doctors to near your location:' }]);
                //   // Call an API or fetch doctor data based on the user's location
                //   // Update the chat history with the list of doctors
                //   // setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Doctor 1' }]);
                //   // setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Doctor 2' }]);
                //   // ...
                //   setChatStage(16);
                //   break;
                case 15:
                  if (userResponse.toLowerCase() === 'good') {
                  setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'That is great to hear! If you need any assistance, feel free to ask.' }]);
                   
                  } else if (userResponse.toLowerCase() === 'bad') {
                    setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'That is not good to hear! you can take a look on our web it may help.' }]);
                  }
                  // Handle user's response to how they are feeling today
                  // setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'That is great to hear! If you need any assistance, feel free to ask.' }]);
                  setChatStage(3);
                  break;
                default:
                  // Handle other chat stages or invalid responses
                  setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Sorry, I didn\'t understand that. Can you please rephrase your response?' }]);
                  break;
              }
    };

    const openChat = () => {
        setIsOpen(true);
        setChatHistory([{ bot: 'What is your name?' }]);
    };

    const closeChat = () => {
        setIsOpen(false);
        setChatHistory([]);
        setChatStage(0);
    };
    return (
        <div className="chat-bot-popup">
          {isOpen ? (
            <div className="chat-bot-window">
            <button onClick={closeChat} class="chatbot_close">X</button>
            <p class='chat_headtitle'>Bot : Hi.. This is Health-care Chatbot. bot is here for help..</p>
              <ul>
                {chatHistory.map((line, i) => (
                  <li key={i} className={line.user ? 'user-msg' : 'bot-msg'}>
                    <div className="msg-content">
                      {line.user ? `You: ${line.user}` : `Bot: ${line.bot}`}
                    </div>
                  </li>
                ))}
              </ul>
              <form onSubmit={handleSubmit} >
                <input type="text" class='chatbot_text' placeholder="Write a message..." value={userResponse} onChange={handleUserResponse} />
                <button type="submit" class="chatbot_send">Send</button>
              </form>
              </div>
          ) : (
            <button onClick={openChat} class='bot_main'><svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.2857 10.5714C28.2857 4.88616 21.9576 0.285714 14.1429 0.285714C6.32813 0.285714 0 4.88616 0 10.5714C0 13.8259 2.08929 16.7388 5.34375 18.6272C4.66071 20.2946 3.77679 21.0781 2.9933 21.9621C2.77232 22.2232 2.51116 22.4643 2.59152 22.846C2.65179 23.1875 2.93304 23.4286 3.23438 23.4286C3.25446 23.4286 3.27455 23.4286 3.29464 23.4286C3.89732 23.3482 4.47991 23.2478 5.02232 23.1071C7.05134 22.5848 8.93973 21.721 10.6071 20.5357C11.7321 20.7366 12.9174 20.8571 14.1429 20.8571C21.9576 20.8571 28.2857 16.2567 28.2857 10.5714ZM36 15.7143C36 12.3594 33.7902 9.38616 30.3951 7.51786C30.6964 8.50223 30.8571 9.52679 30.8571 10.5714C30.8571 14.1674 29.0089 17.4821 25.654 19.933C22.5402 22.183 18.4621 23.4286 14.1429 23.4286C13.5603 23.4286 12.9576 23.3884 12.375 23.3482C14.8862 24.9955 18.221 26 21.8571 26C23.0826 26 24.2679 25.8795 25.3929 25.6786C27.0603 26.8638 28.9487 27.7277 30.9777 28.25C31.5201 28.3906 32.1027 28.4911 32.7054 28.5714C33.0268 28.6116 33.3281 28.3504 33.4085 27.9888C33.4888 27.6071 33.2277 27.3661 33.0067 27.1049C32.2232 26.221 31.3393 25.4375 30.6563 23.7701C33.9107 21.8817 36 18.9888 36 15.7143Z" fill="#581B98"/>
            </svg></button>
          )}
        </div>
      );
};

export default ChatBotPopup;














































// import React, { useState, useEffect } from 'react';
// import './ChatBotPopup.css';
// import csv from 'csv-parser';
// import "./doc.css";



// import xlsx from 'xlsx';

// const ChatBotPopup = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [name, setName] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [userResponse, setUserResponse] = useState('');
//     const [chatHistory, setChatHistory] = useState([]);
//     const [chatStage, setChatStage] = useState(0);
//     const [doctors, setDoctors] = useState([]);
//     const fs = require('fs');
//     const csv = require('csv-parser');



//     const handleUserResponse = (event) => {
//         setUserResponse(event.target.value);
//     };


//     const readCSV = () => {
//         const doctor = xlsx.readFile('doctors.csv'); // replace with your actual file path
//         const sheet_name_list = doctor.SheetNames;
//         doctors = xlsx.utils.sheet_to_json(doctor.Sheets[sheet_name_list[0]]);
      
//         // const workbook1 = xlsx.readFile('hospital.csv'); // replace with your actual file path
//         // const sheet_name_list1 = workbook1.SheetNames;
//         // hospital = xlsx.utils.sheet_to_json(workbook1.Sheets[sheet_name_list1[0]]);
//         setDoctors(doctors)
//       };
      
//       const fetchDoctorsFromCSV = (location) => {
//         const results = [];
      
//         // Read the CSV file
//         fs.createReadStream('doctor.csv')
//           .pipe(csv())
//           .on('data', (data) => results.push(data))
//           .on('end', () => {
//             // Filter the doctors based on the user's location
//             const doctors = results.filter((doctor) => doctor.City === location);
      
//             // Update the chat history with the list of doctors
//             doctors.forEach((doctor) => {
//               const doctorInfo = `Name: ${doctor.Name}\nSpeciality: ${doctor.Speciality}\nCity: ${doctor.City}\nState: ${doctor.State}\nMobile: ${doctor.Mobile}`;
//               setChatHistory((prevChatHistory) => [
//                 ...prevChatHistory,
//                 { bot: doctorInfo }
//               ]);
//             });
//           });
//       };
      

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setChatHistory(prevChatHistory => [...prevChatHistory, { user: userResponse }]);
//         setUserResponse('');
//         chatBotResponse();
//     };

//     const chatBotResponse = () => {
//         switch (chatStage) {
//             case 0:
//               setName(userResponse);
//               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: `Hi ${userResponse}, please enter your mobile number.` }]);
//               setChatStage(1);
//               break;
//             case 1:
//               setMobileNumber(userResponse);
//               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: `Thank you, ${name}. Your mobile number is ${userResponse}.` }]);
//               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Ready to go through our daily routine?' }]);
//               setChatStage(2);
//               break;
//             case 2:
//               if (userResponse.toLowerCase() === 'yes' || userResponse.toLowerCase() === 'yep' || userResponse.toLowerCase() === 'ok') {
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Super.' }]);
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'How are you feeling today?' }]);
//                 setChatStage(15);
//               } else if (userResponse.toLowerCase() === 'no') {
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: "Just text ready to move us forward whenever you're ready" }]);
//                 setChatStage(3);
//               }
//               break;
//             case 3:
//               setMobileNumber(userResponse);
//               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to check symptoms?' }]);
//               setChatStage(4);
//               break;
//             case 4:
//               if (userResponse.toLowerCase() === 'yes') {
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Enter your symptoms.' }]);
//                 setChatStage(5);
//               } else if (userResponse.toLowerCase() === 'no') {
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
//                 setChatStage(9);
//               }
//               break;
//             case 5:
//               if (userResponse.toLowerCase() === 'fever') {
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing any back pain?' }]);
//                 setChatStage(6);
//               } else if (userResponse.toLowerCase() === 'chest_pain' || userResponse.toLowerCase() === 'chest pain' || userResponse.toLowerCase() === 'chest') {
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing any stomach pain?' }]);
//                 setChatStage(11);
//               }
//               case 6:
//                   if (userResponse.toLowerCase() === 'yes') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Based on your symptoms, it is recommended to consult a doctor. Do you want to search for a doctor?' }]);
//                     setChatStage(9);
//                   } else if (userResponse.toLowerCase() === 'no') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing any headache?' }]);
//                     setChatStage(7);
//                   }
//                   break;
//                 case 7:
//                   if (userResponse.toLowerCase() === 'yes') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Based on your symptoms, it is recommended to consult a doctor. Do you want to search for a doctor?' }]);
//                     setChatStage(9);
//                   } else if (userResponse.toLowerCase() === 'no') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
//                     setChatStage(9);
//                   }
//                   break;
//                 case 11:
//                   if (userResponse.toLowerCase() === 'yes') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Based on your symptoms, it is recommended to consult a doctor. Do you want to search for a doctor?' }]);
//                     setChatStage(9);
//                   } else if (userResponse.toLowerCase() === 'no') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
//                     setChatStage(9);
//                   }
//                   break;
//                 case 9:
//                   if (userResponse.toLowerCase() === 'yes') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Please enter your location.' }]);
//                     setChatStage(10);
//                   } else if (userResponse.toLowerCase() === 'no') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Okay. Feel free to ask any other questions.' }]);
//                     setChatStage(16);
//                   }
//                   break;
//                   case 10:
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: `Searching for doctors near ${userResponse}...` }]);
//                     setChatStage(16);
                  
//                     // Call the readCSV function to read the CSV file
//                     readCSV();
                  
//                     fetchDoctorsFromCSV(userResponse);
                  
//                     setChatStage(16);
//                     break;
                  
//                 case 15:
//                   // Handle user's response to how they are feeling today
//                   setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'That is great to hear! If you need any assistance, feel free to ask.' }]);
//                   setChatStage(16);
//                   break;
//                 default:
//                   // Handle other chat stages or invalid responses
//                   setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Sorry, I didn\'t understand that. Can you please rephrase your response?' }]);
//                   break;
//               }
//     };

//     const openChat = () => {
//         setIsOpen(true);
//         setChatHistory([{ bot: 'What is your name?' }]);
//     };

//     const closeChat = () => {
//         setIsOpen(false);
//         setChatHistory([]);
//         setChatStage(0);
//     };
//     return (
//         <div className="chat-bot-popup">
//           {isOpen ? (
//             <div className="chat-bot-window">
//             <button onClick={closeChat} class="chatbot_close">X</button>
//             <p class='chat_headtitle'>Bot : Hi.. This is Health-care Chatbot. bot is here for help..</p>
//               <ul>
//                 {chatHistory.map((line, i) => (
//                   <li key={i} className={line.user ? 'user-msg' : 'bot-msg'}>
//                     <div className="msg-content">
//                       {line.user ? `You: ${line.user}` : `Bot: ${line.bot}`}
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//               <form onSubmit={handleSubmit} >
//                 <input type="text" class='chatbot_text' placeholder="Write a message..." value={userResponse} onChange={handleUserResponse} />
//                 <button type="submit" class="chatbot_send">Send</button>
//               </form>
//               </div>
//           ) : (
//             <button onClick={openChat} class='bot_main'><svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M28.2857 10.5714C28.2857 4.88616 21.9576 0.285714 14.1429 0.285714C6.32813 0.285714 0 4.88616 0 10.5714C0 13.8259 2.08929 16.7388 5.34375 18.6272C4.66071 20.2946 3.77679 21.0781 2.9933 21.9621C2.77232 22.2232 2.51116 22.4643 2.59152 22.846C2.65179 23.1875 2.93304 23.4286 3.23438 23.4286C3.25446 23.4286 3.27455 23.4286 3.29464 23.4286C3.89732 23.3482 4.47991 23.2478 5.02232 23.1071C7.05134 22.5848 8.93973 21.721 10.6071 20.5357C11.7321 20.7366 12.9174 20.8571 14.1429 20.8571C21.9576 20.8571 28.2857 16.2567 28.2857 10.5714ZM36 15.7143C36 12.3594 33.7902 9.38616 30.3951 7.51786C30.6964 8.50223 30.8571 9.52679 30.8571 10.5714C30.8571 14.1674 29.0089 17.4821 25.654 19.933C22.5402 22.183 18.4621 23.4286 14.1429 23.4286C13.5603 23.4286 12.9576 23.3884 12.375 23.3482C14.8862 24.9955 18.221 26 21.8571 26C23.0826 26 24.2679 25.8795 25.3929 25.6786C27.0603 26.8638 28.9487 27.7277 30.9777 28.25C31.5201 28.3906 32.1027 28.4911 32.7054 28.5714C33.0268 28.6116 33.3281 28.3504 33.4085 27.9888C33.4888 27.6071 33.2277 27.3661 33.0067 27.1049C32.2232 26.221 31.3393 25.4375 30.6563 23.7701C33.9107 21.8817 36 18.9888 36 15.7143Z" fill="#581B98"/>
//             </svg></button>
//           )}
//         </div>
//       );
// };

// export default ChatBotPopup;



// import React, { useState } from 'react';
// import './ChatBotPopup.css';

// const ChatBotPopup = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [name, setName] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [userResponse, setUserResponse] = useState('');
//     const [chatHistory, setChatHistory] = useState([]);
//     const [chatStage, setChatStage] = useState(0);

//     const handleUserResponse = (event) => {
//         setUserResponse(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setChatHistory(prevChatHistory => [...prevChatHistory, { user: userResponse }]);
//         setUserResponse('');
//         chatBotResponse();
//     };

//     const chatBotResponse = () => {
//         switch (chatStage) {
//             case 0:
//               setName(userResponse);
//               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: `Hi ${userResponse}, please enter your mobile number.` }]);
//               setChatStage(1);
//               break;
//             case 1:
//               setMobileNumber(userResponse);
//               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: `Thank you, ${name}. Your mobile number is ${userResponse}.` }]);
//               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Ready to go through our daily routine?' }]);
//               setChatStage(2);
//               break;
//             case 2:
//               if (userResponse.toLowerCase() === 'yes' || userResponse.toLowerCase() === 'yep' || userResponse.toLowerCase() === 'ok') {
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Super.' }]);
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'How are you feeling today?' }]);
//                 setChatStage(15);
//               } else if (userResponse.toLowerCase() === 'no') {
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: "Just text ready to move us forward whenever you're ready" }]);
//                 setChatStage(3);
//               }
//               break;
//             case 3:
//               setMobileNumber(userResponse);
//               setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to check symptoms?' }]);
//               setChatStage(4);
//               break;
//             case 4:
//               if (userResponse.toLowerCase() === 'yes') {
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Enter your symptoms.' }]);
//                 setChatStage(5);
//               } else if (userResponse.toLowerCase() === 'no') {
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
//                 setChatStage(9);
//               }
//               break;
//             case 5:
//               if (userResponse.toLowerCase() === 'fever') {
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing any back pain?' }]);
//                 setChatStage(6);
//               } else if (userResponse.toLowerCase() === 'chest_pain' || userResponse.toLowerCase() === 'chest pain' || userResponse.toLowerCase() === 'chest') {
//                 setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing any stomach pain?' }]);
//                 setChatStage(11);
//               }
//               case 6:
//                   if (userResponse.toLowerCase() === 'yes') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Based on your symptoms, it is recommended to consult a doctor. Do you want to search for a doctor?' }]);
//                     setChatStage(9);
//                   } else if (userResponse.toLowerCase() === 'no') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Are you experiencing any headache?' }]);
//                     setChatStage(7);
//                   }
//                   break;
//                 case 7:
//                   if (userResponse.toLowerCase() === 'yes') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Based on your symptoms, it is recommended to consult a doctor. Do you want to search for a doctor?' }]);
//                     setChatStage(9);
//                   } else if (userResponse.toLowerCase() === 'no') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
//                     setChatStage(9);
//                   }
//                   break;
//                 case 11:
//                   if (userResponse.toLowerCase() === 'yes') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Based on your symptoms, it is recommended to consult a doctor. Do you want to search for a doctor?' }]);
//                     setChatStage(9);
//                   } else if (userResponse.toLowerCase() === 'no') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to search for a doctor?' }]);
//                     setChatStage(9);
//                   }
//                   break;
//                 case 9:
//                   if (userResponse.toLowerCase() === 'yes') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Please click above on search doctor.' }]);
                    
//                   } else if (userResponse.toLowerCase() === 'no') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Do you want to search for a hospital?' }]);
//                     setChatStage(16);
//                   }
//                   break;
//                   case 16:
//                   if (userResponse.toLowerCase() === 'yes') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Please click above on search hospital.' }]);
                    
//                   } else if (userResponse.toLowerCase() === 'no') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Thank for using chatbot..' }]);
//                     // setChatStage(16);
//                   }
//                   break;
//                 // case 10:
//                 //   setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: `Searching for doctors near ${userResponse}...` }]);
//                 //   setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Click on search doctors to near your location:' }]);
//                 //   // Call an API or fetch doctor data based on the user's location
//                 //   // Update the chat history with the list of doctors
//                 //   // setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Doctor 1' }]);
//                 //   // setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Doctor 2' }]);
//                 //   // ...
//                 //   setChatStage(16);
//                 //   break;
//                 case 15:
//                   if (userResponse.toLowerCase() === 'good') {
//                   setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'That is great to hear! If you need any assistance, feel free to ask.' }]);
                   
//                   } else if (userResponse.toLowerCase() === 'bad') {
//                     setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'That is not good to hear! you can take a look on our web it may help.' }]);
//                   }
//                   // Handle user's response to how they are feeling today
//                   // setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'That is great to hear! If you need any assistance, feel free to ask.' }]);
//                   setChatStage(3);
//                   break;
//                 default:
//                   // Handle other chat stages or invalid responses
//                   setChatHistory((prevChatHistory) => [...prevChatHistory, { bot: 'Sorry, I didn\'t understand that. Can you please rephrase your response?' }]);
//                   break;
//               }
//     };

//     const openChat = () => {
//         setIsOpen(true);
//         setChatHistory([{ bot: 'What is your name?' }]);
//     };

//     const closeChat = () => {
//         setIsOpen(false);
//         setChatHistory([]);
//         setChatStage(0);
//     };
//     return (
//         <div className="chat-bot-popup">
//           {isOpen ? (
//             <div className="chat-bot-window">
//             <button onClick={closeChat} class="chatbot_close">X</button>
//             <p class='chat_headtitle'>Bot : Hi.. This is Health-care Chatbot. bot is here for help..</p>
//               <ul>
//                 {chatHistory.map((line, i) => (
//                   <li key={i} className={line.user ? 'user-msg' : 'bot-msg'}>
//                     <div className="msg-content">
//                       {line.user ? `You: ${line.user}` : `Bot: ${line.bot}`}
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//               <form onSubmit={handleSubmit} >
//                 <input type="text" class='chatbot_text' placeholder="Write a message..." value={userResponse} onChange={handleUserResponse} />
//                 <button type="submit" class="chatbot_send">Send</button>
//               </form>
//               </div>
//           ) : (
//             <button onClick={openChat} class='bot_main'><svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M28.2857 10.5714C28.2857 4.88616 21.9576 0.285714 14.1429 0.285714C6.32813 0.285714 0 4.88616 0 10.5714C0 13.8259 2.08929 16.7388 5.34375 18.6272C4.66071 20.2946 3.77679 21.0781 2.9933 21.9621C2.77232 22.2232 2.51116 22.4643 2.59152 22.846C2.65179 23.1875 2.93304 23.4286 3.23438 23.4286C3.25446 23.4286 3.27455 23.4286 3.29464 23.4286C3.89732 23.3482 4.47991 23.2478 5.02232 23.1071C7.05134 22.5848 8.93973 21.721 10.6071 20.5357C11.7321 20.7366 12.9174 20.8571 14.1429 20.8571C21.9576 20.8571 28.2857 16.2567 28.2857 10.5714ZM36 15.7143C36 12.3594 33.7902 9.38616 30.3951 7.51786C30.6964 8.50223 30.8571 9.52679 30.8571 10.5714C30.8571 14.1674 29.0089 17.4821 25.654 19.933C22.5402 22.183 18.4621 23.4286 14.1429 23.4286C13.5603 23.4286 12.9576 23.3884 12.375 23.3482C14.8862 24.9955 18.221 26 21.8571 26C23.0826 26 24.2679 25.8795 25.3929 25.6786C27.0603 26.8638 28.9487 27.7277 30.9777 28.25C31.5201 28.3906 32.1027 28.4911 32.7054 28.5714C33.0268 28.6116 33.3281 28.3504 33.4085 27.9888C33.4888 27.6071 33.2277 27.3661 33.0067 27.1049C32.2232 26.221 31.3393 25.4375 30.6563 23.7701C33.9107 21.8817 36 18.9888 36 15.7143Z" fill="#581B98"/>
//             </svg></button>
//           )}
//         </div>
//       );
// };

// export default ChatBotPopup;
