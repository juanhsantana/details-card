import React from "react"
import "./CardDetails.css"

import Dots from "../../assets/dots.svg"
import { ButtonJoined } from "../ButtonJoined/ButtonJoined"
import { ButtonCreatePost } from './../ButtonCreatePost/ButtonCreatePost';

export function CardDetails() {
  return (
    <div className="card_container">
      <div className="card_content">
        <div className="card_content-heading">
          <span>About the community</span>
          <img src={Dots} width={25} alt="Dots" />
        </div>

        <div className="card_main-description">
          <h2>Blender Renders</h2>
          <p>
            A place where beginner Blender artists can post their creations and
            get feedback on.
          </p>
        </div>

        <div className="card_acount">
          <div className="card_acount-members">
            <span>13.5K</span>
            <p>Members</p>
          </div>

          <div  className="card_acount-members-online">
            <span>47</span>
            <p>Online</p>
          </div>
        </div>

        <div className="card_buttons">
          <ButtonJoined title="Joined" />
          <ButtonCreatePost title="Create Post" />
        </div>

        <p className="created_at">Created Jan. 23, 2023</p>
      </div>
    </div>
  )
}
