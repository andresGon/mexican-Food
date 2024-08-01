import React, { useState } from "react";
import { modalContext } from "./modalContext";

const stateApp = ({children}) =>{
    const [modalStatus, setModalStatus] = useState(false)
    const [modalContent, setModalContent] = useState('')


    const openModal = (content) => {
        setModalContent(content);
        setModalStatus(true);
      };
    
      const closeModal = () => {
        setModalStatus(false);
        setModalContent(null);
      };

    return(
        <modalContext.Provider value={{modalStatus,modalContent,openModal,closeModal}}>
            {children}
        </modalContext.Provider>
    )

}

export default stateApp