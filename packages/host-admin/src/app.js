import React from 'react';

const AppShell = React.lazy(() => import('remoteComponentKit/AppShell'))
const AccountDetails = React.lazy(() => import('remoteAccountDetails'))

export default function App() {
  return (
    <React.Suspense fallback={'Loading...'}>
      <div style={{ backgroundColor: 'rgba(255, 0, 0, 0.4'}}>
        <h2>Admin Application</h2>
      </div>
      <AppShell>
        Hello Admins!
      </AppShell>
      <AccountDetails />
    </React.Suspense>
  )
}
