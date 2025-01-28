import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const styles = {
    section: "py-8 bg-gray-50 sm:py-10 lg:py-12 xl:py-14 relative",
    container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-8xl", // Increased max width
    headerContainer: "max-w-xl mx-auto text-center",
    headerTitle: "text-4xl font-bold tracking-tight text-blue-700 sm:text-5xl lg:text-6xl",
    headerSubtitle: "mt-4 text-lg font-medium leading-7 text-gray-600 lg:text-xl lg:mt-6 lg:leading-8",
    achievementsContainer: "relative max-w-5xl mx-auto mt-8 overflow-hidden bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 sm:mt-12 rounded-3xl shadow-lg", // Updated gradient
    circleDecoration: "absolute border-[8px] border-white rounded-full w-80 h-80 opacity-30 blur-xl",
    circleLeft: "top-0 left-0 -translate-x-1/3 -translate-y-[75%]",
    circleRight: "bottom-0 right-0 translate-x-1/3 translate-y-[85%]",
    content: "relative px-6 py-10 lg:px-16 lg:py-12",
    grid: "grid grid-cols-1 gap-8 xl:gap-12 sm:grid-cols-2 lg:grid-cols-4",
    achievementItem: "flex flex-col items-center justify-center text-center",
    achievementNumber: "text-5xl font-bold text-blue-600 sm:text-6xl lg:text-7xl",
    achievementText: "mt-3 text-base font-medium text-gray-700",
  };
  
  
  
  
// Logistics-related achievements
const achievements = [
  { number: 500, text: "Warehouses globally" },
  { number: 12000, text: "Satisfied logistics clients" },
  { number: 850, text: "Successful shipments daily" },
  { number: 350, text: "Industry awards won" },
];

// Hook for number animation
const useAnimatedNumber = (target, duration = 2000) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const start = performance.now();

    const updateNumber = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      setCurrent(value);

      if (progress < 1) requestAnimationFrame(updateNumber);
    };

    requestAnimationFrame(updateNumber);
  }, [target, duration]);

  return current;
};

const Stats = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerContainer}>
          <h2 className={styles.headerTitle}>Logistics Achievements</h2>
          <p className={styles.headerSubtitle}>
            Revolutionizing global logistics with efficiency, security, and innovation. Here are our key milestones.
          </p>
        </div>

        {/* Achievements */}
        <div className={styles.achievementsContainer}>
          {/* Background Circles */}
          <div className={`${styles.circleDecoration} ${styles.circleLeft}`}></div>
          <div className={`${styles.circleDecoration} ${styles.circleRight}`}></div>

          {/* Content */}
          <div className={styles.content}>
            <div className={styles.grid}>
              {achievements.map((achievement, index) => {
                const animatedNumber = useAnimatedNumber(achievement.number);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={styles.achievementItem}
                  >
                    <p className={styles.achievementNumber}>
                      {animatedNumber}
                      {/* Optional "+" */}
                      {achievement.number >= 1000 ? "+" : ""}
                    </p>
                    <h3 className={styles.achievementText}>{achievement.text}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
