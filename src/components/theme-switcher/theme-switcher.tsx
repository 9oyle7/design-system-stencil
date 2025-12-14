// src/components/theme-switcher/theme-switcher.tsx
import { Component, State, h, Host } from '@stencil/core';

@Component({
  tag: 'theme-switcher',
  styleUrl: 'theme-switcher.css',
  shadow: true,
})
export class ThemeSwitcher {
  @State() isDark: boolean = false;

  componentWillLoad() {
    // قراءة الثيم المحفوظ من localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // إذا كان هناك ثيم محفوظ، استخدمه، وإلا استخدم تفضيلات النظام
    this.isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    this.applyTheme();
  }

  applyTheme() {
    const root = document.documentElement;
    
    if (this.isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleTheme = () => {
    this.isDark = !this.isDark;
    this.applyTheme();
  };

  render() {
    return (
      <Host>
        <button 
          class="theme-toggle-btn" 
          onClick={this.toggleTheme}
          aria-label={this.isDark ? 'التبديل إلى الوضع العادي' : 'التبديل إلى الوضع الداكن'}
        >
          {this.isDark ? (
            // أيقونة الشمس (للوضع العادي)
            <svg 
              class="icon" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
              />
            </svg>
          ) : (
            // أيقونة القمر (للوضع الداكن)
            <svg 
              class="icon" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
              />
            </svg>
          )}
        </button>
      </Host>
    );
  }
}