const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: ['Manzana', 'Pera', 'Platano'],
        verduras: [{
            nombre: 'Perejil',
            cantidad: 0
        }, {
            nombre: 'Remolacha',
            cantidad: 10
        }, {
            nombre: 'Espinaca',
            cantidad: 11
        }, ],
        nuevaVerdura: '',
        total: 0,
        fondo: 'bg-warning',
        color: false
    },
    methods: {
        agregarVerdura() {
            this.verduras.push({
                nombre: this.nuevaVerdura,
                cantidad: 0
            }, )
            this.nuevaVerdura = ''
        }
    },
    computed: {
        sumarVerduras() {
            this.total = 0;
            for (verdura of this.verduras) {
                this.total = this.total + verdura.cantidad;
            }
            return this.total;
        }
    }
})