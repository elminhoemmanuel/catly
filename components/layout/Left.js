import React from 'react'
import { moodTypes } from '../../constants/moods'

const Left = ({ mood, handleMood, saveMood }) => {

    return (
        <div className="base__left">
            <div className="base__left__box">
                <div>
                    <img className="base__left__box__img" src="/images/cat-lg.jpg" alt="cat image" />
                </div>

                <h2 className="base__left__box__text">What is your cat’s current mood?</h2>

                <div className="base__left__box__moods">
                    
                    {/* refactored mood types to be scalable , more moods can be added by adding them to the moodTypes object */}
                    {
                        moodTypes.map(item => (
                            <button key={item.id} onClick={() => handleMood(item)}
                                className={`base__left__box__moods__each${mood.name === item.name ? `--${item.name}` : ``} base__left__box__moods__each__${item.name}`} >
                                <span>{item.emoji}</span>
                            </button>
                        ))
                    }

                </div>

                <div className="base__left__box__cta">
                    <button onClick={() => { saveMood(mood) }}
                        className={`base__left__box__cta__save${mood.name === "" ? `--disabled` : ``}`}>
                        Save mood
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Left
