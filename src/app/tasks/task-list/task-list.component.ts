import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Tarea } from '../../interfaces/task.interface';  // Importar la interfaz Tarea

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tareas: Tarea[] = [];  // Lista de tareas
  columnas: string[] = ['id', 'nombreTarea', 'fechaLimite', 'personaAsociada', 'acciones'];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.cargarTareas();  // Cargar las tareas al inicializar el componente
  }

  // Método para cargar todas las tareas desde el API
  cargarTareas(): void {
    this.taskService.getTareas().subscribe(
      (data: Tarea[]) => {
        this.tareas = data;
      },
      (error) => {
        console.error('Error al cargar las tareas:', error);
      }
    );
  }

  // Método para marcar una tarea como completada
  marcarComoCompletada(id: number): void {
    this.taskService.borrarTarea(id).subscribe(
      () => {
        console.log('Tarea marcada como completada');
        this.tareas = this.tareas.filter(tarea => tarea.id !== id);  // Actualizar la lista de tareas
      },
      (error) => {
        console.error('Error al marcar la tarea como completada:', error);
      }
    );
  }

  // Método para filtrar las tareas por estado
  filtrar(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; // Asegúrate de que es un elemento HTML
    const estado = selectElement.value; // Obtiene el valor del select
  
    if (estado) {
      this.taskService.getTareasPorEstado(estado).subscribe(
        (data: Tarea[]) => {
          this.tareas = data;
        },
        (error) => {
          console.error('Error al filtrar las tareas:', error);
        }
      );
    } else {
      this.cargarTareas();  // Si no hay estado, recargar todas las tareas
    }
  }
}
