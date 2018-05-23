import { Component, OnInit,Input } from '@angular/core';

import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'anms-product',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})

export class ConfiguratorComponent{
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  Styles = [{
    name: 'Jacket & Pants',
    url : './assets/fabrics.png'
  },{
    name: 'Body Lining',
    url : './assets/lining.png'
  }];

  toggleJacket() {
    this.visible = !this.visible;
    this.inside = false;
  }

  toggleVest() {
    this.showVest = !this.showVest;
    this.inside = false;
  }

  showFabrics() {
    this.showFabricSection = !this.showFabricSection;
    this.DrawerItems = [];
  }

  PopulateDrawer(string : string){
    console.log(string)
    let str = string.toLowerCase()
    if (str === 'jacket & pants') {
      this.DrawerItems = [{
        name : 'Black',
        code : '0021071',
        url: './assets/visual/black.jpg'
      },{
        name : 'Charcoal',
        code : '5000873',
        url: './assets/visual/charcoal.jpg'
      },{
        name : 'Blue',
        code : '002092B1',
        url: './assets/visual/blue.jpg'
      }];

    }else if (str === 'body lining'){
      this.hideModel = true;
      this.DrawerItems = [{
        name : 'Crimson',
        code : 'FLL624-022',
        url  : './assets/visual/crimson.jpg'
      },{
        name : 'Cream',
        code : '500-071',
        url  : './assets/visual/cream.jpg'
      },{
        name : 'Navy',
        code : '5030372',
        url  : './assets/visual/navy.jpg'
      }];
    } 
     
    this.DrawerItemType = string;

  }

  AddToVisualizer (object : object) {

    let value = object.value.toLowerCase();
    let type = object.type.toLowerCase();

    if (type === 'jacket & pants'){
      setTimeout(function (scope) {
        console.log(scope)
        scope.showModel = true;
      },500, this)      
      this.inside = false;
      this.jacketUrl = '../../../assets/visual/jacket_'+value+'.png';
      this.sleevesUrl = '../../../assets/visual/sleeves_'+value+'.png';
      this.jacketBottomUrl = ' ../../../assets/visual/jacket-bottom_'+value+'.png';
      this.pantsUrl = '../../../assets/visual/pants_'+value+'.png';
      this.beltUrl = '../../../assets/visual/belt_'+value+'.png';
      this.neckUrl = '../../../assets/visual/neck_'+value+'.png';
      this.vestTop = '../../../assets/visual/vest_top_'+value+'.png';
      this.vestBottom = '../../../assets/visual/vest_bottom_'+value+'.png';
    } else if (type === 'body lining'){
      this.inside = true;
      this.showModel = false;
      this.visible = true;
      this.liningTopUrl = '../../../assets/visual/lining_top_'+value+'.png';
      this.liningBottomUrl = '../../../assets/visual/lining_bottom_'+value+'.png';
    }
    
  }

  constructor() {
    this.visible = true;
    this.inside = false;
    this.drawerClass = '';
    this.DrawerItemType = '';
    this.DrawerItems = [];
    this.showFabricSection = true;
    this.showVest = true;
    //for view of body lining
    this.showModel = true;
    //setup default garment
    this.vestTop = '../../../assets/visual/vest_top_blue.png';
    this.vestBottom = '../../../assets/visual/vest_bottom_blue.png';
    this.jacketUrl = '../../../assets/visual/jacket_blue.png';
    this.sleevesUrl = '../../../assets/visual/sleeves_blue.png';
    this.jacketBottomUrl = ' ../../../assets/visual/jacket-bottom_blue.png';
    this.pantsUrl = '../../../assets/visual/pants_blue.png';
    this.beltUrl = '../../../assets/visual/belt_blue.png';
    //lining defaults
    this.neckUrl = '../../../assets/visual/neck_navy.png';
    this.liningTopUrl = '../../../assets/visual/lining_top_navy.png';
    this.liningBottomUrl = '../../../assets/visual/lining_bottom_navy.png';

    setTimeout(function (scope) {
      document.getElementById('visualizer').style.display = 'block'
    },700) 
    //
  }

  ngOnInit() {}
}

