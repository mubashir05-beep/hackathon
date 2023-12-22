"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";


const ProvidersLoading = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
     <ProgressBar
        height="8px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
};

export default ProvidersLoading;
