import React from 'react';

const AppShell = React.lazy(() => import('remoteComponentKit/AppShell'))
const AccountDetails = React.lazy(() => import('remoteAccountDetails'))

export default function App() {
  return (
    <React.Suspense fallback={'Loading...'}>
      <div style={{ backgroundColor: 'rgba(0, 0, 255, 0.4'}}>
        <h2>User Application</h2>
      </div>
      <AppShell>
        Hello Users!
      </AppShell>
      <AccountDetails />
    </React.Suspense>
  )
}
