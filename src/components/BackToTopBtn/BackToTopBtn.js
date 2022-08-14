import React from 'react'
import { useEffect, useState } from "react";
import styles from './BackToTopBtn.module.css'

function BackToTopBtn() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        });
    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
        });
    };

  return (
    <div className={styles.container}>
        {showButton && (
            <button onClick={scrollToTop} className={styles.uparrow}>
                &#8679;
            </button>
        )}
      {/* &#8679; is used to create the upward arrow */}

    </div>
  )
}

export default BackToTopBtn