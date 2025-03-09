import { ProductsService } from './../../services/products.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, computed, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

numOfCart=computed(()=>{return this._ProductsService.numOfCartItem()});


constructor(private _AuthService :AuthService,
  private _Router :Router,
  private _ProductsService:ProductsService){};


enableNavbbar :boolean=false;
  ngOnInit(): void {

    this._AuthService.login.subscribe((val: any)=>{
      this.enableNavbbar= val;
      console.log("nav sub");

    });


    }

signOut(){localStorage.removeItem('token');
this._AuthService.login.next(false);
this._Router.navigate(['/login']);}

  }



