import { html } from 'https://esm.sh/@arrow-js/core'
import Button from '../../components/button/Button.js'
import { aboutStore } from './AboutStore.js'
import { homeStore } from './../home/HomeStore.js'

export default function AboutPage() {
  console.log('AboutPage')
    
  return html`
    <p>Home Store Count 1: ${homeStore.count1}</p>
    <p>About Store Count: ${() => aboutStore.count}</p>
    ${Button({ title: 'Increment About Store Count', onClick: () => aboutStore.count++ })}
  `
}
