import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserFormService } from '../../../application/services';
import { InputComponent } from '../../components/input/input.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  standalone: true,
  imports: [ModalComponent, InputComponent, ReactiveFormsModule, CommonModule],
  providers: [Location, UserFormService],
  template: ` <app-modal title="Add new admin" (onClose)="handleClose()">
    <form [formGroup]="form" class="flex flex-col gap-4 w-full">
      <app-input
        [errors]="nameControl.errors"
        [required]="true"
        label="Name"
        formControlName="name"
        ngDefaultControl
      />
      <app-input
        [errors]="emailControl.errors"
        label="Email"
        [required]="true"
        formControlName="email"
        ngDefaultControl
      />
    </form>
  </app-modal>`,
})
export class AdminUserComponent implements OnInit {
  private _router = inject(Router);
  private _formService = inject(UserFormService);

  form!: FormGroup;

  get nameControl(): AbstractControl {
    return this.form.controls['name'];
  }

  get emailControl(): AbstractControl {
    return this.form.controls['email'];
  }

  ngOnInit(): void {
    this.form = this._formService.initializeForm();
  }

  handleClose(): void {
    this._router.navigate(['/']);
  }
}
