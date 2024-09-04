import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScoundrelGeneratorComponent } from "./scoundrel-generator/scoundrel-generator.component";
import { DevilGeneratorComponent } from "./devil-generator/devil-generator.component";
import { NgClass, TitleCasePipe } from '@angular/common';
import { ThemeService } from '../_services/theme.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScoundrelGeneratorComponent, DevilGeneratorComponent, NgClass, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  clipboard: any = '';
  copied: boolean = false;
  currentSection: string = 'scoundrel';
  whatTheme: string = 'dusk';

  @ViewChild(ScoundrelGeneratorComponent) scoundrel: any;
  @ViewChild(DevilGeneratorComponent) devil: any;

  constructor(
    private theme: ThemeService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.changeTitle();
  }

  changeTitle() {
    this.titleService.setTitle(this.currentSection === 'scoundrel' ? 'what scoundrel lurches?' : 'what devil dwells?');
  }

  copyToClipboard() {
    if (this.currentSection === 'scoundrel') {
      this.scoundrel.copyToClipboard();
    } else {
      this.devil.copyToClipboard();
    }
    this.copied = true;
  }

  swapTheme() {
    this.theme.updateTheme();
    this.theme.currentTheme.subscribe(theme => {
      this.whatTheme = theme;
      if (theme === 'pale') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#0d0d0d';
      } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = '#e6e6e6';
      }
    });
  }

  swapSection(chosenSection: string) {
    this.currentSection = chosenSection;
    this.changeTitle();
    this.copied = false;
  }
}
