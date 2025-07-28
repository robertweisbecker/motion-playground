'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Spinner } from './spinner';
import styles from './loading-button.module.css';

const buttonCopy = {
  idle: 'Send me a login link',
  loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
  success: 'Login link sent!',
};

const variants = {
  hidden: { opacity: 0, translateY: '50%', blur: '2px' },
  hiddenUp: { opacity: 0, translateY: '-50%', blur: '2px' },
  idle: { opacity: 0, translateY: '-100%' },
  visible: { opacity: 1, translateY: '0%', blur: 0 },
};

export function LoadingButton() {
  const [buttonState, setButtonState] = useState('idle');

  return (
    <div className={styles.outerWrapper}>
      <button
        className={styles.blueButton}
        disabled={buttonState !== 'idle'}
        onClick={() => {
          // This code is just a placeholder
          setButtonState('loading');

          setTimeout(() => {
            setButtonState('success');
          }, 1750);

          setTimeout(() => {
            setButtonState('idle');
          }, 3500);
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {buttonState === 'loading' ? (
            <motion.span
              key="spinner"
              variants={variants}
              initial="idle"
              animate="visible"
              exit="hidden"
            >
              <Spinner size={16} color="currentColor" />
            </motion.span>
          ) : (
            <motion.span
              key="label"
              variants={variants}
              initial={buttonState === 'idle' ? 'hidden' : 'hiddenUp'}
              animate="visible"
              exit={buttonState === 'success' ? 'hiddenUp' : 'hidden'}
            >
              {buttonCopy[buttonState]}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}

// Solution
// "use client";

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Spinner } from "./Spinner";

// const buttonCopy = {
//   idle: "Send me a login link",
//   loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
//   success: "Login link sent!",
// };

// export default function SmoothButton() {
//   const [buttonState, setButtonState] = useState("idle");

//   return (
//     <div className="outer-wrapper">
//       <button
//         className="blue-button"
//         disabled={buttonState === "loading"}
//         onClick={() => {
//           if (buttonState === "success") return;

//           setButtonState("loading");

//           setTimeout(() => {
//             setButtonState("success");
//           }, 1750);

//           setTimeout(() => {
//             setButtonState("idle");
//           }, 3500);
//         }}
//       >
//         <AnimatePresence mode="popLayout" initial={false}>
//           <motion.span
//             transition={{ type: "spring", duration: 0.3, bounce: 0 }}
//             initial={{ opacity: 0, y: -25 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 25 }}
//             key={buttonState}
//           >
//             {buttonCopy[buttonState]}
//           </motion.span>
//         </AnimatePresence>
//       </button>
//     </div>
//   );
// }

// Solution 2 (Variants)
// "use client";

// import { AnimatePresence, motion } from "framer-motion";

// const variants = {
//   initial: { opacity: 0, y: -25 },
//   visible: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: 25 },
// };

// export function AnimatedState({ children }: { children: React.ReactNode }) {
//   return (
//     <AnimatePresence mode="popLayout" initial={false}>
//       <motion.div
//         initial="initial"
//         animate="visible"
//         exit="exit"
//         variants={variants}
//         transition={{ type: "spring", duration: 0.3, bounce: 0 }}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// }
