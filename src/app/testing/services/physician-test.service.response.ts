import { Physician } from '../../models/physician.model';

export const getPhysiciansMock = (): Physician[] => {
  return [
    {
      _id: '1',
      name: 'Kevin Melan',
      email: 'kevin@gmail.com',
      avatar: null,
      phone: '(420) 456-564',
      createdAt: new Date(),
      updatedAt: new Date(),
      active: true
    },
    {
      _id: '2',
      name: 'Jessica Cabrera',
      email: 'jessica@gmail.com',
      avatar: {
        _id: '12',
        url: '',
        size: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true
      },
      phone: '(420) 456-434',
      createdAt: new Date(),
      updatedAt: new Date(),
      active: false
    },
    {
      _id: '3',
      name: 'Laura Bedoya',
      email: 'laura@gmail.com',
      avatar: null,
      phone: '(420) 444-564',
      createdAt: new Date(),
      updatedAt: new Date(),
      active: true
    },
  ];
}

export const createPhysicianMock = (physician: Physician):
  { message: string, physician: Physician } => {
    return {
      message: `Physician ${ physician.name } created succesfully`,
      physician
    }
}

export const deletePhysicianMock = (physicianId): 
  { message: string, physician: Physician } => {
    const physician = {
      _id: '2',
      name: 'Jessica Cabrera',
      email: 'jessica@gmail.com',
      avatar: {
        _id: '12',
        url: '',
        size: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true
      },
      phone: '(420) 456-434',
      createdAt: new Date(),
      updatedAt: new Date(),
      active: false
    }
    return {
      message: `Physician ${ physician.name } created succesfully`,
      physician
    }
}
