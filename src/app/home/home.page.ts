import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public showArticle : boolean = false;

  constructor(private menuController: MenuController, private router: Router) {}

  closeMenu() {
    this.menuController.close();
  }

  goToArticle(genero : boolean) {
    this.showArticle = genero;
    this.closeMenu();
    this.router.navigate(['/home/articulo']);
  }
}
