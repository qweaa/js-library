import logo from '@/images/logo.png';
export default {
  name: 'home',
  setup() {

  },
  data() {
    return {
      title: 'hello home page',
      logo,
    }
  },
  mounted() {
    console.log('home page')
  }
}