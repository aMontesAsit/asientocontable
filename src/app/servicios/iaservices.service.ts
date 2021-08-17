import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IaservicesService {

  private URL: String = environment.URL;

  constructor(private http: HttpClient, private route: Router) { }

  getConceptoGrupo(tabla: String, padre: String = "0", descripcion: String = "") {
    return this.http.get(`${this.URL}/api/concepto-grupos?tabla=${tabla}&padre=${padre}&descripcion=${descripcion}`)
  }

  getPrediccion(codigo: any) {

    return this.http.get(`${environment.URLIA}/?c_clave_prod_serv=${codigo}`)
  }
}