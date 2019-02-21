import {Component, ElementRef, Input, OnInit, TemplateRef} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
export interface IAppBrand {
  logo: string;
  primaryName: string;
  name?: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './x-nav.component.html',
  styleUrls: ['./x-nav.component.scss']
})

export class XNavComponent implements OnInit {
    @Input() model: IAppBrand;
    @Input() searchMobileEnabled: boolean;
    @Input() searchTemplate: TemplateRef<any>;

    private toggleButton: any;
    private sidebarVisible: boolean;
    confirmModal: NgbModalRef;

    constructor(private element: ElementRef) {
        //public location: Location, private element: ElementRef, private modalService: NgbModal
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];

        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    }

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }

    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }

    confirmLogout(dialog) {
        //this.confirmModal = this.modalService.open(dialog);
    }

    logout() {
        this.confirmModal.close();
    }
}
