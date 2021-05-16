import React from 'react';
import '../scss/Content.scss';

export default class Content extends React.Component {
  render() {
    return (
      <main className="content">
        <div className="content-container">
          <article>
            <header>
              <h1>Тестовая статья 🤖</h1>
            </header>
            <div className="markdown">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione commodi doloremque magnam quis sapiente, officia corporis perspiciatis dolorum quod nostrum eveniet repellendus molestias amet pariatur, assumenda nam qui. Iure.</p>
            </div>
          </article>
        </div>
      </main>
    )
  }
}
