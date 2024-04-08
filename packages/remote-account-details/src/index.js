import React from 'react';
import { useAccount } from './hooks/useAccount';

export default function AccountDetails() {
  const { loading, error, data } = useAccount()
  const account = data?.account
  return (
    <div>
      {loading ? (
        'Loading...'
      ) : error ? (
        `ERROR: ${error.message}`
      ) : data ? (
        <div>
          <div>
            Name: {account.name}
          </div>
          <div>
            Email: {account.email}
          </div>
        </div>
      ) : (
        'No account data found!'
      )}
    </div>
  )
}
