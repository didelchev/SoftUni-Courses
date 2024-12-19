// import { ValidatorFn } from '@angular/forms';

// export function emailValidator(domains: string[]): ValidatorFn {
//   const domainStr = domains.join('|');
//   const regExp = new RegExp(`[A-Za-z0-9]{6,}@gmail\.(${domainStr})`);

//   return (control) => {
//     const isInvalid = control.value === '' || regExp.test(control.value);
//     return isInvalid ? null : { emailValidator: true };
//   };
// }

import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  const domainStr = domains.join('|');
  const regExp = new RegExp(`^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(${domainStr})$`);

  return (control) => {
    if (!control.value) {
      return null; // If empty, no validation error
    }

    const isInvalid = !regExp.test(control.value);
    return isInvalid ? { emailValidator: true } : null;
  };
}

