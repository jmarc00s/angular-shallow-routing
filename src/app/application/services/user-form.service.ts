import { Injectable, inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role, User } from '../model';

@Injectable()
export class UserFormService {
  private _formBuilder = inject(FormBuilder);

  initializeForm(predefinedRole: Role = Role.Admin): FormGroup {
    return this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: this._formBuilder.nonNullable.control<Role>(predefinedRole, [Validators.required]),
    });
  }
}
