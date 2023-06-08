import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalElement: HTMLElement | null = null;

  setModalElement(element: HTMLElement): void {
    this.modalElement = element;
  }

  closeModal(): void {
    if (this.modalElement) {
      this.modalElement.classList.remove('show');
      this.modalElement.style.display = 'none';
      const backdropElement = document.getElementsByClassName('modal-backdrop')[0];
      if (backdropElement) {
        backdropElement.remove();
      }
    }
  }
}
