import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCardComponent } from '../package-card/package-card.component';
import { healthCategories } from '../../data/package.data/package.data.component';
import { HealthPackage, Category } from '../../models/healthpackage.model';

@Component({
  selector: 'app-cancer-screening',
  imports: [CommonModule, PackageCardComponent],
  templateUrl: './cancer-screening.component.html',
  styleUrls: ['./cancer-screening.component.css']
})
export class CancerScreeningComponent {
  cancerPackages: HealthPackage[] = healthCategories.find(cat => cat.id === 3)?.packages || [];

  trackByPackageId(index: number, pkg: HealthPackage): number {
    return pkg.id;
  }
}
