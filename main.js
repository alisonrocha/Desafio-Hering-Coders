import './style.css'
import './src/components/styles/settings/base.css'
import './src/components/styles/generic/reset.css'

import Header from './pages/header/index'
import Home from './pages/home/index'
import Promotions from './pages/promotions/index'
import Forms from './pages/forms/index'
import Meet from './pages/meet-premium-lager/index'
import Institutional from './pages/institutional-video/index'
import Footer from './pages/footer/index'
import Modal from './src/components/modal/index'

const $root = document.querySelector('#root')
const $header = Header()
const $home = Home()
const $promotions = Promotions()
const $forms = Forms()
const $meet = Meet()
const $institutional = Institutional()
const $footer = Footer()
const $modal = Modal()

console.log($modal)

localStorage.clear()

$root.insertAdjacentHTML(
  'afterbegin',
  $header + $home + $promotions + $forms + $meet + $institutional + $footer
)

if ($modal != undefined) {
  $root.insertAdjacentHTML('afterbegin', $modal)
}
