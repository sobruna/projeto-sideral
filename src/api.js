fetch(`http://localhost:8080/users/all`)
    .catch((error) => console.log("Não deu: "+ error))
    .then((resposta) => resposta.json())
    .then((dados) => {console.log(dados);
});

// class App extends Component {
//     state = {
//       response: ''
//     };
  
//     componentDidMount() {
//       this.callApi()
//         .then(res => this.setState({ response: res.express }))
//         .catch(err => console.log(err));
//     }
  
//     callApi = async () => {
//       const response = await fetch('/api/mensagem');
//       const body = await response.json();
//       if (response.status !== 200) throw Error(body.message);
  
//       return body;
//     };
  
//     render() {
//       return (
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <h1 className="App-title">Welcome to React</h1>
//           </header>
//           <p className="App-intro">{this.state.response}</p>
//         </div>
//       );
//     }
//   }

// function loadScript(data) {

//     return new Promise(function(resolve, reject) {
//         const script = document.createElement("script")
        
//         script.src = data
        
//         script.onload = () => resolve(script)
//         scriptonerror = () => reject(new Error('deu ruim'))
        
//         document.head.append(script)
        
        
//     })
//     .then(() => console.log('Sucesso!: ' + data))
//     .catch(() => console.log('Deu ruim: ' + error))
// };

// loadScript("https://code.jquery.com/jquery-3.6.1.min.js");

// function carregaCep(cep) {
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//       .catch((error) =>
//         console.log(
//           `Deu erro! O Cep informado '${cep}' não foi encontrado na API`
//         )
//       )
//       .then((resposta) => resposta.json())
//       .then((dados) => {
//         //console.log(dados);
  
//         document.querySelector("#uf").value = dados.uf;
//         document.querySelector("#cidade").value = dados.localidade;
//         document.querySelector("#bairro").value = dados.bairro;
//         document.querySelector("#endereco").value = dados.logradouro;
//         document.querySelector("#nr_end").focus();
//       });
//   }