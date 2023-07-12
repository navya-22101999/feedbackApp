// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  onChangeEmoji = () => {
    this.setState({isClicked: false})
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="main-container">
        {isClicked ? (
          <div className="card-container">
            <div className="text-container">
              <h1>
                How satisfied are you with our customer support performance
              </h1>
              <ul>
                {emojis.map(each => (
                  <li key={each.id}>
                    <button onClick={this.onChangeEmoji} type="button">
                      <img src={each.imageUrl} alt={each.name} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <ul>
            <li>
              <img src={loveEmojiUrl} alt="love emoji" />
              <div>
                <h1>Thank you</h1>
                <p>fnbdkfuhdkj</p>
              </div>
            </li>{' '}
          </ul>
        )}
      </div>
    )
  }
}
export default Feedback
