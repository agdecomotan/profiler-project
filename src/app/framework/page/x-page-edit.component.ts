import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

export class XPageEditComponent {
    @ViewChild('actionsTemplate') actionsTemplate: TemplateRef<any>;
    @ViewChild('alertTemplate') alertTemplate: TemplateRef<any>;

    editMode = false;
    editId = '';
    reorderable = true;
    modelName = '';
    pageTitle = '';
    currentModel;

    confirmModal: NgbModalRef;
    alertMessage: string;

    constructor(public modalService: NgbModal,
                public activatedRoute: ActivatedRoute,
                public name: string) {
        this.editId = this.activatedRoute.snapshot.queryParams['id'];
        this.editMode = this.editId !== undefined ? true : false;
        this.modelName = name;
        this.pageTitle = this.editMode ? this.modelName + ' Edit' : this.modelName + ' Entry';
    }

    showSuccess() {
        this.showMessage(this.editMode ? this.modelName + ' updated successfully.' : this.modelName + ' added successfully.');
    }

    showDeleted() {
        this.showMessage(this.modelName + ' deleted successfully.');
    }

    showValidationError() {
        this.showMessage('Error: Some fields are empty.');
    }

    showError() {
        this.showMessage('Error encountered.');
    }

    showMessage(message) {
        this.alertMessage = message;
        this.showDialog();
    }

    showDialog() {
        this.modalService.open(this.alertTemplate);
    }

    confirmDelete(value, dialog) {
        this.confirmModal = this.modalService.open(dialog);
        this.currentModel = value;
    }
}
