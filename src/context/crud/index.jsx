import { createContext, useState } from 'react';

const CrudContext = createContext();

function CrudContextProvider({ children }) {
  //panel
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const panel = {
    isOpen: isSidePanelOpen,
    open: () => {
      setSidePanelOpen(true);
    },
    collapse: () => {
      setSidePanelOpen(false);
    },
  };
  // delete modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deleteModal = {
    isOpen: isModalOpen,
    open: () => {
      setIsModalOpen(true);
    },
    close: () => {
      setIsModalOpen(false);
    },
  };
  //current action on entity
  const [currAction, setCurrAction] = useState({ type: undefined, entity: undefined });
  const currentAction = {
    current: currAction,
    set: (type, entity) => setCurrAction({ type, entity }),
  };

  return (
    <CrudContext.Provider value={{ panel, deleteModal, currentAction }}>
      {children}
    </CrudContext.Provider>
  );
}

export { CrudContextProvider, CrudContext };