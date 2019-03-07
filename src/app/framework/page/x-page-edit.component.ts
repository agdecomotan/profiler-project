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
        this.alertMessage = this.editMode ? this.modelName + ' updated successfully.' : this.modelName + ' added successfully.';
        this.showDialog();
    }

    showDeleted() {
        this.alertMessage = this.modelName + ' deleted successfully.';
        this.showDialog();
    }

    showValidationError() {
        this.alertMessage = 'Error: Some fields are empty.';
        this.showDialog();
    }

    showError() {
        this.alertMessage = 'Error encountered.';
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
