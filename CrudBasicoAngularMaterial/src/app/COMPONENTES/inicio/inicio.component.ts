import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../SERVICES/producto.service';
import { Router} from '@angular/router';
import {PeriodicElement} from '../modificar/modificar.component';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //varibale
  ListarEquipo: Producto[];
  displayedColumns:string [];
  dataSource;


  //-----------------------------------
   
  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  //----------------------------------



  constructor(private EquipoService:ProductoService, private router:Router) { 
    /*
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    */
   


  }

  ngOnInit(): void {
    this.listarEquipo();

    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
   this.dataSource = this.ELEMENT_DATA;
  }


  listarEquipo()
  {
    console.log("ahora estoy en el tipescript")
    this.EquipoService.getPersonas().subscribe(
      res=>{
       console.log(res);
      // console.log(res.publicationess);
       // this.ListarEquipo=<any>res.publicationess;
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
export interface Producto{
  id?:string;
  nombre:string;
  categoria:string;
  sabor :string,
  precio :string,
  estado :boolean
    
}
//export class TableBasicExample {
  


//}
