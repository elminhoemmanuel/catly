import React from 'react'

const Left = ({ mood, handleMood }) => {



    return (
        <div className="base__left">
            <div className="base__left__box">
                <div>
                    <img className="base__left__box__img" src="/images/cat-lg.jpg" alt="cat image" />
                </div>

                <h2 className="base__left__box__text">What is your cat’s current mood?</h2>

                <div className="base__left__box__moods">
                    <button onClick={()=>handleMood("sad")}
                    className={`base__left__box__moods__each${mood==="sad"?`--sad`:``} base__left__box__moods__each__sad`} >
                        <span>😖</span>
                    </button>
                    <button onClick={()=>handleMood("indiff")}
                    className={`base__left__box__moods__each${mood==="indiff"?`--indiff`:``} base__left__box__moods__each__indiff`}>
                        <span>😐</span>
                    </button>
                    <button onClick={()=>handleMood("excited")}
                    className={`base__left__box__moods__each${mood==="excited"?`--excited`:``} base__left__box__moods__each__excited`}>
                        <span>😃</span>
                    </button>
                </div>

                <div className="base__left__box__cta">
                    <button className={`base__left__box__cta__save${mood===""?`--disabled`:``}`}>
                        Save mood
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Left
