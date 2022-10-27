import React, { useState } from "react";
import { imagesJSON } from "../../resources/images/_imagesJSON";
import "./Chats.css";

export function Chats() {
  const [isNewMessage] = useState(true);

  const profilePics = imagesJSON
    // .filter((i) => i.id === 1)
    .map((x) => (
      <div
        className={
          isNewMessage ? "chatHeadContainer unreadChat" : "chatHeadContainer"
        }
      >
        <div>
          <img src={x.img} alt="x.alt" className="profilePic" />
        </div>
        <div>
          {x.joined && (
            <p>
              <span className="boldText">{x.name}</span> has joined your group{" "}
              <span className="boldText blueText">Chess Club</span>
            </p>
          )}
          {x.react && (
            <p>
              <span className="boldText">{x.name}</span> reacted to your recent
              post!
            </p>
          )}
          {x.msg && <p>{x.msg}</p>}
          {isNewMessage && <div className="newMessage"></div>}
          <p className="chatHeadTime">1m ago</p>
        </div>
      </div>
    ));

  return <main className="chatsMain">{profilePics}</main>;
}
