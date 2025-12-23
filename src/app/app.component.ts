import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sirsproject2';
  students = [
    { id: 1, name: 'Rahul', age: 22, course: 'Angular' },
    { id: 2, name: 'Amit', age: 23, course: 'React' },
    { id: 3, name: 'Sneha', age: 21, course: 'Vue' },
    { id: 4, name: 'Pooja', age: 24, course: 'Angular' },
    { id: 5, name: 'Rohit', age: 25, course: 'NodeJS' },
    { id: 6, name: 'Neha', age: 22, course: 'JavaScript' },
    { id: 7, name: 'Kiran', age: 23, course: 'TypeScript' },
    { id: 8, name: 'Priya', age: 21, course: 'HTML & CSS' },
    { id: 9, name: 'Sanket', age: 26, course: 'Bootstrap' },
    { id: 10, name: 'Anjali', age: 24, course: 'Angular' }
  ];
  products = [
    { id: 1, name: 'Samsung Galaxy S23', price: 74999, category: 'Mobile', stock: 'In Stock' },
    { id: 2, name: 'iPhone 14', price: 79999, category: 'Mobile', stock: 'In Stock' },
    { id: 3, name: 'Redmi Note 12', price: 19999, category: 'Mobile', stock: 'Out of Stock' },
    { id: 4, name: 'Realme Narzo 60', price: 17999, category: 'Mobile', stock: 'In Stock' },
    { id: 5, name: 'OnePlus Nord CE', price: 24999, category: 'Mobile', stock: 'In Stock' },
    { id: 6, name: 'Dell Inspiron', price: 55999, category: 'Laptop', stock: 'In Stock' },
    { id: 7, name: 'HP Pavilion', price: 58999, category: 'Laptop', stock: 'Out of Stock' },
    { id: 8, name: 'Boat Airdopes', price: 1999, category: 'Accessories', stock: 'In Stock' },
    { id: 9, name: 'Sony Headphones', price: 2999, category: 'Accessories', stock: 'In Stock' },
    { id: 10, name: 'MI Power Bank', price: 1499, category: 'Accessories', stock: 'In Stock' }
  ];
employees = [
    { id: 1, name: 'Gajanan', role: 'Frontend Developer', salary: 45000, city: 'Pune' },
    { id: 2, name: 'Amit', role: 'Backend Developer', salary: 50000, city: 'Mumbai' },
    { id: 3, name: 'Sneha', role: 'UI Designer', salary: 40000, city: 'Nashik' },
    { id: 4, name: 'Rohit', role: 'QA Engineer', salary: 38000, city: 'Nagpur' },
    { id: 5, name: 'Pooja', role: 'HR Executive', salary: 35000, city: 'Thane' },
    { id: 6, name: 'Kiran', role: 'Angular Developer', salary: 48000, city: 'Pune' },
    { id: 7, name: 'Neha', role: 'Support Engineer', salary: 32000, city: 'Aurangabad' },
    { id: 8, name: 'Sanket', role: 'Team Lead', salary: 65000, city: 'Mumbai' },
    { id: 9, name: 'Anjali', role: 'Intern', salary: 20000, city: 'Pune' },
    { id: 10, name: 'Vishal', role: 'Project Manager', salary: 75000, city: 'Bangalore' }
  ];
  orders = [
    { id: 101, customer: 'Rahul', product: 'Samsung Galaxy S23', amount: 74999, status: 'Delivered' },
    { id: 102, customer: 'Amit', product: 'iPhone 14', amount: 79999, status: 'Pending' },
    { id: 103, customer: 'Sneha', product: 'Redmi Note 12', amount: 19999, status: 'Cancelled' },
    { id: 104, customer: 'Pooja', product: 'Realme Narzo 60', amount: 17999, status: 'Delivered' },
    { id: 105, customer: 'Rohit', product: 'OnePlus Nord CE', amount: 24999, status: 'Pending' },
    { id: 106, customer: 'Neha', product: 'Boat Airdopes', amount: 1999, status: 'Delivered' },
    { id: 107, customer: 'Sanket', product: 'Sony Headphones', amount: 2999, status: 'Delivered' },
    { id: 108, customer: 'Anjali', product: 'MI Power Bank', amount: 1499, status: 'Pending' },
    { id: 109, customer: 'Kiran', product: 'HP Pavilion', amount: 58999, status: 'Delivered' },
    { id: 110, customer: 'Vishal', product: 'Dell Inspiron', amount: 55999, status: 'Cancelled' }
  ];

  books = [
    { id: 1, title: 'Angular Basics', author: 'Mosh Hamedani', price: 499, available: 'Yes' },
    { id: 2, title: 'JavaScript Mastery', author: 'Kyle Simpson', price: 699, available: 'Yes' },
    { id: 3, title: 'TypeScript Deep Dive', author: 'Basarat Ali', price: 599, available: 'No' },
    { id: 4, title: 'HTML & CSS Design', author: 'Jon Duckett', price: 450, available: 'Yes' },
    { id: 5, title: 'React Explained', author: 'Zac Gordon', price: 650, available: 'Yes' },
    { id: 6, title: 'Node.js in Action', author: 'Mike Cantelon', price: 799, available: 'No' },
    { id: 7, title: 'Bootstrap Guide', author: 'Mark Otto', price: 399, available: 'Yes' },
    { id: 8, title: 'Vue.js Essentials', author: 'Evan You', price: 550, available: 'Yes' },
    { id: 9, title: 'Clean Code', author: 'Robert C. Martin', price: 899, available: 'Yes' },
    { id: 10, title: 'Web Performance', author: 'Addy Osmani', price: 749, available: 'No' }
  ];
attendance = [
    { id: 1, name: 'Rahul', date: '2025-01-01', status: 'Present' },
    { id: 2, name: 'Amit', date: '2025-01-01', status: 'Absent' },
    { id: 3, name: 'Sneha', date: '2025-01-01', status: 'Present' },
    { id: 4, name: 'Pooja', date: '2025-01-01', status: 'Present' },
    { id: 5, name: 'Rohit', date: '2025-01-01', status: 'Absent' },
    { id: 6, name: 'Neha', date: '2025-01-01', status: 'Present' },
    { id: 7, name: 'Kiran', date: '2025-01-01', status: 'Present' },
    { id: 8, name: 'Sanket', date: '2025-01-01', status: 'Absent' },
    { id: 9, name: 'Anjali', date: '2025-01-01', status: 'Present' },
    { id: 10, name: 'Vishal', date: '2025-01-01', status: 'Present' }
  ];
  payments = [
    { id: 1, customer: 'Rahul', mode: 'UPI', amount: 1500, date: '2025-01-02' },
    { id: 2, customer: 'Amit', mode: 'Cash', amount: 2200, date: '2025-01-02' },
    { id: 3, customer: 'Sneha', mode: 'Card', amount: 4999, date: '2025-01-02' },
    { id: 4, customer: 'Pooja', mode: 'UPI', amount: 1200, date: '2025-01-03' },
    { id: 5, customer: 'Rohit', mode: 'Cash', amount: 800, date: '2025-01-03' },
    { id: 6, customer: 'Neha', mode: 'UPI', amount: 2500, date: '2025-01-03' },
    { id: 7, customer: 'Kiran', mode: 'Card', amount: 6999, date: '2025-01-04' },
    { id: 8, customer: 'Sanket', mode: 'UPI', amount: 1999, date: '2025-01-04' },
    { id: 9, customer: 'Anjali', mode: 'Cash', amount: 999, date: '2025-01-04' },
    { id: 10, customer: 'Vishal', mode: 'Card', amount: 8999, date: '2025-01-05' }
  ];
}
