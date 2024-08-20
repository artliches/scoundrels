import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    private currThemeId = 0;
    private theme = new BehaviorSubject('dusk');
    private themeArray = [
        'dusk',
        'pale'
    ];
    currentTheme = this.theme.asObservable();

    constructor() { }

    updateTheme() {
        this.currThemeId = this.currThemeId === this.themeArray.length - 1 ?
            0 : this.currThemeId + 1;
        this.theme.next(this.themeArray[this.currThemeId]);
    }
}