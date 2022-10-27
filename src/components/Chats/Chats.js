import React, { useState } from "react";
import { imagesJSON } from "../../resources/images/_imagesJSON";
import "./Chats.css";

export function Chats({ handleClick }) {
  const [isNewMessage] = useState(true);

  const profilePics = imagesJSON.map((x) => (
    <div
      className={
        isNewMessage ? "chatHeadContainer unreadChat" : "chatHeadContainer"
      }
      onClick={handleClick}
    >
      <div>
        <img src={x.img} alt="x.alt" className="profilePic" />
      </div>
      <div>
        
        
        
        
        <p hidden>
          {x.key}
          {x.isRead}
          </p>
        



        {x.joined && (
          <p>
            <span className="boldText">{x.name}</span> has joined your group{" "}
            <span className="boldText blueText">Chess Club</span>{" "}
            {isNewMessage && <span className="newMessage"></span>}
          </p>
        )}
        {x.left && (
          <p>
            <span className="boldText">{x.name}</span> left the group{" "}
            <span className="boldText blueText">Chess Club</span>{" "}
            {isNewMessage && <span className="newMessage"></span>}
          </p>
        )}
        {x.react && (
          <p>
            <span className="boldText">{x.name}</span> reacted to your recent
            post! {isNewMessage && <span className="newMessage"></span>}
          </p>
        )}
        {x.follow && (
          <p>
            <span className="boldText">{x.name}</span> followed you{" "}
            {isNewMessage && <span className="newMessage"></span>}
          </p>
        )}
        {x.comment && (
          <p>
            <span className="boldText">{x.name}</span> commented on your picture{" "}
            {isNewMessage && <span className="newMessage"></span>}
          </p>
        )}
        {x.msg && (
          <p>
            <span className="boldText">{x.name}</span> sent you a private
            meessage
            {isNewMessage && <span className="newMessage"></span>}
          </p>
        )}

        <p className="chatHeadTime">1m ago</p>
        {x.msg && <div className="msgText">{x.msg}</div>}
      </div>
    </div>
  ));

  return <main className="chatsMain">{profilePics}</main>;
}
