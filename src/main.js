import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import Wechat from './Wechat'
import Home from './Home'
import Icon from './app/Icon'
import Switch from './app/Switch'
import Radio from './app/Radio'
import Input from './app/Input'
import Number from './app/Number'
import Checklist from './app/Checklist'
import Selector from './app/Selector'
import Tip from './app/Tip'
import Button from './app/Button'
import Textarea from './app/Textarea'
import Flexbox from './app/Flexbox'
import Tab from './app/Tab'
import Swiper from './app/Swiper'
import Sticky from './app/Sticky'
import Picker from './app/Picker'
import Datetime from './app/Datetime'
import Popup from './app/Popup'
import Range from './app/Range'
import Actionsheet from './app/Actionsheet'
import Clocker from './app/Clocker'
import Rater from './app/Rater'
import PopupPicker from './app/Popup-picker'
import Address from './app/Address'
import Toast from './app/Toast'
import Loading from './app/Loading'
import Alert from './app/Alert'
import Confirm from './app/Confirm'
import Progress from './app/Progress'
import XImg from './app/XImg'
import Onepx from './app/1px'
import Orientation from './app/Orientation'
import Shake from './app/Shake'
import Cell from './app/Cell'
import Demo from './app/Demo'
import Emotion from './app/Wechat-emotion'
import Search from './app/Search'
import Donate from './app/Donate'
import Thanks from './app/Thanks'
import Spinner from './app/Spinner'
import Calendar from './app/Calendar'
import Milestone from './app/Milestone'
import Circle from './app/Circle'
import Countup from './app/Countup'
import ColorPicker from './app/Color-picker'
import Blur from './app/Blur'
import Scroller from './app/Scroller'

Vue.use(Router)

var router = new Router({
  history: false, // use history=false when testing
  saveScrollPosition: true
})

router.map({
  '/': {
    component: Home
  },
  '/demo/wechat': {
    component: Wechat
  },
  '/component/icon': {
    component: Icon
  },
  '/component/switch': {
    component: Switch
  },
  '/component/radio': {
    component: Radio
  },
  '/component/input': {
    component: Input
  },
  '/component/number': {
    component: Number
  },
  '/component/checklist': {
    component: Checklist
  },
  '/component/selector': {
    component: Selector
  },
  '/component/tip': {
    component: Tip
  },
  '/component/button': {
    component: Button
  },
  '/component/textarea': {
    component: Textarea
  },
  '/component/flexbox': {
    component: Flexbox
  },
  '/component/tab': {
    component: Tab
  },
  '/component/swiper': {
    component: Swiper
  },
  '/component/sticky': {
    component: Sticky
  },
  '/component/picker': {
    component: Picker
  },
  '/component/datetime': {
    component: Datetime
  },
  '/component/popup': {
    component: Popup
  },
  '/component/range': {
    component: Range
  },
  '/component/actionsheet': {
    component: Actionsheet
  },
  '/component/clocker': {
    component: Clocker
  },
  '/component/rater': {
    component: Rater
  },
  '/component/popup-picker': {
    component: PopupPicker
  },
  '/component/address': {
    component: Address
  },
  '/component/toast': {
    component: Toast
  },
  '/component/loading': {
    component: Loading
  },
  '/component/alert': {
    component: Alert
  },
  '/component/confirm': {
    component: Confirm
  },
  '/component/progress': {
    component: Progress
  },
  '/component/x-img': {
    component: XImg
  },
  '/component/1px': {
    component: Onepx
  },
  '/component/orientation': {
    component: Orientation
  },
  '/component/shake': {
    component: Shake
  },
  '/component/cell': {
    component: Cell
  },
  '/demo': {
    component: Demo
  },
  '/component/emotion': {
    component: Emotion
  },
  '/component/search': {
    component: Search
  },
  '/project/donate': {
    component: Donate
  },
  '/project/thanks': {
    component: Thanks
  },
  '/project/milestone': {
    component: Milestone
  },
  '/component/spinner': {
    component: Spinner
  },
  '/component/calendar': {
    component: Calendar
  },
  '/component/circle': {
    component: Circle
  },
  '/component/countup': {
    component: Countup
  },
  '/component/color-picker': {
    component: ColorPicker
  },
  '/component/blur': {
    component: Blur
  },
  '/component/scroller': {
    component: Scroller
  }
})

router.beforeEach(function (transition) {
  if (/\/http/.test(transition.to.path)) {
    let url = transition.to.path.split('http')[1]
    location.href = `http${url}`
  } else {
    transition.next()
  }
})

router.afterEach(function (transition) {
  if (transition.to.fullPath !== '/demo') {
    window.scrollTo(0, 0)
  }
})

router.start(App, '#app')
