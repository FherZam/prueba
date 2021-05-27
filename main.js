const Counter = {
    data() {
      return {
        counter: 0,
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        messageHTML: '<b>mensaje html</b>',
        verContador: true,
        Empleados: [
            { name: 'Fernando Zamora', puesto: 'programador'},
            { name: 'Guillermo BlueDemonllo', puesto: 'Dia a Dia'},
            { name: 'Gerardo Cristerna', puesto: 'programador'}
        ]
      }
    },
    mounted() {
        setInterval(() => {
          this.counter++
        }, 1000)
      },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    }
  }
  
  //Vue.createApp(Counter).mount('#app')
  const app = Vue.createApp(Counter)
  const vm = app.mount('#app')
  console.log(vm.Empleados)

  
  