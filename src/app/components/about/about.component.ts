import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    gsap.from('.about-hero-title', { opacity: 0, y: -50, duration: 1, delay: 0.5, ease: 'power3.out' });
    gsap.from('.about-hero-subtitle', { opacity: 0, y: 50, duration: 1, delay: 1, ease: 'power3.out' });

    // Mission section animations
    gsap.from('.mission-content', {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: '.our-mission',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('.mission-image img', {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.our-mission',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Story section animations
    gsap.from('.story-description', {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: '.our-story',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('.story-image img', {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.our-story',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Team section animations
    gsap.from('.team-member', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.our-team',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Values section animations
    gsap.from('.value-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.our-values',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // CTA section animations
    gsap.from('.cta-title', {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('.cta-subtitle', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('.cta-button', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }
}