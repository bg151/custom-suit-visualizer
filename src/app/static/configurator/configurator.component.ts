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
  }]; //Sleeve lining not visible on visualizer so its not in POC

  Options = [{
    name: 'Lapel',
    url : './assets/visual/notch.jpg'
  },{
    name: 'Coat Fit', //slim or executive
    url : './assets/visual/slim_coat.jpg'
  },{
    name: 'Coat Type', //Single or double 
    url : './assets/single_2.png'
  },{
    name: 'Pant Fit', //slim
    url : './assets/pants_slim.png'
  },{
    name: 'Pant Type', // double pleat
    url : './assets/pants_flat.png'
  }];

  Upgrades = [{
    name: 'Lapel Stiching',
    url : './assets/fabrics.png'
  },{
    name: 'Slanted Pockets', //slim or executive
    url : './assets/visual/slim_fit_coat.jpg'
  },{
    name: 'Functional Button Holes', //Single or double 
    url : './assets/lining.png'
  },{
    name: 'Ticket Pocket', //slim
    url : './assets/lining.png'
  },{
    name: 'Pant Type', // double pleat
    url : './assets/lining.png'
  }];

  toggleJacket() {
    this.showJacket = !this.showJacket;
    this.inside = false;
  }

  toggleVest() {
    this.showVest = !this.showVest;
    this.inside = false;
  }

  showFabrics() {
    this.showFabricSection = !this.showFabricSection;
    this.showOptionSection = false;
    this.DrawerItems = [];
  }

  showOptions() {
    this.showOptionSection = !this.showOptionSection;
    this.showFabricSection = false;
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
    } else if (str === 'lapel'){
      this.hideModel = true;
      this.DrawerItems = [{
        name : 'Notch',
        code : '',
        url  : './assets/visual/notch.jpg'
      },{
        name : 'Peak',
        code : '',
        url  : './assets/visual/peak.jpg'
      }];
    } else if (str === 'coat fit'){
      this.hideModel = true;
      this.DrawerItems = [{
        name : 'Extreme Slim',
        code : '',
        url  : './assets/visual/extreme_slim_coat.jpg'
      },{
        name : 'Slim',
        code : '',
        url  : './assets/visual/slim_coat.jpg'
      },{
        name : 'Executive',
        code : '',
        url  : './assets/visual/executive_coat.jpg'
      }];
    }else if (str === 'coat type'){
      this.hideModel = true;
      this.DrawerItems = [{
        name : 'Single Breasted',
        code : '',
        url  : './assets/single_2.png'
      },{
        name : 'Double Breasted',
        code : '',
        url  : './assets/double_2.png'
      }];
    }else if (str === 'pant fit'){
      this.hideModel = true;
      this.DrawerItems = [{
        name : 'Single Breasted',
        code : '',
        url  : './assets/pants_regular.png'
      },{
        name : 'Double Breasted',
        code : '',
        url  : './assets/pants_slim.png'
      }];
    }else if (str === 'pant type'){
      this.hideModel = true;
      this.DrawerItems = [{
        name : 'Flat Front',
        code : '',
        url  : './assets/pants_flat.png'
      },{
        name : 'Single Pleat',
        code : '',
        url  : './assets/pants_single.jpg'
      },{
        name : 'Double Pleat',
        code : '',
        url  : './assets/pants_double.jpg'
      }];
    }
     
    this.DrawerItemType = string;

  }

  AddToVisualizer (object : object) {

    let value = object.value.toLowerCase();
    let type = object.type.toLowerCase();
    if (type === 'coat type') {
      let split =value.split(' ');
      this.jacketType = split[0]
    }
    if (type === 'jacket & pants' ) {
      this.suitColor = value;   
    }
    if (type === 'jacket & pants' || type === 'coat type' ){
      setTimeout(function (scope) {
        console.log(scope)
        scope.showModel = true;
      },500, this) 

      if (value == 'black' || value == 'charcoal' || value == 'blue') this.suitColor = value;   
      this.inside = false;
      this.sleevesUrl = '../../../assets/visual/sleeves_'+this.suitColor+'.png';
      this.jacketUrl = '../../../assets/visual/jacket_'+this.jacketType+'_top_'+this.suitColor+'.png';
      this.jacketBottomUrl = ' ../../../assets/visual/jacket_'+this.jacketType+'_bottom_'+this.suitColor+'.png';
      this.pantsUrl = '../../../assets/visual/pants_'+this.suitColor+'.png';
      this.beltUrl = '../../../assets/visual/belt_'+this.suitColor+'.png';
      this.neckUrl = '../../../assets/visual/neck_'+this.suitColor+'.png';
      this.vestTop = '../../../assets/visual/vest_top_'+this.suitColor+'.png';
      this.vestBottom = '../../../assets/visual/vest_bottom_'+this.suitColor+'.png';
    } else if (type === 'body lining'){
      this.inside = true;
      this.showModel = false;
      this.showJacket = true;
      this.liningTopUrl = '../../../assets/visual/lining_top_'+value+'.png';
      this.liningBottomUrl = '../../../assets/visual/lining_bottom_'+value+'.png';
    }
    console.log(this.jacketUrl , this.jacketBottomUrl)
  }


  constructor() {
    this.showJacket = true;
    this.inside = false;
    this.drawerClass = '';
    this.DrawerItemType = '';
    this.DrawerItems = [];
    this.showFabricSection = false;
    this.showOptionSection = true;
    this.jacketType= 'single'
    this.showVest = true;
    this.suitColor = 'blue';
    //for view of body lining
    this.showModel = true;
    //setup default garment
    this.vestTop = '../../../assets/visual/vest_top_blue.png';
    this.vestBottom = '../../../assets/visual/vest_bottom_blue.png';
    this.jacketUrl = '../../../assets/visual/jacket_single_top_blue.png';
    this.sleevesUrl = '../../../assets/visual/sleeves_blue.png';
    this.jacketBottomUrl = ' ../../../assets/visual/jacket_single_bottom_blue.png';
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

