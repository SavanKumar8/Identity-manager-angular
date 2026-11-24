import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { IdentityJSON, IdentityService } from '../core/service/ identity.service';

@Component({
  selector: 'app-identity-page',
  imports: [],
  templateUrl: './identities-page.html',
})
export class IdentityPage implements OnInit {
  searchInput = signal<string>('');
  selectedStatus = signal<string | 'all'>('all');
  selectedRisk = signal<string | 'all'>('all');
  identities = signal<IdentityJSON[]>([]);
  identityService = inject(IdentityService);

  ngOnInit() {
    this.identityService.getIdenities().subscribe((data: any) => this.identities.set(data));
  }

  debounceText = toSignal(
    toObservable(this.searchInput).pipe(
      debounceTime(300),
      map((value) => value.trim()),
      distinctUntilChanged(),
    ),
    {
      initialValue: '',
    },
  );

  filterdIndetities = computed(() => {
    const query = this.debounceText().toLowerCase();
    return this.identities().filter(
      (item) =>
        (this.selectedStatus() === 'all' || item.status === this.selectedStatus()) &&
        (this.selectedRisk() === 'all' || item.risk === this.selectedRisk()) &&
        (item.manager.toLocaleLowerCase().includes(query) ||
          item.department.toLowerCase().includes(query) ||
          item.name.toLowerCase().includes(query)),
    );
  });

  oncSeachInput(value: string) {
    this.searchInput.set(value);
  }

  constructor() {
    effect(() => {
      console.log('Debounced value:', this.debounceText());
    });
  }

  setselectedStatus(value: string) {
    this.selectedStatus.set(value);
    console.log(this.selectedStatus());
  }
  setselectedRiskvalue(value: string) {
    this.selectedRisk.set(value);
  }
}
