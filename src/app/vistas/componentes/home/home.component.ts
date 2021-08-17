import { Component, OnInit } from '@angular/core';
import { IaservicesService } from 'src/app/servicios/iaservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tipos: any[] = [];
  division: any[] = [];
  grupos: any[] = [];
  clases: any[] = [];
  elemento: any[] = [];
  rsultado_busqueda: any[] = [];
  resultado_probabilidad: any[] = [];

  padre: any
  padre_division: any
  padre_grupo: any
  padre_clase: any
  descripcion: any

  constructor(private servicioSat: IaservicesService) { }

  ngOnInit(): void {
    this.obtenerTipo()
  }

  obtenerTipo() {
    console.log("obteniendo tipos...");
    
    this.servicioSat.getConceptoGrupo("tipo", "", "").subscribe((response: any) => {
      this.tipos = response.data
      this.rsultado_busqueda = []
      this.resultado_probabilidad = []
    }, erro => {
      console.log(erro);
    })
  }

  obtenerDivision(){
    this.servicioSat.getConceptoGrupo("division", this.padre, "").subscribe((response: any) => {
      this.division = response.data
      this.rsultado_busqueda = []
      this.resultado_probabilidad = []
    }, erro => {
      console.log(erro);
    })
  }

  obtenerGrupo(){
    this.servicioSat.getConceptoGrupo("grupo", this.padre_division, "").subscribe((response: any) => {
      this.grupos = response.data
      this.rsultado_busqueda = []
      this.resultado_probabilidad = []
    }, erro => {
      console.log(erro);
    })
  }

  obtenerClase() {
    this.servicioSat.getConceptoGrupo("clase", this.padre_grupo, "").subscribe((response: any) => {
      this.clases = response.data
      this.rsultado_busqueda = []
      this.resultado_probabilidad = []
    }, erro => {
      console.log(erro);
    })
  }

  busqueda() {
    this.servicioSat.getConceptoGrupo("elemento", this.padre_clase, this.descripcion).subscribe((response: any) => {
      this.rsultado_busqueda = response.data
    }, erro => {
      console.log(erro);
    })
  }

  cambio_padre(value: any) {
    this.padre = value.value
    this.obtenerDivision()
    this.grupos = [];
    this.clases = [];
  }

  cambio_padre_division(value: any) {
    this.padre_division = value.value
    this.obtenerGrupo()
    this.clases = [];
  }

  cambio_padre_grupo(value: any) {
    this.padre_grupo = value.value
    this.obtenerClase()
  }


  cambio_padre_clase(value: any) {
    this.padre_clase = value.value
  }

  teclado(value: any) : void {
    this.descripcion = value.value
  }

  btn_buscar() {
    this.busqueda()
  }

  obtener_prediccion(obj: any) {
    this.servicioSat.getPrediccion(obj.codigo.toString()).subscribe((response: any) => {
      this.resultado_probabilidad = response;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}
