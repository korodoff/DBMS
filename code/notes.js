Create a database , give it name like "Human_Resource". Create a collection inside this named "employee"
Query the collection "hirelings" and list all the documents
Query the collection "hirelings" and list the employees who are having salary more than 30000





[Symbol(errorLabels)]: Set(0) {}
}
Data is inserted successfully.
[
  {
    _id: { oid: '61cc522daf6ba4fcb54e8c3b' },
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: { oid: '61cc522daf6ba4fcb54e8c3d' },
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: { oid: '61cc533baf6ba4fcb54e8c3f' },
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: { oid: '61cc533baf6ba4fcb54e8c41' },
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: { oid: '61cc5515af6ba4fcb54e8c43' },
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: { oid: '61cc5515af6ba4fcb54e8c45' },
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]
*Query the collection "hirelings" and list the employees who are having experience more than 2 years.

[
  {
    _id: { oid: '61cc5034af6ba4fcb54e8c38' },
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: { oid: '61cc522daf6ba4fcb54e8c3d' },
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: { oid: '61cc533baf6ba4fcb54e8c41' },
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: { oid: '61cc5515af6ba4fcb54e8c45' },
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]
[]
*Query the collection "hirelings" and list the employees who are graduated after 2015 and having experience more than 1 year 
  None
*Delete all the documents from "hirelings" where last company is Y
{ acknowledged: true, deletedCount: 0 }


*Query the collection "hirelings" and update the salary of the employee whose salary is greater than 70000 to 65000.
{
  acknowledged: true,
  modifiedCount: 0,
  upsertedId: null,
  upsertedCount: 0,
  matchedCount: 0
}
