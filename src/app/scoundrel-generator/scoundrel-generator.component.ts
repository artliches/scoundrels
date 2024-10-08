import { Component, OnInit, ViewChild } from '@angular/core';
import { RandomNumberService } from '../../_services/random-number.service';
import { ThemeService } from '../../_services/theme.service';
import { ALIAS, BUILD, DISTINGUISH, NAMES_FIRST, GOALS, HERITAGE, INTERESTS, NAMES_LAST, LOOK, METHOD, PROFESSION, PRONOUNS_FIRST, PRONOUNS_LAST, QUIRKS, SKIN_TONE, STYLES, TRAITS, TYCHEROSI, SCOUNDREL_ENTRANCES } from '../../assets/descriptions.constants';
import { LowerCasePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-scoundrel-generator',
  standalone: true,
  imports: [LowerCasePipe, TitleCasePipe,],
  templateUrl: './scoundrel-generator.component.html',
  styleUrl: './scoundrel-generator.component.scss'
})
export class ScoundrelGeneratorComponent implements OnInit {
  constructor(
    private randomNumber: RandomNumberService,
    private theme: ThemeService,
  ) {}

  whatTheme: string = 'dusk';
  clipboard: any = '';

  aliasObj = {
    descrip: '',
    prevValue: -1,
  };

  buildObj = {
    descrip: '',
    prevValue: -1,
  };

  distinguishObj = {
    descrip: '',
    prevValue: -1,
  };

  firstNameObj = {
    descrip: '',
    prevValue: -1,
  };

  goalsObj = {
    descrip: '',
    prevValue: -1,
  };

  heritageObj = {
    descrip: '',
    prevValue: -1,
  };

  lastNameObj = {
    descrip: '',
    prevValue: -1,
  };

  firstPronounsObj = {
    descrip: '',
    prevValue: -1,
  };

  interestObj = {
    descrip: '',
    prevValue: -1,
  };

  introObj = {
    descrip: '',
    prevValue: -1,
  };

  lastPronounsObj = {
    descrip: '',
    prevValue: -1,
  };

  lookObj = {
    descrip: '',
    prevValue: -1,
  };

  methodsObj = {
    descrip: '',
    prevValue: -1,
  };

  professionObj = {
    descrip: '',
    prevValue: -1,
  };

  quirksObj = {
    descrip: '',
    prevValue: -1,
  };

  skinObj = {
    descrip: '',
    prevValue: -1,
  };

  stylesObj = {
    descrip: '',
    prevValue: -1,
  };

  traitsObj = {
    descrip: '',
    prevValue: -1,
  };

  tycherosiObj = {
    descrip: '',
    prevValue: -1,
  };

  @ViewChild('identityClip') identityClip: any;
  @ViewChild('looksClip') looksClip: any;
  @ViewChild('goalsClip') goalsClip: any;
  @ViewChild('quirksClip') quirksClip: any;


  ngOnInit(): void {
    this.rerollAll();
  }

  rerollAll() {
    this.rerollFirstName();
    this.rerollLastName();
    this.rerollAlias();
    this.rerollFirstPronouns();
    this.rerollLastPronouns();
    this.rerollLook();
    this.rerollHeritage();
    this.rerollBuild();
    this.rerollSkin();
    this.rerollDistinguish();
    this.rerollTraits();
    this.rerollStyles();
    this.rerollProfession();
    this.rerollGoals();
    this.rerollMethods();
    this.rerollInterests();
    this.rerollQuirks();
    this.rerollIntroduction();
  }

  rerollAlias() {
    const randNum = this.getRandomNum(ALIAS, this.lastNameObj);
    this.aliasObj.descrip = ALIAS[randNum];
    this.aliasObj.prevValue = randNum;
  }

  rerollBuild() {
    const randNum = this.getRandomNum(BUILD, this.buildObj);
    this.buildObj.descrip = BUILD[randNum];
    this.buildObj.prevValue = randNum;
  }

  rerollDistinguish() {
    const randNum = this.getRandomNum(DISTINGUISH, this.distinguishObj);
    this.distinguishObj.descrip = DISTINGUISH[randNum];
    this.distinguishObj.prevValue = randNum;
  }

  rerollFirstName() {
    const randNum = this.getRandomNum(NAMES_FIRST, this.firstNameObj);
    this.firstNameObj.descrip = NAMES_FIRST[randNum];
    this.firstNameObj.prevValue = randNum;
  }

  rerollGoals() {
    const randNum = this.getRandomNum(GOALS, this.goalsObj);
    this.goalsObj.descrip = GOALS[randNum];
    this.goalsObj.prevValue = randNum;
  }
  
