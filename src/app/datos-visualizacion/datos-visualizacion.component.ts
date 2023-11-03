import { Component, Input, NgZone } from '@angular/core';

@Component({
  selector: 'app-datos-visualizacion',
  templateUrl: './datos-visualizacion.component.html',
  styleUrls: ['./datos-visualizacion.component.css']
})
export class DatosVisualizacionComponent {
  @Input() datos: any[] = [];

  constructor(private zone: NgZone) {
    this.loadLocalStorageData(); // Cargar datos desde localStorage al iniciar el componente
  
    window.addEventListener('message', (event) => {
      this.zone.run(() => {
        if (event.data && Array.isArray(event.data)) {
          this.datos = event.data;
          this.saveLocalStorageData(); // Guardar los datos en localStorage cuando se reciben
        }
      });
    });
    this.loadLocalStorageData(); // Cargar datos desde localStorage al iniciar el componente
  }
  

  loadLocalStorageData() {
    const storedData = localStorage.getItem('visualizacionDatos');
    if (storedData) {
      this.datos = JSON.parse(storedData);
    }
  }

  saveLocalStorageData() {
    localStorage.setItem('visualizacionDatos', JSON.stringify(this.datos));
  }

  limpiarLocalStorage() {
    localStorage.removeItem('visualizacionDatos'); // Borra los datos del localStorage
    this.datos = []; // Limpia los datos en la vista
  }
}
