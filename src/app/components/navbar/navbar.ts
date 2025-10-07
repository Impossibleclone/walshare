import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-navbar',
    imports: [],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css'
})
export class Navbar {
    // protected readonly navbar = signal('shareview');
    textsomething: string = "find your next view";
    searchtext: HTMLElement | null = document.getElementById("searchtext");
    onSearch(searchValue: string) {
        if (searchValue.length > 0) {
            alert('Searching for: ' + searchValue);
        } else {
            alert('Please enter something to search.');
        }
    }
}
