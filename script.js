// Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:
// nome, idade, tipo (mago, guerreiro, monge e ninja)

// deve ter um método chamado atacar que:
// exibe a mensagem ("o {tipo} atacou usando {ataque}")

// se mago -> magia
// se guerreiro -> espada
// se monge -> artes marciais
// se ninja -> shuriken

class heroi{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    atacar(){
        console.log(`O ${this.type} atacou usando ${attack}`)
    }
}

var aventura = new heroi("Fukiro Ushira", 100, "Mago")
var attack = " "
var type = "Mago"

if(type === "Mago"){
    attack = "Magia"
}

else if(type === "Guerreiro"){
    attack = "Espada"
}

else if(type === "Monge"){
    attack = "Artes Marciais"
}

else if(type === "Ninja"){
    attack = "Shuriken"
}

aventura.atacar()
console.log(heroi)