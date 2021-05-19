import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAssetComponent } from './search-asset.component';

describe('SearchAssetComponent', () => {
  let component: SearchAssetComponent;
  let fixture: ComponentFixture<SearchAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
