import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

// import { BaMenuService } from '../theme';
import { MODULES_MENU } from './modules.menu';

@Component({
  selector: 'esen-modules',
  template: `
    <div class="al-main">
      <div class="al-content">
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <!--<div class="al-footer-right" translate>{{'general.created_with'}} <i class="ion-heart"></i></div>-->
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; Powered by <a href="http://www.esenyun.com" translate>ESEN</a> 2017</div>
        <!--<ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
        </ul>-->
      </div>
    </footer>
    `
})
export class ModulesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // this._menuService.updateMenuByRoutes(<Routes>MODULES_MENU);
  }
}
