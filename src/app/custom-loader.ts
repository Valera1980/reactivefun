import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";

@Injectable()
export class CustomLoader implements TranslateLoader{
    constructor(private httpLoader : HttpClient){

    }
    getTranslation(lang: string): Observable<any> {
        return this.httpLoader.get(`lang/${lang}.json`)
    }
}
