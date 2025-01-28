import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './languages.component.html',
  styleUrls: ['../languages-info/languages.component.scss']
})
export class LanguagesComponent {
  mainLanguage = 'English';
  availableLanguages = ['English', 'Spanish', 'French', 'German', 'Chinese'];
  selectedLanguages = ['eng', 'spa', 'fra', 'deu', 'zho'];

  getLanguageIconClass(language: string): string {
    const flags: { [key: string]: string } = {
      'eng': 'fi-gb',
      'spa': 'fi-es',
      'fra': 'fi-fr',
      'deu': 'fi-de',
      'zho': 'fi-cn',
    };
    return flags[language] || 'flag-icon';
  }

}
