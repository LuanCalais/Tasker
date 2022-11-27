import type { INotification } from "@/components/interfaces/INotification";
import { store } from "@/store";
import { NOTIFY } from "@/store/typeMutations";

// Explicity what we want to export
type Notificatior = {
  notify: (type: INotification, title: string, description: string) => void;
};

export default (): Notificatior => {
  const notify = (
    type: INotification,
    title: string,
    description: string
  ): void => {
    store.commit(NOTIFY, {
      type: type,
      title: title,
      description: description,
    });
  };

  return { notify };
};