  rerollHeritage() {
    const randNum = this.getRandomNum(HERITAGE, this.heritageObj);
    this.heritageObj.descrip = HERITAGE[randNum];
    this.heritageObj.prevValue = randNum;

    if (this.heritageObj.descrip === 'Tycheros') {
      this.rerollTycherosiDistinguish();
    }
  }

  rerollInterests() {
    const randNum = this.getRandomNum(INTERESTS, this.interestObj);
    this.interestObj.descrip = INTERESTS[randNum];
    this.interestObj.prevValue = randNum;
  }

  rerollIntroduction() {
    const randNum = this.getRandomNum(SCOUNDREL_ENTRANCES, this.introObj);
    this.introObj.descrip = SCOUNDREL_ENTRANCES[randNum];
    this.introObj.prevValue = randNum;
  }

  rerollLastName() {
    const randNum = this.getRandomNum(NAMES_LAST, this.lastNameObj);
    this.lastNameObj.descrip = NAMES_LAST[randNum];
    this.lastNameObj.prevValue = randNum;
  }

  rerollLook() {
    const randNum = this.getRandomNum(LOOK, this.lookObj);
    this.lookObj.descrip = LOOK[randNum];
    this.lookObj.prevValue = randNum;
  }

  rerollMethods() {
    const randNum = this.getRandomNum(METHOD, this.methodsObj);
    this.methodsObj.descrip = METHOD[randNum];
    this.methodsObj.prevValue = randNum;
  }

  rerollProfession() {
    const randNum = this.getRandomNum(PROFESSION, this.professionObj);
    this.professionObj.descrip = PROFESSION[randNum];
    this.professionObj.prevValue = randNum;
  }

  rerollFirstPronouns() {
    const randNum = this.getRandomNum(PRONOUNS_FIRST, this.firstPronounsObj);
    this.firstPronounsObj.descrip = PRONOUNS_FIRST[randNum];
    this.firstPronounsObj.prevValue = randNum;
  }

  rerollLastPronouns() {
    const randNum = this.getRandomNum(PRONOUNS_LAST, this.firstPronounsObj);
    this.lastPronounsObj.descrip = PRONOUNS_LAST[randNum];
    this.lastPronounsObj.prevValue = randNum;
  }

  rerollQuirks() {
    const randNum = this.getRandomNum(QUIRKS, this.quirksObj);
    this.quirksObj.descrip = QUIRKS[randNum];
    this.quirksObj.prevValue = randNum;
  }

  rerollSkin() {
    const randNum = this.getRandomNum(SKIN_TONE, this.skinObj);
    this.skinObj.descrip = SKIN_TONE[randNum];
    this.skinObj.prevValue = randNum;
  }

  rerollStyles() {
    const randNum = this.getRandomNum(STYLES, this.stylesObj);
    this.stylesObj.descrip = STYLES[randNum];
    this.stylesObj.prevValue = randNum;
  }

  rerollTraits() {
    const randNum = this.getRandomNum(TRAITS, this.traitsObj);
    this.traitsObj.descrip = TRAITS[randNum];
    this.traitsObj.prevValue = randNum;
  }

  rerollTycherosiDistinguish() {
    const randNum = this.getRandomNum(TYCHEROSI, this.tycherosiObj);
    this.tycherosiObj.descrip = TYCHEROSI[randNum];
    this.tycherosiObj.prevValue = randNum;
  }

  adjustArticle(nextWord: string) {
    const articleToReturn = nextWord.match('^[aieoAIEO].*') ? 'an' : 'a';
    return articleToReturn;
  }

  copyToClipboard() {
    this.clipboard = 
      this.identityClip.nativeElement.innerText +
      this.looksClip.nativeElement.innerText +
      this.goalsClip.nativeElement.innerText +
      this.quirksClip.nativeElement.innerText;

    navigator.clipboard.writeText(this.clipboard);
  }

  fixGenders(stringToReplace: string): string {
    if (this.firstPronounsObj.descrip === 'They') {
      return stringToReplace;
    }
    let stringToReturn = stringToReplace;
    stringToReturn = stringToReturn.replace(/(their)/g, this.firstPronounsObj.descrip === 'He' ? 'his' : 'her');
    stringToReturn = stringToReturn.replace('them', this.firstPronounsObj.descrip === 'He' ? 'him' : 'her');
    stringToReturn = stringToReturn.replace('they have', `${this.firstPronounsObj.descrip.toLowerCase()} has`);
    return stringToReturn;
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

  private getRandomNum(array: Array<any>, infoObj: {descrip: string, prevValue: number}) {
    return this.randomNumber.getRandomNumber(0, array.length, infoObj.prevValue);
  }
}
