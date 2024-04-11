import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormService, UserService } from '../../../application/services';
import { InputComponent } from '../../components/input/input.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ButtonComponent } from '../../components/button/button.component';
import { User } from '../../../application/model';
import { take } from 'rxjs';
import { ID_PARAMETER } from '../../../routes.path';

@Component({
  standalone: true,
  imports: [ModalComponent, InputComponent, ReactiveFormsModule, CommonModule, ButtonComponent],
  providers: [Location, UserFormService],
  template: ` <app-modal title="Add new admin" (onClose)="handleClose()">
    <form [formGroup]="form" class="flex flex-col gap-4 w-full" (ngSubmit)="handleSubmit()">
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
      <app-button type="submit" variant="primary" [disabled]="form.invalid">Save</app-button>
    </form>
  </app-modal>`,
})
export class AdminUserComponent implements OnInit {
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  private _formService = inject(UserFormService);
  private _userService = inject(UserService);

  form!: FormGroup;

  get nameControl(): AbstractControl {
    return this.form.controls['name'];
  }

  get emailControl(): AbstractControl {
    return this.form.controls['email'];
  }

  ngOnInit(): void {
    this.form = this._formService.initializeForm();
    const userId = this._activatedRoute.snapshot.params[ID_PARAMETER];

    if (userId) {
      this.getUserForEdition(userId);
    }
  }

  handleClose(): void {
    this._router.navigate([``]);
  }

  handleSubmit(): void {
    const user = this.form.value as User;

    this._userService
      .addUser(user)
      .pipe(take(1))
      .subscribe((created) => {
        console.log('user:::', created);
        this.handleClose();
      });
  }

  private getUserForEdition(userId: User['id']): void {
    this._userService
      .getById(userId)
      .pipe(take(1))
      .subscribe((user) => {
        this.form.patchValue(user);
      });
  }
}
