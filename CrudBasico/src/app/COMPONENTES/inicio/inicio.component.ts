import { Component, OnInit } from '@angular/core';
import {ProductoService, Producto} from '../../SERVICES/producto.service';
import { Router} from '@angular/router';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //varibale
  ListarEquipo: Producto[];

  constructor(private EquipoService:ProductoService, private router:Router) { 
    /*
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    */
  }

  ngOnInit(): void {
    this.listarEquipo();
  }


  listarEquipo()
  {
    console.log("ahora estoy en el tipescript")
    this.EquipoService.getPersonas().subscribe(
      res=>{
       console.log(res);
      // console.log(res.publicationess);
        this.ListarEquipo=<any>res.publicationess;
      },
      err => 
      console.log(err)
    );
  }


  eliminar(id:string)
  {
    this.EquipoService.deletePersona(id).subscribe(
      res=>{
     console.log(res);
       this.listarEquipo();
       this.router.navigate(['/inicio/'])
      },
      err=>  console.log(err)
      );
  }

  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
  }



}
