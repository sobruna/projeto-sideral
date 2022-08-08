(function() {

    let cursoslist = document.querySelector(".cursos-list");
    
    let cursos = [
        {
        titulo: "Curso 1",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus.",
        horas: "90 horas"
        },    {
        titulo: "Curso 2",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus.",
        horas: "90 horas"
        },    {
        titulo: "Curso 3",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus.",
        horas: "90 horas"
        },    {
        titulo: "Curso 4",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus.",
        horas: "90 horas"
        },    {
        titulo: "Curso 5",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus.",
        horas: "90 horas"
        },    {
        titulo: "Curso 6",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus.",
        horas: "90 horas"
        }
    ];
    
    let cursositems ="";
    
    for (let curso of cursos) {
        cursositems += '<li class="col col-sm-2">' + curso.titulo + '<br><br>' + curso.descricao + '<br><br>' + curso.horas + "</li>"
        console.log|(cursos.titulo,cursos.descricao,cursos.horas)
    };
    
    cursoslist.innerHTML = cursositems;
    })();