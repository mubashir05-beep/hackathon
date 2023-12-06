'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProvidersLoading = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color='black'
       
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProvidersLoading;