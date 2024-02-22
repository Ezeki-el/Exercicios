
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }


    acelerar() {
        throw new Error("Método acelerar() deve ser implementado");
    }
}

  // Definição da classe Carro que herda de Veiculo
class Carro extends Veiculo {
    constructor(marca, modelo, numPortas) {
        super(marca, modelo);
        this.numPortas = numPortas;
    }

    acelerar() {
    console.log(`${this.marca} ${this.modelo} está acelerando...`);
    }
}

  // Definição da classe Moto que herda de Veiculo
class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    acelerar() {
        console.log(`${this.marca} ${this.modelo} está acelerando...`);
    }
}

    const carro1 = new Carro("Toyota", "Corolla", 4);
    const moto1 = new Moto("Honda", "CBR500R", 500);
    const veiculoGenerico = new Veiculo("Marca Genérica", "Modelo Genérico");


    carro1.acelerar(); 
    moto1.acelerar(); 
    console.log(veiculoGenerico);
