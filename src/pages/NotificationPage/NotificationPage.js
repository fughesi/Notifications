import React, { useState } from "react";
import "./NotificationPage.css";
import { Chats } from "../../components/Chats/Chats";
import { imagesJSON } from "../../resources/images/_imagesJSON";

export function Notifications() {
  const [isRead, setIsRead] = useState(
    imagesJSON.map((i, index) => {
      return { index: i.key, isRead: i.isRead };
    })
  );

  function readTheMsg(e) {
    // const value = e.target.value;

    console.log(e);
    console.log("clicked");
    // setIsRead({
    //   ...isRead,
    //   [key]: !value,
    // });
  }

  function markAllAsRead() {
    setIsRead(
      imagesJSON.map((i, index) => {
        return { index: i.key, isRead: true };
      })
    );
  }

  function checkIfRead(x) {
    return x.isRead === false;
  }

  return (
    <main className="notificationPageContainer">
      <section className="headerSection">
        <div className="unreadTexts">
          <h3>Notifications</h3>
          {isRead.some(checkIfRead) && <div>{isRead.length}</div>}
        </div>
        <p onClick={markAllAsRead}>Mark all as read</p>
      </section>

      <section className="chatsSection">
        <Chats handleClick={(e) => readTheMsg(e)} />
      </section>
    </main>
  );
}
