import Toast from "./Toasts";

export default {
  title: "component/toast",
  component: Toast,
  parameters: {
    layout:"centered",
  },
  tags:['autodocs'],
}


export const defaultType = {

  args: {
    type:"default",
    text:"text here",  
  }
}