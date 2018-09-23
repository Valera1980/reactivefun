import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
   
  currentLang:string = 'en';
  
  constructor(private translate: TranslateService) {
    this.translate.use(this.currentLang);
   }

  ngOnInit() {
    // {
    //   "input": "./lang",
    //   "glob": "*.json",
    //   "output": "lang"
    // }
  }
  setEnglish(){
     this.currentLang = 'en';
     this.translate.use(this.currentLang);
  }
  setRu(){
      this.currentLang = 'ru';
      this.translate.use(this.currentLang);
  }

}
