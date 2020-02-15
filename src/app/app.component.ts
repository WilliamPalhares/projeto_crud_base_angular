import { ClienteService } from './services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { PaisService } from './services/pais.service';
import { Cliente } from './models/cliente';
import { FormGroup, FormControl } from '@angular/forms';
import { Pais } from './models/pais';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formCliente: FormGroup;
  clientes = [];
  paises = [];
  private cliente: Cliente = new Cliente();
  
  constructor(private clienteService: ClienteService,
              private paisService: PaisService) { }

  ngOnInit() {
    this.consultarPais();
    this.consultar();
    this.createForm(new Cliente);
  }

  consultar() {
    this.clienteService.consultar()
      .then(dados => {
        this.clientes = dados;
      })
  }

  consultarPais() {
    this.paisService.consultar()
      .then(dados => {
        this.paises = dados;
      })
  }

  adicionar(cliente: Cliente) {
    this.clienteService.adicionar(cliente)
      .then(cliente => {
        alert(`Cliente "${cliente.nome}" adicionada com codigo ${cliente.id}`);
        this.consultar();
      });
  }

  excluir(id: number) {
    this.clienteService.excluir(id)
      .then(() => {
        alert('Cliente excluido com sucesso!');
        this.consultar();
      });

  }

  atualizar(cliente: any) {
    this.clienteService.atualizar(cliente)
      .then(() => {
        alert('Cliente alterado com sucesso!');
      });
  }

  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      paisId: new FormControl(cliente.paisId),
    })
  }

  onSubmit() {
    this.cliente = new Cliente(this.formCliente.value);
    console.log(this.cliente)

    this.adicionar(this.cliente);
  }

}
