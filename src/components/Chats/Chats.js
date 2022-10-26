import React from "react"
import "./Chats.css"
import pic1 from "../../resources/images/pic1.png"
import pic2 from "../../resources/images/pic2.png"
import pic3 from "../../resources/images/pic3.png"
import pic4 from "../../resources/images/pic4.png"
import pic5 from "../../resources/images/pic5.png"
import pic6 from "../../resources/images/pic6.png"
import pic7 from "../../resources/images/pic7.png"
import {imagesJSON} from "../../resources/images/_imagesJSON"

export function Chats() {

const profilePics = imagesJSON.filter((i)=>i.id===1).map((x)=> <div className="profilePic">{x.img}</div>)

console.log(profilePics)
  return (
    <main className="chatsMain">
        {/* <div className="profilePic">{pic1}</div> */}
        {profilePics}
        <div>Chats</div>
        <div>Chats</div>
        <div>Chats</div>
        
         
        </main>
  )
}
