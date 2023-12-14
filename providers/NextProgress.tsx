"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProvidersLoading = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar
        height="3px"
        
        options={{ showSpinner: false }}
        shallowRouting
        style={'z-index:99999999999'}
      />{" "}
      {children}
    </>
  );
};

export default ProvidersLoading;
