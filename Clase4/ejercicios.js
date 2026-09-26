const autos = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Blanco"
  },
  {
    marca: "Ford",
    modelo: "Focus",
    año: 2020,
    color: "Azul"
  },
  {
    marca: "Volkswagen",
    modelo: "Golf",
    año: 2023,
    color: "Negro"
  },
  {
    marca: "Chevrolet",
    modelo: "Cruze",
    año: 2021,
    color: "Gris"
  },
  {
    marca: "Honda",
    modelo: "Civic",
    año: 2024,
    color: "Rojo"
  },
  {
    marca: "Fiat",
    modelo: "Cronos",
    año: 2018,
    color: "Blanco"
  },
  {
    marca: "Renault",
    modelo: "Clio",
    año: 2019,
    color: "Verde"
  },
  {
    marca: "Peugeot",
    modelo: "208",
    año: 2023,
    color: "Gris"
  },
  {
    marca: "BMW",
    modelo: "Serie 3",
    año: 2021,
    color: "Negro"
  },
  {
    marca: "Mercedes-Benz",
    modelo: "Clase A",
    año: 2017,
    color: "Azul"
  }
];

autos.forEach((auto) => {
    if(auto.año > 2018){
        console.log(auto)
    }
});

function recorrerAutos (autos = [],  color_if = false) {
    if(color_if){
        let cantidad = 0;
        autos.forEach((auto) => {
            const {color} = auto
            if (color_if.toLowerCase() == color.toLowerCase()){
                cantidad ++
            }
        })
        console.log(`La cantidad de autos de color ${color_if} es: ${cantidad}`)
    }else{
        console.log("Se necesita un color para poder contar")
    }
}

recorrerAutos(autos,"azul");

class Auto {
    constructor(marca, modelo, año, color){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color
    }
}

const autos_clase = autos.map(auto => new Auto(auto.marca, auto.modelo, auto.año, auto.color))
console.log(autos_clase)

function autosReduce(autos = [], color=false){
    if(color){
        const resultado = autos.reduce((contador, auto) => contador + (color.toLowerCase() == auto.color.toLowerCase() ? 1 : 0), 0)
        console.log(`La cantidad de autos de color ${color} es: ${resultado}`)
    }else{
        console.log("Se necesita un color para poder comparar")
    }
}

autosReduce(autos_clase, "rojo")
 