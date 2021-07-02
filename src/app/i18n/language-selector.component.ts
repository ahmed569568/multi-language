import { SharedService } from './../@shared/services/shared.service';
import { Component, OnInit, Input } from '@angular/core';

import { I18nService } from './i18n.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  @Input() inNavbar = false;
  @Input() menuClass = '';

  constructor(private i18nService: I18nService, private sharedService: SharedService) {}

  ngOnInit() {}

  setLanguage(language: string) {
    this.i18nService.language = language;
    this.sharedService.language.next(language);
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
}
