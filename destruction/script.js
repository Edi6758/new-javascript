const person = {
    name: "Edi",
    job: "Dev",
    parents: ['falcao', 'edivaldo']
}

//forma normal de criar variável
const namePerson = person.name

//criando variáveis por desestruturação
const { job, name } = person

//forma usada no mercado
function createUser({ name, job, parents }) {
    return {
        name,
        job,
        parents
    }
}
const edi = createUser(person)