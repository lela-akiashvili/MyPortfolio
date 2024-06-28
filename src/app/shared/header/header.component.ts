import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: `
    header {
      background-color: #191e39;
      color: white;
      font-family: 'Nunito', sans-serif;
      padding:1.5rem;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }
    li{
      border:1px solid;
      padding: 5px 15px; 
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
  `,
})
export class HeaderComponent {}
