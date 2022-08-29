import { state } from '@angular/animations';
import { AbstractControl } from '@angular/forms';

export function UrlValidator(control: AbstractControl): { InvalidUrl:boolean } | null  {
    const reg = new RegExp('^(https?:\\/\\/)?'+'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+'((\\d{1,3}\\.){3}\\d{1,3}))'+'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+'(\\?[;&a-z\\d%_.~+=-]*)?'+'(\\#[-a-z\\d_]*)?$','i');
    const val = control.value
    let ret: { InvalidUrl:boolean } | null = null;

    if(Array.isArray(val)){
        for(const key in val) {
            const element = val[key];
            if(!reg.test(element)){
                ret = { InvalidUrl: true };
                break
            }
            ret = null;
            
        }
    }
    
    return ret;
}