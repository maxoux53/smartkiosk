import { createContext, useContext, useState, type ReactNode, type FC } from 'react';

interface ModalContextType {
  title: string
  setTitle: (title: string) => void;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  message: string;
  statut: string
  setMessage: (message: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ModalProvider est manquant");
  }
  return context;
};

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState<string>("")
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [statut, setStatut] = useState<string>("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setMessage("");
    setStatut("");
    setTitle("");
  };

  return (
    <ModalContext.Provider value={{title, setTitle ,isOpen, openModal, closeModal, message, statut ,setMessage }}>
      {children}
      {isOpen && (
        <dialog open>
          <article>
            <header>
              {title}
            </header>
            <p>{message}</p>
            <footer><button onClick={closeModal}>Fermer</button></footer>
          </article>
        </dialog>
      )}
    </ModalContext.Provider>
  );
};