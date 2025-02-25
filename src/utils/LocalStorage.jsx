const employees = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Complete Project Report",
        "taskDescription": "Prepare and submit the monthly project report.",
        "date": "2025-02-25",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Meeting",
        "taskDescription": "Discuss project progress with the client.",
        "date": "2025-02-26",
        "category": "Meeting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Bug Fixing",
        "taskDescription": "Resolve issues in the payment gateway.",
        "date": "2025-02-27",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review the new feature implementation.",
        "date": "2025-02-24",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Team Standup",
        "taskDescription": "Attend the daily team standup meeting.",
        "date": "2025-02-25",
        "category": "Meeting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Database Optimization",
        "taskDescription": "Improve database query performance.",
        "date": "2025-02-28",
        "category": "Optimization",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
   "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    }
  },
  {
    "id": 3,
    "name": "Emily Johnson",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "UI Enhancement",
        "taskDescription": "Improve the UI/UX of the dashboard.",
        "date": "2025-02-26",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Security Audit",
        "taskDescription": "Perform a security audit on user authentication.",
        "date": "2025-03-01",
        "category": "Security",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    }
  },
  {
    "id": 4,
    "name": "Michael Brown",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Content Writing",
        "taskDescription": "Prepare content for the new website page.",
        "date": "2025-02-28",
        "category": "Content",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "SEO Optimization",
        "taskDescription": "Improve website SEO for better ranking.",
        "date": "2025-03-02",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "name": "Sarah Wilson",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Product Demo",
        "taskDescription": "Prepare and deliver a product demo.",
        "date": "2025-02-27",
        "category": "Sales",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Customer Support",
        "taskDescription": "Handle customer queries and resolve issues.",
        "date": "2025-02-25",
        "category": "Support",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  }
];

const admin = [
  {
    "id": 100,
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || [];
  return { admin, employees };
};
