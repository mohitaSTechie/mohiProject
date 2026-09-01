import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { News } from './news/news';
import { Profile } from './profile/profile';
import { NgClass } from '@angular/common';

@Component({
  imports: [Home, News, Profile, NgClass],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mohi-project');
  protected readonly activeSection = signal<'home' | 'news' | 'profile'>('home');

  profileMenuOpen = false;
  mobileMenuOpen = false;
}
