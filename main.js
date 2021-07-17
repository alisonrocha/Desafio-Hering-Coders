import './style.css'
import './src/components/styles/settings/base.css'
import './src/components/styles/generic/reset.css'

import Header from './pages/header/index'
import Home from './pages/home/index'
import Promotions from './pages/promotions'
import Forms from './pages/forms'
import Meet from './pages/meet-premium-lager'
import Institutional from './pages/institutional-video'
import Footer from './pages/footer'
import Modal from './src/components/modal'

const $root = document.querySelector('#root')
const $header = Header()
const $home = Home()
const $promotions = Promotions()
const $forms = Forms()
const $meet = Meet()
const $institutional = Institutional()
const $footer = Footer()
const $modal = Modal()

localStorage.clear()

$root.insertAdjacentHTML(
  'afterbegin',
  $header +
    $home +
    $promotions +
    $forms +
    $meet +
    $institutional +
    $footer +
    $modal
)
