import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusable-material';

  supportedLanguages = ['en', 'ar'];
  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en');

  }
  ngOnInit(): void {
  this.translate.addLangs(['en', 'ar']);
  }
}
