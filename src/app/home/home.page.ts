import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isSingleColumn = false; // Estado de vista (una columna o tres columnas)
  sortOption = 'most-searched'; // Opción de ordenación
  subjects = [
    { name: 'ÁLGEBRA I', image: 'assets/algebra.jpg' },
    { name: 'DERECHO CIVIL', image: 'assets/derecho-civil.jpg' },
    { name: 'ANÁLISIS II', image: 'assets/analisis-ii.jpg' },
    { name: 'QUÍMICA', image: 'assets/quimica.jpg' },
    { name: 'FÍSICA II', image: 'assets/fisica-ii.png' },
    { name: 'TEOLOGÍA', image: 'assets/teologia.jpg' },
    { name: 'PROGRAMACIÓN', image: 'assets/programacion.jpg' },
    { name: 'MATE FINANCIERAS', image: 'assets/mate-financieras.png' },
    { name: 'CONTABILIDAD', image: 'assets/contabilidad.png' }
  ];

  constructor(private navCtrl: NavController) {}

  toggleView() {
    this.isSingleColumn = !this.isSingleColumn;
  }

  openSubject(subject: any) {
    console.log('Seleccionaste la materia:', subject.name);
    this.navCtrl.navigateForward(`/subject/${subject.name.toLowerCase().replace(' ', '-')}`);
  }

  segmentChanged(event: any) {
    console.log('Segmento seleccionado:', event.detail.value);
    // Aquí puedes manejar el segmento seleccionado y actualizar la lista si es necesario
  }

  // Devuelve las materias ordenadas
  getSortedSubjects() {
    if (this.sortOption === 'alphabetical') {
      return this.subjects.sort((a, b) => a.name.localeCompare(b.name));
    }
    return this.subjects; // Default "Más buscadas" (sin ordenar)
  }

  // Genera las filas basadas en la vista seleccionada
  getRows() {
    const sortedSubjects = this.getSortedSubjects();
    const rows = [];
    for (let i = 0; i < sortedSubjects.length; i += this.isSingleColumn ? 1 : 3) {
      rows.push(sortedSubjects.slice(i, i + (this.isSingleColumn ? 1 : 3)));
    }
    return rows;
  }
}
