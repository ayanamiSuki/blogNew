import Vue from "vue";
import {
  Carousel,
  CarouselItem,
  Button,
  Form,
  FormItem,
  Icon,
  Card,
  Row,
  Col,
  Input,
  notification,
  message,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination
} from "element-ui";

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Icon);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Pagination);
Vue.prototype.$notify = notification;
Vue.prototype.$message = message;
