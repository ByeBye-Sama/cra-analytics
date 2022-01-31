import ReactGA from 'react-ga4'

export const initGA = () => {
  ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID)
}

export const logPageView = currentPath => {
  ReactGA.set({ page: currentPath })
  ReactGA.send({ hitType: 'pageview', page: currentPath })
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
