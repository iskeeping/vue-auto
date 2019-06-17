import vue from 'vue'
import app from './app.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
// 设置语言
locale.use(lang)
import '@/assets/font/iconfont.css'

vue.use(Pagination)
vue.use(Dialog)
vue.use(Autocomplete)
vue.use(Dropdown)
vue.use(DropdownMenu)
vue.use(DropdownItem)
vue.use(Menu)
vue.use(Submenu)
vue.use(MenuItem)
vue.use(MenuItemGroup)
vue.use(Input)
vue.use(InputNumber)
vue.use(Radio)
vue.use(RadioGroup)
vue.use(RadioButton)
vue.use(Checkbox)
vue.use(CheckboxButton)
vue.use(CheckboxGroup)
vue.use(Switch)
vue.use(Select)
vue.use(Option)
vue.use(OptionGroup)
vue.use(Button)
vue.use(ButtonGroup)
vue.use(Table)
vue.use(TableColumn)
vue.use(DatePicker)
vue.use(TimeSelect)
vue.use(TimePicker)
vue.use(Popover)
vue.use(Tooltip)
vue.use(Breadcrumb)
vue.use(BreadcrumbItem)
vue.use(Form)
vue.use(FormItem)
vue.use(Tabs)
vue.use(TabPane)
vue.use(Tag)
vue.use(Tree)
vue.use(Alert)
vue.use(Slider)
vue.use(Icon)
vue.use(Row)
vue.use(Col)
vue.use(Upload)
vue.use(Progress)
vue.use(Badge)
vue.use(Card)
vue.use(Rate)
vue.use(Steps)
vue.use(Step)
vue.use(Carousel)
vue.use(CarouselItem)
vue.use(Collapse)
vue.use(CollapseItem)
vue.use(Cascader)
vue.use(ColorPicker)
vue.use(Transfer)
vue.use(Container)
vue.use(Header)
vue.use(Aside)
vue.use(Main)
vue.use(Footer)

vue.config.productionTip = false

new vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
