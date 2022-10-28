import React, { useState } from "react";
import { Chats } from "../../components/Chats/Chats";
import { imagesJSON } from "../../resources/images/_imagesJSON";
import "./NotificationPage.css";

export function Notifications() {
  const [isRead, setIsRead] = useState(
    imagesJSON.map((i, index) => {
      return { index: i.key, isRead: i.isRead };
    })
  );

  const readTheMsg = (e) => {
    const value = e.target.value;
    console.log(e.target);
    console.log("clicked");
    // setIsRead({
      // ...isRead,
      // isRead: this.isRead.value,
    // }, this);
  };
  console.log(isRead);

  const markAllAsRead = () => {
    setIsRead(
      imagesJSON.map((i) => {
        return { index: i.key, isRead: true };
      })
    );
  };

  const checkIfRead = (x) => x.some((i) => i.isRead === false);

  const unreadLength = (x) => x.filter((i) => i.isRead === false).length;

  return (
    <main className="notificationPageContainer">
      <section className="headerSection">
        <div className="unreadTexts">
          <h3>Notifications</h3>
          {checkIfRead(isRead) && <div>{unreadLength(isRead)}</div>}
        </div>
        <p onClick={markAllAsRead}>Mark all as read</p>
      </section>

      <section className="chatsSection">
        <Chats handleClick={(e) => readTheMsg(e)} />
      </section>
    </main>
  );
}
