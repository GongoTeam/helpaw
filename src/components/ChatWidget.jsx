import React, { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Привіт! Як можемо допомогти?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Дякуємо за повідомлення! Ми відповімо скоро." },
      ]);
    }, 1000);

    setInput("");
  };

  const styles = {
    container: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: 1000,
    },
    button: {
      backgroundColor: "#6ba586",
      color: "#fff",
      border: "none",
      borderRadius: "20px",
      padding: "10px 20px",
      cursor: "pointer",
      fontWeight: "bold",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    },
    chatBox: {
      position: "absolute",
      bottom: "60px",
      right: "0",
      width: "300px",
      height: "400px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      display: isOpen ? "flex" : "none",
      flexDirection: "column",
      overflow: "hidden",
    },
    chatHeader: {
      backgroundColor: "#6ba586",
      padding: "10px",
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center",
    },
    chatContent: {
      padding: "10px",
      flex: 1,
      overflowY: "auto",
      fontSize: "14px",
    },
    chatInput: {
      borderTop: "1px solid #ddd",
      padding: "10px",
      display: "flex",
      gap: "5px",
    },
    input: {
      flex: 1,
      padding: "8px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    sendBtn: {
      backgroundColor: "#6ba586",
      border: "none",
      color: "#fff",
      borderRadius: "5px",
      padding: "8px 12px",
      cursor: "pointer",
    },
    message: {
      marginBottom: "8px",
    },
    user: {
      textAlign: "right",
      color: "#333",
    },
    bot: {
      textAlign: "left",
      color: "#6ba586",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        <div style={styles.chatHeader}>Чат з нами</div>
        <div style={styles.chatContent}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                ...styles.message,
                ...(msg.from === "user" ? styles.user : styles.bot),
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <form style={styles.chatInput} onSubmit={handleSend}>
          <input
            type="text"
            value={input}
            placeholder="Напиши повідомлення..."
            style={styles.input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" style={styles.sendBtn}>
            Надіслати
          </button>
        </form>
      </div>
      <button style={styles.button} onClick={toggleChat}>
        {isOpen ? "Закрити" : "💬 Підтримка"}
      </button>
    </div>
  );
};

export default ChatWidget;
