import { Validators } from '@angular/forms';

export const ValidatorInput = [
  Validators.required,
  Validators.minLength(5),
  Validators.maxLength(40),
];
