import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BreedServiceService } from '../service/breed-service.service';
import { Breeds } from '../model/breeds';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {
  breed: any;
  pickedBreed: any;
  apiUrl: any;
  breedDialog = false;

  constructor(
              private breedService: BreedServiceService, 
              private primengConfig: PrimeNGConfig
              ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getBreeds();
  }

  getBreeds(){
    this.breedService.getBreeds().subscribe(res => {
      console.log(res.breeds);
      this.breed = res.breeds;
      this.apiUrl = this.breedService.apiUrl;
      console.log(this.breed);    
    });
  }

  editProduct(breeds: Breeds){
    console.log(breeds);
    this.pickedBreed = breeds;
    this.breedDialog = true;
  }

  closeDialog(){
    this.breedDialog = false;
  }

}


