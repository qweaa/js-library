import logo from '@/images/logo.png';
export default {
  name: 'home',
  setup() {

  },
  data() {
    return {
      title: 'hello world',
      logo,
    }
  },
  mounted() {
    console.log('home page')
  }
}