import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

/** 
 * @notas
 * - Los servicios son un lugar centralizado donde tener información y métodos
 * - si un servicio es llamado en el padre y el hijo Angular solo lo crea una vez
 * - sirve para reducir lógica
 * - es mejor hacer la obtencion y manipulacion de data en los servicios que en los componentes
 * - Se pueden inyectar servicios dentro de otros servicios
 * - se pueden hacer dependencias ciclicas
 */

@Injectable()
export class DbzService {

  /**
   * @orden_clase
   * #1 Propiedades
   * #2 Getters & Setters
   * #3 Constructor
   * #4 Otros metodos
   */

    // * en guión bajo es un estandar para denotar a una propiedad privada
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 8000
        },
        {
          nombre: 'Vegeta',
          poder: 8000
        }
      ]
    
    /** 
     * @importante todos los objetos son mandados por referencia en js
     * usar @spread_operator para romper la referencia en este return
     * esto es una buena practica
    */
    get personajes(): Personaje[] {
        return [...this._personajes] // * spread_operator separa cada uno de los elementos independientes y crea un nuevo arreglo
    }

    constructor() {}
    
    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
    }
}