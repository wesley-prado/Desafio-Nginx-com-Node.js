class List{
    constructor(people = []){
        this.people = people
    }

    build(){
        let html = `
            <h1>Full Cycle Rocks!</h1>
            <p>Para inserir um novo registro no banco de dados, use o endpoint '/insert/:name'.</p>
            <p>Substitua ':name' pelo nome que deseja inserir. Por exemplo, '/insert/John'.</p><br/>
            <h2>Pessoas:</h2>
            <ol>
        `;

        const list = this.people.map((person) => `<li>${person.name}</li>`);

        html += list.join('') + '</ol>';

        return html;
    }
}

module.exports = List;