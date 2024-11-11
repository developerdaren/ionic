import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss'],
})
export class ArticuloComponent  implements OnInit {
  @Input() genero: boolean = false;
     
  articliWomen =[{
    imagen: "https://calzacosta.vtexassets.com/arquivos/ids/282685/SANDALIA-JF533-DKNUDE-VISTA-1.jpg?v=638455244102900000",
    tallas:[23, 24,34,56,78],
    name: "sandalia",
    genero: "mujer",
    precio: 123444,
  },
  {
    imagen: "https://calzacosta.vtexassets.com/arquivos/ids/282685/SANDALIA-JF533-DKNUDE-VISTA-1.jpg?v=638455244102900000",
    tallas:[23, 24,34,56,78],
    name: "sandalia",
    genero: "mujer",
    precio: 123444,
  },
  {
    imagen: "https://calzacosta.vtexassets.com/arquivos/ids/282685/SANDALIA-JF533-DKNUDE-VISTA-1.jpg?v=638455244102900000",
    tallas:[23, 24,34,56,78],
    name: "sandalia",
    genero: "mujer",
    precio: 123444,
  },   {
    imagen: "https://calzacosta.vtexassets.com/arquivos/ids/282685/SANDALIA-JF533-DKNUDE-VISTA-1.jpg?v=638455244102900000",
    tallas:[23, 24,34,56,78],
    name: "sandalia",
    genero: "mujer",
    precio: 123444,
  }]

  articlimen =[{
    imagen: "https://calzacosta.vtexassets.com/arquivos/ids/282685/SANDALIA-JF533-DKNUDE-VISTA-1.jpg?v=638455244102900000",
    tallas:[23, 24,34,56,78],
    name: "sandalia",
    genero: "hombre",
    precio: 123444,
  },
  {
    imagen: "https://calzacosta.vtexassets.com/arquivos/ids/282685/SANDALIA-JF533-DKNUDE-VISTA-1.jpg?v=638455244102900000",
    tallas:[23, 24,34,56,78],
    name: "sandalia",
    genero: "hombre",
    precio: 123444,
  },
  {
    imagen: "https://calzacosta.vtexassets.com/arquivos/ids/282685/SANDALIA-JF533-DKNUDE-VISTA-1.jpg?v=638455244102900000",
    tallas:[23, 24,34,56,78],
    name: "sandalia",
    genero: "hombre",
    precio: 123444,
  },   {
    imagen: "https://calzacosta.vtexassets.com/arquivos/ids/282685/SANDALIA-JF533-DKNUDE-VISTA-1.jpg?v=638455244102900000",
    tallas:[23, 24,34,56,78],
    name: "sandalia",
    genero: "hombre",
    precio: 123444,
  }]

  constructor() { }

  ngOnInit() {}

}
