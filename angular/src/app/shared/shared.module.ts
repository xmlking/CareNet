import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

/* 3rd party Modules */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule],
  exports: [CommonModule, FormsModule, NgbModule],
})
export class SharedModule { }
