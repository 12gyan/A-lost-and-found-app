import React, { useEffect } from 'react'
import "./Go-To-Top.css";

const GoToTop = () => {

    const [isVisible, setIsVisible] = React.useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > 150) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, [])

    return (
        <>
            {isVisible && <div className="top-btn" onClick={goToBtn}>
            <i className="bi bi-arrow-up-circle-fill"/>
            </div>}
        </>
    );

};




export default GoToTop
