import { FormGroup, ValidationErrors } from "@angular/forms";

export class CustomValidator{
  constructor() { }

  static mustMatch(controlName:string, matchingControlName:string): ValidationErrors | null{
    return (formGroup: FormGroup) =>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if(matchingControl.errors && !matchingControl.getError('mustMatch')){
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }

}
