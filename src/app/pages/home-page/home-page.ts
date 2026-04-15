import { Component } from '@angular/core';
import {HeroSectionComponent} from '../../Components/hero-section-component/hero-section-component'
import {NavBarComponent} from '../../Components/nav-bar-component/nav-bar-component'

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent,NavBarComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
