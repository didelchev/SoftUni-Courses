
import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  const domainStr = domains.join('|');
  const regExp = new RegExp(`^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(${domainStr})$`);

  return (control) => {
    if (!control.value) {
      return null; 
    }

    const isInvalid = !regExp.test(control.value);
    return isInvalid ? { emailValidator: true } : null;
  };
}

