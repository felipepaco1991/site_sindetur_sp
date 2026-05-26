import React, { createContext, useState, useContext, useEffect } from 'react'
import { appParams } from '@/lib/app-params'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoadingAuth, setIsLoadingAuth] = useState(true)
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true)
  const [authError, setAuthError] = useState(null)
  const [appPublicSettings, setAppPublicSettings] = useState(null)

  useEffect(() => {
    checkAppState()
  }, [])

  const checkAppState = async () => {
    // Local fallback mode: keeps app usable even when Base44 SDK is not configured.
    const token = appParams.token || window.localStorage.getItem('base44_access_token')
    setAppPublicSettings(null)
    setAuthError(null)
    setIsAuthenticated(Boolean(token))
    setIsLoadingPublicSettings(false)
    setIsLoadingAuth(false)
  }

  const checkUserAuth = async () => {
    setIsLoadingAuth(false)
    setIsAuthenticated(Boolean(appParams.token || window.localStorage.getItem('base44_access_token')))
  }

  const logout = (shouldRedirect = true) => {
    setUser(null)
    setIsAuthenticated(false)
    window.localStorage.removeItem('base44_access_token')
    window.localStorage.removeItem('token')

    if (shouldRedirect) {
      window.location.assign('/')
    }
  }

  const navigateToLogin = () => {
    if (appParams.appBaseUrl) {
      window.location.assign(`${appParams.appBaseUrl}/login?from_url=${encodeURIComponent(window.location.href)}`)
      return
    }
    setAuthError({
      type: 'auth_required',
      message: 'Authentication required'
    })
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      logout,
      navigateToLogin,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
