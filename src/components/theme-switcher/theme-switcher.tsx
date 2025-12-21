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
      <ds-button
        variant="soft"
        size="md"
        onClick={this.toggleTheme}
        aria-label={this.isDark ? 'التبديل إلى الوضع العادي' : 'التبديل إلى الوضع الداكن'}
      >
        <ds-icon
          iconName={this.isDark ? 'sun' : 'moon'}
          iconSize="md"
          color="success"
        />
      </ds-button>
    </Host>
  );
}
}
