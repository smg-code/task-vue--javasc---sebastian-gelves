//1:14:15
console.log('hola')
console.log(Vue)
const { createApp } = Vue
//https://t2.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_orig.jpg

let app = createApp({
  data() {                   //metodo data, lo que hace retorna, un objeto que va a tener 
                             // todas las propiedades de la aplicacion(reactivas)
    return {                 //todo lo que este dentro de esto, esta habiltado en el html
      message: 'Hello Vue!',  //por consola lo puedo cambiar
      nombre: 'sebastian',
      edad: 44,
      contador : 0,
      texto: '',
      foto:'gato',
      frutas: ['melon',null,'pera','sandia',null,'tomate'],
      fruta: '',

    }
  },
  created(){            //parte del ciclo de vida aplicacion, cuando recien se crea la aplicacion
    console.log('app creada')
    console.log(this.message)
    let h1 = document.querySelector('h1') // esto no lo captura, pero esta vista no existe
    console.log(h1)
  },
  mounted(){            //muestra la app
    console.log('app creada')
    console.log(this.message)
    let h1 = document.querySelector('h1') 
    console.log(h1)
  },
  methods:{             //objeto ,se crean los metodos, las funciones
    contar(){
      this.contador++   //metodo contador, incrementa cada vez que precionan el boton
    },
    agregarElemento(){
        this.frutas.push(this.fruta)
        this.fruta=''
    }
  },
  computed:{            //objeto computada(reactiva), van metodos o propiedades computadas(calculadas)
    miEdadNombre(){
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.` // puedo cambiar nombre o edad por por consola (por que es reactiva)
        // ` alt 96
    },
  }
}).mount('#app')