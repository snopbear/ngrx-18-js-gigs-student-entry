
// Unit tests for: ngOnInit





import { StudentsRecords } from '../../state/students-records';



import { StudentTableComponent } from '../student-table.component';


// Mock classes
class MockObservable {
  subscribe = jest.fn();
}

class MockStore {
  select = jest.fn();
  dispatch = jest.fn();
}

interface MockAppState {}

// Test suite
describe('StudentTableComponent.ngOnInit() ngOnInit method', () => {
  let component: StudentTableComponent;
  let mockStore: MockStore<MockAppState>;
  let mockObservable: MockObservable<StudentsRecords[]>;

  beforeEach(() => {
    mockStore = new MockStore<MockAppState>() as any;
    mockObservable = new MockObservable<StudentsRecords[]>() as any;
    mockStore.select.mockReturnValue(mockObservable as any);
    component = new StudentTableComponent(mockStore as any);
  });

  describe('Happy Path', () => {
    it('should subscribe to dataSource$ and update dataSource with data', () => {
      // Arrange
      const mockData: StudentsRecords[] = [
        {
          name: 'John Doe',
          city: 'New York',
          country: 'USA',
          subject: 'Math',
          passportDeclaration: 'Yes',
          fitnessDeclaration: 'Yes',
          courseName: 'Algebra',
          date: '2023-10-01',
          state: 'NY',
          street: '5th Avenue',
          email: 'john.doe@example.com',
          phone: '1234567890',
          postalCode: 10001,
        },
      ];
      mockObservable.subscribe.mockImplementation((callback) => callback(mockData));

      // Act
      component.ngOnInit();

      // Assert
      expect(component.dataSource).toEqual(mockData);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty data array', () => {
      // Arrange
      const mockData: StudentsRecords[] = [];
      mockObservable.subscribe.mockImplementation((callback) => callback(mockData));

      // Act
      component.ngOnInit();

      // Assert
      expect(component.dataSource).toEqual([]);
    });

    it('should handle null data', () => {
      // Arrange
      mockObservable.subscribe.mockImplementation((callback) => callback(null));

      // Act
      component.ngOnInit();

      // Assert
      expect(component.dataSource).toBeNull();
    });

    it('should handle undefined data', () => {
      // Arrange
      mockObservable.subscribe.mockImplementation((callback) => callback(undefined));

      // Act
      component.ngOnInit();

      // Assert
      expect(component.dataSource).toBeUndefined();
    });
  });
});

// End of unit tests for: ngOnInit
