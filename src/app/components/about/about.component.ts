import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';
@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('cardHover', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('hover', style({
        transform: 'scale(1.05)'
      })),
      transition('normal <=> hover', animate('200ms ease-in-out'))
    ])
  ]
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  coreValues = [
    {
      title: 'Excellence in Care',
      description: 'Delivering world-class medical services with the latest technology and evidence-based practices.',
      icon: 'fas fa-star'
    },
    {
      title: 'Patient First',
      description: 'Every decision we make is centered around improving patient outcomes and experience.',
      icon: 'fas fa-user-md'
    },
    {
      title: 'Innovation',
      description: 'Continuously advancing healthcare through research and cutting-edge treatments.',
      icon: 'fas fa-microscope'
    }
  ];

  teamMembers = [
    {
      name: 'Dr. Sarah Johnson, MD, PhD',
      role: 'Chief Medical Officer',
      credentials: 'Harvard Medical School, Johns Hopkins Fellowship',
      description: 'Leading expert in innovative medical practices with over 15 years of experience in hospital administration.',
      image: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
      state: 'normal'
    },
    {
      name: 'Dr. Michael Chen, MD',
      role: 'Head of Cardiology',
      credentials: 'Stanford Medical School, Cleveland Clinic Fellowship',
      description: 'Pioneering researcher in minimally invasive cardiac procedures with over 1000 successful surgeries.',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg',
      state: 'normal'
    },
    {
      name: 'Dr. Emily Williams, MD, MPH',
      role: 'Director of Patient Care',
      credentials: 'Yale School of Medicine, Mayo Clinic Residency',
      description: 'Specialized in patient-centered care protocols and healthcare quality improvement.',
      image: 'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827775.jpg',
      state: 'normal'
    }
  ];

  statistics = [
    { value: '25+', label: 'Years of Excellence', icon: 'fas fa-calendar-alt' },
    { value: '100k+', label: 'Patients Treated', icon: 'fas fa-users' },
    { value: '150+', label: 'Medical Experts', icon: 'fas fa-user-md' },
    { value: '98%', label: 'Patient Satisfaction', icon: 'fas fa-heart' }
  ];

  testimonials = [
    {
      content: 'The care and attention I received was exceptional. The medical team went above and beyond in my cardiac treatment.',
      name: 'Robert Anderson',
      treatment: 'Cardiac Care Patient'
    },
    {
      content: 'State-of-the-art facilities and compassionate staff made my recovery journey much easier than expected.',
      name: 'Maria Garcia',
      treatment: 'Orthopedic Surgery'
    },
    {
      content: 'The preventive care program has transformed my approach to health. Thank you for the outstanding service.',
      name: 'James Wilson',
      treatment: 'Preventive Care'
    }
  ];
 
}