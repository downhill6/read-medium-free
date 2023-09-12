import { createSignal, type Component, createEffect, type ComponentProps, type JSX } from 'solid-js';

import styles from './App.module.css';

function goArticle(url: string) {
  const googleCacheLink = 'http://webcache.googleusercontent.com/search?q=cache:'
  const parameters = '&sca_esv=564592924&strip=1&vwsrc=0'
  window.open(googleCacheLink + url + parameters, '_blank')
}

const App: Component = () => {
  const [value, setValue] = createSignal('')

  const onClick = () => {
    goArticle(value())
  }

  const onChange: JSX.EventHandler<HTMLInputElement, Event> = (e) => {
    setValue(e.currentTarget.value)
  }

  createEffect(() => {
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        goArticle(value())
      }
    })
  })
  
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <label for="search"><h3>medium artical link</h3></label>
        <input onChange={onChange} id="search" class={styles.search} type="text" />
        <button onClick={onClick} class={styles.go}>GO</button>
      </header>
      <footer class={styles.footer}><a href="https://canererden.com/blog/2023/unlock-medium/">reference source</a></footer>
    </div>
  );
};

export default App;
