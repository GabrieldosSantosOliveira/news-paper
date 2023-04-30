import { Toast, ToastProps } from '@/components/Toast/Toast';
import { createContext, FC, ReactNode, useState } from 'react';
type ShowToastProps = Pick<
  ToastProps,
  'type' | 'message' | 'position' | 'duration'
> & {
  style?: Omit<ToastProps['style'], 'position'>;
};
export interface IToastContext {
  show: (options: ShowToastProps) => void;
  clear: () => void;
}
export const ToastContext = createContext<IToastContext>({} as IToastContext);
export interface IToastProvider {
  children: ReactNode;
}

export const ToastProvider: FC<IToastProvider> = ({ children }) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastOptions, setToastOptions] = useState<ShowToastProps>(
    {} as ShowToastProps,
  );
  const show = (options: ShowToastProps) => {
    setShowToast(true);
    setToastOptions(options);
  };
  const clear = () => {
    setShowToast(false);
  };

  return (
    <ToastContext.Provider value={{ show, clear }}>
      <>
        <Toast
          key={`toast-${Math.random()}`}
          show={showToast}
          style={{ ...toastOptions.style }}
          position={toastOptions.position}
          message={toastOptions.message}
          type={toastOptions.type}
          duration={toastOptions.duration}
        />
        {children}
      </>
    </ToastContext.Provider>
  );
};
