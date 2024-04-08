import React from 'react';

// Mock account data fetching hook
export function useAccount() {
  const [ loading, setLoading ] = React.useState(true)
  const [ error, setError ] = React.useState(null)

  // Add a random loading delay to simulate a network request
  const randomLoadingDelay = Math.random() * 1500

  setTimeout(() => {
    setLoading(false)
    const randomErrorChance = Math.floor(Math.random() * 100)
    if (randomErrorChance > 80) {
      setError(Error('An error occurred!'))
    }
  }, randomLoadingDelay)

  const data = loading || error
    ? null
    : {
      account: {
        name: 'John Doe',
        email: 'email@example.com'
      }
    }

  return {
    loading,
    error,
    data
  }
}

