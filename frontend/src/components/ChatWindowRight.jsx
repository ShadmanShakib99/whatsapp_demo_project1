                 
        // ডাটাবেস সংযোগ শুরু
        // Database Connection start
        import React, { useState } from "react";
        import { format } from "date-fns";
        import { ToastContainer, toast } from "react-toastify";
        import "react-toastify/dist/ReactToastify.css";
        import axios from "axios"; // axios import
        
        const ChatWindowRight = () => {
          const [messages, setMessages] = useState([]);
          const [theme, setTheme] = useState("light");
        
          // কাস্টম রেসপন্স মেথড
          // Custom Response Method
          const getCustomResponse = (messageText) => {
            const responses = {
              "Hi": "Hello! How can I help you today?",
              "Today we will be introduced.": "Of course!",
              "How are you?": "I'm Fine, How about you?",
              "I am Fine": "It's great to hear that you're doing well.",
              "What is your name": "My Name is Jon!. What is your name?",
              "My Name Is Mister": "Good",
              "What do you do?": "I am working as a software engineer in California, USA. What do you do? ",
              "I am learning on the job in web development and software engineering.": "Good",
              "Bye": "Goodbye! Have a great day!",
            };
        
            return responses[messageText] || "Sorry, I didn't understand that.";
          };
        
          // থিম পরিবর্তন করার ফাংশন
          //Theme Change Functon
          const handleThemeChange = (event) => {
            const selectedTheme = event.target.value;
            setTheme(selectedTheme);
            document.documentElement.setAttribute("data-theme", selectedTheme);
          };
        
          // মেসেজ সেন্ড করার ফাংশন
          // Message Send Function
          const handleSendMessage = () => {
            const inputElement = document.getElementById("messageInput");
            const messageText = inputElement.value;
        
            if (messageText.trim()) {
              const currentTime = format(new Date(), "HH:mm");
        
              // ইউজারের মেসেজ অ্যাড করা
              //Adding a user message
              setMessages((prevMessages) => [
                ...prevMessages,
                { text: messageText, sender: "you", time: currentTime },
              ]);
        
              // ইউজারের মেসেজ পাঠানোর পর নোটিফিকেশন দেখানো
              //Show notifications after sending a user's message
              toast.success("Message Sent!", {
                position: "top-right",
                autoClose: 3000,
              });
        
              // মেসেজ ব্যাকএন্ডে সেভ করার জন্য API কল
              //API call to save messages to backend
              axios
                .post("http://localhost:5000/messages", {
                  message: messageText,
                  sender: "you",
                })
                .then((response) => {
                  console.log("Message saved successfully", response);
                })
                .catch((error) => {
                  console.error("Error saving message:", error);
                });
        
              // সিস্টেম রেসপন্স ডিলেই সহ অ্যাড করা
              //Added with system response delay
              setTimeout(() => {
                const systemResponse = getCustomResponse(messageText);
                setMessages((prevMessages) => [
                  ...prevMessages,
                  { text: systemResponse, sender: "opponent", time: currentTime },
                ]);
        
                // সিস্টেম রেসপন্স পাঠানোর পর নোটিফিকেশন দেখানো
                //Show notification after sending system response
                toast.info("New message from opponent!", {
                  position: "top-right",
                  autoClose: 3000,
                });
              }, 1000); //1 second delay
              inputElement.value = ""; // Blank input
            }
          };
        
          return (
            <div className="chat-windowRight">
              {/* Header section */}
              <div className="chat-header">
                <img
                  src="images/oporentUser.png"
                  alt="png"
                  className="chat-profile-image"
                />
                <h3>Jon </h3>
        
                {/* Theme selector */}
                <select value={theme} onChange={handleThemeChange}>
                  <option value="light"> Light Theme</option>
                  <option value="dark">Dark Theme</option>
                  <option value="sunset">Sunset Theme</option>
                  <option value="wallpaper">Wallpaper Theme</option>
                  <option value="photo">Photo Theme</option>
                </select>
              </div>
        
              {/* Message display */}
              <div className="messages">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`message ${msg.sender === "you" ? "sender" : "receiver"}`}
                  >
                    <p>{msg.text}</p>
                    <small>{msg.time}</small>
                  </div>
                ))}
              </div>
        
              {/* Input and send buttons */}
              <div className="chat-input-container">
                <input
                  type="text"
                  id="messageInput"
                  className="chat-input"
                  placeholder="Type a message..."
                />
                <button className="send-button" onClick={handleSendMessage}>
                  Send
                </button>
              </div>
        
              {/* Toast Notification */}
              <ToastContainer />
            </div>
          );
        };
        
        export default ChatWindowRight;
        
        // ডাটাবেস সংযোগ শেষ
        //database connection end

