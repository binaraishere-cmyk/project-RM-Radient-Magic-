"use client"

import { useState } from "react";
import Image from "next/image";

function GlassFollowBar() {

  let [likeCount, setlikeCount] = useState(0);
  let [liked, setliked] = useState(false);
  let [likebutton, setlikebutton] = useState(false);
  
  let [subcount, setsubcount] = useState(0);
  let [subbutton, setsubbutton] = useState("follow");
  let [subscribed, setsubscribed] = useState(false);
 
  let [unlikebutton, setunlikebutton] = useState(false);
  let [unliked, setunliked] = useState(false);
  let [unlikecount, setunlikecount] = useState(0);

  function subscribe() {
    if (subscribed === false) {
      setsubcount(subcount + 1);
      setsubscribed(true);
      setsubbutton("followed");
    } else {
      setsubcount(subcount - 1);
      setsubscribed(false);
      setsubbutton("follow");
    }
  }

  function like() {
    if (!liked) {
      setliked(true);
      setlikebutton(true);
      setlikeCount(likeCount + 1);
      
      if (unliked) {
        setunliked(false);
        setunlikebutton(false);
        setunlikecount(unlikecount - 1);
      }
    } else {
      setliked(false);
      setlikebutton(false);
      setlikeCount(likeCount - 1);
    }
  }

  function unlike() {
    if (!unliked) {
      setunliked(true);
      setunlikebutton(true);
      setunlikecount(unlikecount + 1);

      if (liked) {
        setliked(false);
        setlikebutton(false);
        setlikeCount(likeCount - 1);
      }
    } else {
      setunliked(false);
      setunlikebutton(false);
      setunlikecount(unlikecount - 1);
    }

  }

  return (
    <div>

  <div className="flex flex-row items-center justify-between">
            <button
              className={`p-3 font-bold rounded-full items-center shadow-sm cursor-pointer shadow-gray-600 transition-all duration-300 hover:scale-125 flex m-2 ml-5 ${subscribed
                  ? "bg-white/5 text-white font-mono"
                  : "bg-blue-600 text-white font-mono hover:bg-blue-700"
                }`}
              onClick={subscribe}
            >
              {subbutton} <span className="ml-3 opacity-60 text-sm">{subcount}</span>
            </button>

            <div className="flex">
              <button
                className="bg-white/3 p-3 font-bold rounded-full items-center cursor-pointer shadow-sm shadow-gray-600 transition-all duration-300 hover:text-blue-400 hover:scale-125 flex m-2"
                onClick={like}
              >
                <Image
                  src={likebutton ? "/thumb-up.png" : "/thumb-up(1).png"}
                  alt="Like state"
                  width={40}
                  height={40}
                  className="items-center pr-4 "
                />
                <span className="ml-2">{likeCount}</span>
              </button>

              <button
                className="bg-white/3 p-3 font-bold rounded-full items-center shadow-sm shadow-gray-600 transition-all duration-300 hover:text-blue-400 cursor-pointer hover:scale-125 flex m-2"
                onClick={unlike}
              >
                <Image
                  src={unlikebutton ? "/unlike.png" : "/unlike(1).png"}
                  alt="Dislike state"
                  width={40}
                  height={40}
                  className="items-center pr-4 "
                />
                <span className="ml-2">{unlikecount}</span>
              </button>
            </div>
          </div>

    </div>
  )
}

export default GlassFollowBar