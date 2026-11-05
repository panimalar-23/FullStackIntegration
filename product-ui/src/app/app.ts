import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  product = signal<any>(null);
  loading = signal(false);
  error = signal('');

  async getProduct() {
    this.loading.set(true);
    this.error.set('');

    try {
      const response = await fetch('http://localhost:5026/api/products/1');

      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }

      const data = await response.json();
      this.product.set(data);

    } catch (error) {
      this.error.set('Unable to load product. Please try again.');
      console.error(error);

    } finally {
      this.loading.set(false);
    }
  }
}