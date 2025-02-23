import './index.css'
import {useState} from 'react'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
const BrowserHistory = () => {
  const [historyList, setHistoryList] = useState(initialHistoryList)
  const [userInput, setUserInput] = useState('')
  const onHandleSearchInput = event => {
    const searchInput = event.target.value
    setUserInput(searchInput)
    const newHistoryList = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    setHistoryList(newHistoryList)
  }
  const onHandleDeleteItem = id => {
    const newHistoryList = historyList.filter(eachItem => eachItem.id !== id)
    setHistoryList(newHistoryList)
  }
  return (
    <div className="main">
      <div className="nav-container">
        <div className="nav-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="icon-search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
            className="search-icon"
          />
          <input
            placeholder="Search history"
            className="search-input"
            value={userInput}
            onChange={onHandleSearchInput}
          />
        </div>
      </div>
      {historyList.length > 0 ? (
        <div className="history-section">
          <ul>
            {historyList.map(eachItem => (
              <li key={eachItem.id}>
                <div className="content">
                  <div className="list-items">
                    <p className="time">{eachItem.timeAccessed}</p>
                    <div className="logo-title-url-container">
                      <img
                        src={eachItem.logoUrl}
                        alt="Domain logo"
                        className="domain-logo"
                      />
                      <p className="domain-name">{eachItem.title}</p>
                      <p className="domain-url">{eachItem.domainUrl}</p>
                    </div>
                  </div>
                  <div className="delete-icon-section">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                      className="delete"
                      alt="delete icon"
                      onClick={() => onHandleDeleteItem(eachItem.id)}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="not-found-section">
          <p>There is not history to show</p>
        </div>
      )}
    </div>
  )
}

export default BrowserHistory
