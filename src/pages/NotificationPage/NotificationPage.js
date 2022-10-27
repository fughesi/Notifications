import React, {useState} from "react"
import "./NotificationPage.css";
import { Chats } from "../../components/Chats/Chats";

export function Notifications() {
  
  
  const [isRead, setIsRead] = useState({})
  
  function readTheMsg () {
    setIsRead({
      ...isRead,
      
    })
  }


  return (
    <main className="notificationPageContainer">
      
      <section className="headerSection">
        <div className="unreadTexts">
          <h3>Notifications</h3>
          <div>3</div>
        </div>
        <p >Mark all as read</p>
      </section>

      <section className="chatsSection">
        <Chats />
      </section>
    </main>
  );
}
