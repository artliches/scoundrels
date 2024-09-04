import { Component, OnInit, ViewChild } from '@angular/core';
import { RandomNumberService } from '../../_services/random-number.service';
import { BEAST_AFFINITY, BEAST_FORMS, BUILD, DEMON_NAMES, DEVIL_DESIRES, DEVIL_ENTRANCES, DEVIL_FORM, GODS, HORROR_AFFINITY, HORROR_FORMS, HUMAN_AFFINITY, LOOK, SKIN_TONE, TYCHEROSI, WORSHIP } from '../../assets/descriptions.constants';

@Component({
  selector: 'app-devil-generator',
  standalone: true,
  imports: [],
  templateUrl: './devil-generator.component.html',
  styleUrl: './devil-generator.component.scss'
})
export class DevilGeneratorComponent implements OnInit {
  @ViewChild('identityClip') identityClip: any;
  @ViewChild('looksClip') looksClip: any;
  @ViewChild('desireClip') goalsClip: any;
  
  constructor(
    private randomNumber: RandomNumberService,
  ) {}
  whatTheme: string = 'dusk';
  clipboard: any = '';

  beastFormObj = {
    descrip: '',
    prevValue: -1
  };

  desiresObj = {
    descrip: '',
    prevValue: -1
  };

  formObj = {
    descrip: '',
    prevValue: -1
  };

  horrorFormObj = {
    descrip: '',
    prevValue: -1
  };

  humanBuildObj = {
    descrip: '',
    prevValue: -1
  };

  humanLookObj = {
    descrip: '',
    prevValue: -1
  };

  strangeFeatures = {
    descrip: '',
    prevValue: -1
  };

  nameObj = {
    descrip: '',
    prevValue: -1
  };

  introObj = {
    descrip: '',
    prevValue: -1
  };

  titleObj = {
    descrip: '',
    prevValue: -1
  };

  skinObj = {
    descrip: '',
    prevValue: -1
  };

  affinityObj = {
    descrip: '',
    prevValue: -1
  };

  tycherosiObj = {
    descrip: '',
    prevValue: -1
  };

  worshipObj = {
    descrip: '',
    prevValue: -1
  };

  ngOnInit(): void {
      this.rerollAll();
  }

  copyToClipboard() {
    this.clipboard = 
      this.identityClip.nativeElement.innerText +
      this.looksClip.nativeElement.innerText +
      this.goalsClip.nativeElement.innerText +

    navigator.clipboard.writeText(this.clipboard);
  }

  rerollAll() {
    this.rerollName();
    this.rerollTitle();
    this.rerollIntro();
    this.rerollForm();
    this.rerollDesires();
    this.rerollWorship();
  }

  rerollBeastForm() {
    const randNum = this.getRandomNum(BEAST_FORMS, this.beastFormObj);
    this.beastFormObj.descrip = BEAST_FORMS[randNum];
    this.beastFormObj.prevValue = randNum;
  }

  rerollDesires() {
    const randNum = this.getRandomNum(DEVIL_DESIRES, this.desiresObj);
    this.desiresObj.descrip = DEVIL_DESIRES[randNum];
    this.desiresObj.prevValue = randNum;
  }

  rerollName() {
    const randNum = this.getRandomNum(DEMON_NAMES, this.nameObj);
    this.nameObj.descrip = DEMON_NAMES[randNum];
    this.nameObj.prevValue = randNum;
  }

  rerollIntro() {
    const randNum = this.getRandomNum(DEVIL_ENTRANCES, this.introObj);
    this.introObj.descrip = DEVIL_ENTRANCES[randNum];
    this.introObj.prevValue = randNum;
  }

  rerollTitle() {
    const randNum = this.getRandomNum(GODS, this.titleObj);
    this.titleObj.descrip = GODS[randNum];
    this.titleObj.prevValue = randNum;
  }

  rerollForm() {
    const randNum = this.getRandomNum(DEVIL_FORM, this.formObj);
    this.formObj.descrip = DEVIL_FORM[randNum];
    this.formObj.prevValue = randNum;
    if (this.formObj.descrip === 'human') {
      this.rerollHumanBuild();
      this.rerollHumanLook();
      this.rerollSkin();
      this.rerollTycherosiDistinguish();
      this.rerollAffinity('human');
    } else if (this.formObj.descrip === 'beast') {
      this.rerollBeastForm();
      this.rerollAffinity('beast');
    } else {
      this.rerollHorrorForm();
      this.rerollAffinity();
    }
  }

  rerollHorrorForm() {
    const randNum = this.getRandomNum(HORROR_FORMS, this.horrorFormObj);
    this.horrorFormObj.descrip = HORROR_FORMS[randNum];
    this.horrorFormObj.prevValue = randNum;
  }

  rerollHumanBuild() {
    const randNum = this.getRandomNum(BUILD, this.humanBuildObj);
    this.humanBuildObj.descrip = BUILD[randNum];
    this.humanBuildObj.prevValue = randNum;
  }

  rerollHumanLook() {
    const randNum = this.getRandomNum(LOOK, this.humanLookObj);
    this.humanLookObj.descrip = LOOK[randNum];
    this.humanLookObj.prevValue = randNum;
  }

  rerollSkin() {
    const randNum = this.getRandomNum(SKIN_TONE, this.skinObj);
    this.skinObj.descrip = SKIN_TONE[randNum];
    this.skinObj.prevValue = randNum;
  }

  rerollWorship() {
    const randNum = this.getRandomNum(WORSHIP, this.worshipObj);
    this.worshipObj.descrip = WORSHIP[randNum];
    this.worshipObj.prevValue = randNum;
  }

  rerollAffinity(formType?: string) {
    const affinityArray = formType === 'human' ? HUMAN_AFFINITY : formType === 'beast' ? BEAST_AFFINITY : HORROR_AFFINITY;
    const randNum = this.getRandomNum(affinityArray, this.affinityObj);
    this.affinityObj.descrip = affinityArray[randNum];
    this.affinityObj.prevValue = randNum;
  }

  rerollTycherosiDistinguish() {
    const randNum = this.getRandomNum(TYCHEROSI, this.tycherosiObj);
    this.tycherosiObj.descrip = TYCHEROSI[randNum];
    this.tycherosiObj.prevValue = randNum;
  }

  private getRandomNum(array: Array<any>, infoObj: {descrip: string, prevValue: number}) {
    return this.randomNumber.getRandomNumber(0, array.length, infoObj.prevValue);
  }
}
