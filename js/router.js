export class Router {
  routes = {}
  add(routeName, page) {
    this.routes[routeName] = page
  }
  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href) //coloque nos historico que estou mudando de pagina

    this.handle()
  }

  handle() {
    const { pathname } = window.location // pathname pega a barra para a pasta
    const route = this.routes[pathname] || this.routes[404] // pegando barra com rota
    fetch(route) // fetch busca
      .then(data => data.text()) // then executa a função passa dados e retorna o data
      .then(html => (document.querySelector('#app').innerHTML = html))
  }
}
