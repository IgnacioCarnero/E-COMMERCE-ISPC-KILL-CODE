import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) {}

  openModal(content: any): void {
    this.modalService.open(content);
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }
}

