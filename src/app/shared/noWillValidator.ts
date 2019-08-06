import { AbstractControl } from '@angular/forms';
export function noWillValidator(control: AbstractControl) {
  const str = control.value as string;
  if (str.indexOf('Will') > -1) {
    return {
      nowill: true
    };
  } else {
    return null;
  }
}
