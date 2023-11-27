// import React from "react";
// import ReactDOM from "react-dom";

// const Modal = ({ onClose, children, title }) => {
//   const handleCloseClick = (e) => {
//     e.preventDefault();
//     onClose();
//   };

//   const modalContent = (
//     <div
//       className="modal-overlay"
//       style={{
//         position: "absolute",
//         zIndex: 100,
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "rgba(0, 0, 0, 0.5)",
//       }}
//     >
//       <div
//         className="modal-wrapper"
//         style={{
//           width: "500px",
//           height: "600px",
//         }}
//       >
//         <div
//           className="modal"
//           style={{
//             background: "white",
//             height: "100%",
//             width: "100%",
//             borderRadius: "15px",
//             padding: "15px",
//           }}
//         >
//           <div
//             className="modal-header"
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               fontSize: "25px",
//             }}
//           >
//             <a href="#" onClick={handleCloseClick}>
//               x
//             </a>
//           </div>
//           {title && <h1>{title}</h1>}
//           <div
//             className="modal-body"
//             style={{
//               paddingTop: "10px",
//             }}
//           >
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return ReactDOM.createPortal(
//     modalContent,
//     document.getElementById("modal-root")
//   );
// };

// export default Modal;

// @src/components/Modal.jsx

import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ setIsOpen, headerTitle, handleAuth, openWeb3Modal }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{headerTitle}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            x
          </button>
          <div style={{display: 'flex', alignItems: 'center'}} className={styles.modalContent}>
            <button
              style={{
                fontWeight: 600,
                padding: "20px",
                borderRadius: "6px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                border: '1px solid lightgrey'
              }}
              onClick={handleAuth}
            >
              <div style={{marginBottom: '20px', fontSize: 'medium'}}>MetaMask</div>
              <img style={{width: '60px', height: '60px', fontSize: 'medium'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png" alt="" />
            </button>

            <button
              style={{
                fontWeight: 600,
                padding: "20px",
                borderRadius: "6px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '10px',
                width: '50%',
                border: '1px solid lightgrey'
              }}
              onClick={() => openWeb3Modal()}
            >
              <div style={{marginBottom: '20px', fontSize: 'medium'}}>WalletConnect</div>
              <img style={{width: '60px', height: '60px'}} src="https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png" alt="" />
            </button>
            
          </div>
          {/* <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
