import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styles: `
    header {
      background-color: #191e39;
      color: white;
      font-family: 'Nunito', sans-serif;
      padding:1.5rem 0 0 0;
    }
    ul {
      list-style: none;
      display: flex;
      gap: 1rem;
      padding:0;
      justify-content:center;
    }
    li{
      border:1px solid;
      padding: 5px 15px; 
      font-size:12.5px;
    }
    li:hover{
      cursor:pointer;
      animation:border 1.6s infinite ease-in;
    }
    @keyframes border{
      0%{
        border:1px solid  #191e39;
      }
      25%{
        border-bottom:1px solid white;
      }
      40%{
        border-bottom:1px solid white;
        border-left:1px solid white;
      }
      65%{
        border-bottom:1px solid white;
        border-left:1px solid white;
        border-top:1px solid white;
      }
      85%{
        border-bottom:1px solid white;
        border-left:1px solid white;
        border-top:1px solid white;
        border-right:1px solid white; 
      }
    }
    @media (min-width:400px){
      header{
      padding:1.5rem;
      }
      ul{
        justify-content: flex-end;
      }
      li{
        font-size:unset;
      }
    }
  `,
})
export class HeaderComponent {}
