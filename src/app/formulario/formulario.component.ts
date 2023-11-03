import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';

  isFormValid: boolean = false;

  datos: any[] = [];

  constructor() {}

  checkFormValidity() {
    this.isFormValid = this.nombre.trim() !== '' && this.email.trim() !== '';
  }

  onSubmit() {
    if (confirm('¿Estás seguro de enviar el formulario?')) {
      const data = {
        Nombre: this.nombre,
        Email: this.email
      };
      this.datos.push(data);
      this.resetForm();
      this.openNewWindow();
    }
  }

  resetForm() {
    this.nombre = '';
    this.email = '';
    this.isFormValid = false;
  }

  openNewWindow() {
    const newWindow = window.open('/visualizacion', '_blank');
    if (newWindow) {
      newWindow.onload = () => {
        newWindow.postMessage(this.datos, '*');
      };
    } else {
      alert('El navegador ha bloqueado la apertura de una nueva ventana. Por favor, permite las ventanas emergentes para este sitio.');
    }
  }
}
