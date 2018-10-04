import { Directive, Input } from "@angular/core";
import { Validator, AbstractControl, ValidatorFn, NG_VALIDATORS } from "@angular/forms";

export function ageValidator(ageMax?: number, ageMin?: number): ValidatorFn {
    ageMax = ageMax || 100; // valeur par défaut si non défini
    return (control: AbstractControl): { [key: string]: any } => {
        if (isNaN(control.value)) {
            return {'number': { value: control.value } };
        }
        const forbidden = +control.value > ageMax;
        const baby = +control.value < ageMin;
        const result = forbidden ? { 'forbiddenAge': { value: control.value } } : ( baby ? { 'ageTooYoung': { value: control.value } } : null);
        console.log('result', result);
        return result;
    };
}

@Directive({
    selector: '[age]',
    providers: [{ provide: NG_VALIDATORS, useExisting: AgeValidatorDirective, multi: true }]
})
export class AgeValidatorDirective implements Validator {
    @Input('age-max') ageMax: number;
    @Input('age-min') ageMin: number;

    validate(control: AbstractControl): { [key: string]: any } {
        console.log('ageValidate', control);
        return ageValidator(this.ageMax, this.ageMin)(control);
    }
}
