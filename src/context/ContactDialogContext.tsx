import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ContactDialogContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openContact: () => void;
};

const ContactDialogContext = createContext<ContactDialogContextValue | null>(null);

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openContact = useCallback(() => setOpen(true), []);

  const value = useMemo(
    () => ({
      open,
      setOpen,
      openContact,
    }),
    [open, openContact],
  );

  return <ContactDialogContext.Provider value={value}>{children}</ContactDialogContext.Provider>;
}

export function useContactDialog() {
  const ctx = useContext(ContactDialogContext);
  if (!ctx) {
    throw new Error("useContactDialog must be used within ContactDialogProvider");
  }
  return ctx;
}
