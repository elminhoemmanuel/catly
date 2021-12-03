import React,{useEffect} from 'react'
import moment from "moment"

const Right = ({ moods }) => {

    

    return (
        <div className="base__right">
            <div className="base__right__header">
                <div className="base__right__header__box">
                    <div className="">
                        <img className="base__right__header__box__img" src="/images/cat-sm.jpg" alt="cat image" />
                    </div>
                    <div className="">
                        <span className="base__right__header__box__text">Cat mood tracker™</span>
                    </div>
                </div>

                <h2 className="base__right__header__subtext">MOOD HISTORY</h2>
            </div>

            <div className="base__right__states">
                {
                    moods.length === 0 ?
                        <div className="base__right__states__empty">
                            <div>
                                <img className="base__right__states__empty__img" src="/images/cat-gray.jpg" alt="cat image" />
                            </div>

                            <p className="base__right__states__empty__text">No mood history to show yet</p>
                        </div>
                        :
                        <div className="base__right__states__stateful">
                            {
                                moods.map(item => (
                                    <div key={moods.indexOf(item)}
                                        className={`base__right__states__stateful__each base__right__states__stateful__each--${item}`}
                                    >
                                        <div className={`base__right__states__stateful__each__emoji--${item}`}>
                                            <span >
                                                {item === "sad" && '😖'}
                                                {item === "indiff" && '😐'}
                                                {item === "excited" && '😃'}
                                            </span>
                                        </div>

                                        <div>
                                            <p className="base__right__states__stateful__each__maintext">
                                                {item === "sad" && 'Cat wasn’t having it'}
                                                {item === "indiff" && 'Cat was indifferent'}
                                                {item === "excited" && 'Cat was super excited!'}
                                            </p>
                                            <p className="base__right__states__stateful__each__subtext">
                                                {moment(new Date()).format("DD-MM-YYYY")}/{moment(new Date()).format("hh")}:{moment(new Date()).format("mm")}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default Right
