import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {tabId, displayText} = tabDetails
  const activeTabBtn = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  return (
    <li className="list=tab-container">
      <button
        type="button"
        className={`tab-btn ${activeTabBtn}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
